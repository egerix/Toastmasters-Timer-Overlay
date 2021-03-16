import { onSetting } from './settings'
import { fixTimeMap, fixTime } from './util'
import { ITimePreset } from './types'

export const customPreset: ITimePreset = {
    green: '00:05',
    yellow: '00:10',
    red: '00:15',
    overtime: '00:20'
}

export const timePresets = fixTimeMap({
    'IntSync': {
        green: '0:00',
        yellow: '3:00',
        red: '4:00',
        overtime: '4:30'
    },
    'Test': {
        green: '0:05',
        yellow: '0:10',
        red: '0:15',
        overtime: '0:20'
    }
})

onSetting('timerGreen', (val) => {
    const time = fixTime(val, null)
    if (time != null) {
        customPreset.green = time
    }
},timePresets)

onSetting('timerYellow', (val) => {
    const time = fixTime(val, null)
    if (time != null) {
        customPreset.yellow = time
    }
},timePresets)

onSetting('timerRed', (val) => {
    const time = fixTime(val, null)
    if (time != null) {
        customPreset.red = time
    }
},timePresets)

onSetting('timerOvertime', (val) => {
    const time = fixTime(val, null)
    if (time != null) {
        customPreset.overtime = time
    }
},timePresets)

export function getTimeIntervals(key: string) {
    if (key === 'Custom') {
        return customPreset
    }
    if (key in timePresets) {
        return timePresets[key]
    } else {
        return null
    }
}