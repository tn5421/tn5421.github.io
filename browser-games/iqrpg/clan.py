import math

whichBoost = int(input("If you are upgrading Drop Boost, enter 1.  Otherwise, enter 0 "))
clanUpg = int(input("Add how many levels of Clan Totem? "))
persUpg = int(input("Add how many upgrades to yourself? "))
clanCurUpg = int(input("Add how many totems of the selected type you already have "))
persCurUpg = int(input("Add how much personal boost of the selected type you already have "))
clanMemb = int(input("How many contributing members your clan has: "))

resCost = 2
credCost = 50000

upgrades = [[0, 0, 0, 0], [1, 60000, 50, 60000], [2, 138000, 61, 135000], [3, 237000, 72, 225000],
[4, 363000, 84, 333000], [5, 521000, 96, 465000], [6, 718000, 109, 624000], [7, 916000, 122, 810000]]

premPersCost = 0

def calculate():
	if whichBoost = 1:
		clanEffect = 2
	else:
		clanEffect = 4

	clanPersEquiv = clanUpg * clanEffect
	clanCurPersEquiv = clanCurUpg * clanEffect

	clanTotUpg = clanUpg + clanCurUpg
	clanUpgGold = 0
	for i in range(clanUpg):
		goldAmt = upgrades[clanCurUpg+i][1]
		credAmt = upgrades[clanCurUpg+i][2]
		resAmt = upgrades[clanCurUpg+i][3]
		clanUpgGold += goldAmt + (credAmt * credCost) + (resAmt * resCost)
