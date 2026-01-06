import dayjs from 'dayjs'

export const parseGoogleDate = (googleDate: string) => {
    const match = googleDate.match(/Date\((\d+),(\d+),(\d+)\)/)

    if (!match) return null

    const [, year, month, day] = match.map(Number)

    return dayjs(new Date(year, month, day))
        .format('DD/MM/YYYY')
}
