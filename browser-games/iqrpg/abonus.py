curAction = int(input("Current progress: "))
curBonus = int(input("Current AB: "))
reqBonus = int(input("AB Goal:  "))
playTime = int(input("Hours of daily play: "))
playHour = playTime/24

def calculate():
    reqRange = (reqBonus - curBonus) + 1
    totAction = 0 - curAction

    for i in range(reqRange):
        totAction += curBonus + i

    toSecond = (totAction * 6) / playHour
    toMinute = toSecond / 60
    toHour = toMinute / 60
    toDay = toHour / 24
    toWeek = toDay / 7
    print("Actions: " + str(totAction))
    print("Seconds: " + str(toSecond))
    print("Minutes: " + str(toMinute))
    print("Hours: " + str(toHour))
    print("Days: " + str(toDay))
    print("Weeks: " + str(toWeek))
calculate()
