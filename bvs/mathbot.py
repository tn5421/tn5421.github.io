import discord
from discord.ext import commands
import time

bot = commands.Bot(command_prefix='!')

wk_list = ["Craftworld at War", "AspenStory", "ADAM", "FarmVale", "ForeverQuest"]
rday = (int(time.strftime("%d")))
wk_day = rday % 5

@bot.command()
async def ping(ctx):
    await ctx.send('pong')

@bot.command()
async def wkai(ctx):
    day_wkai = "Today's WKAI summon is a "
    day_wkai += wk_list[wk_day]
    await ctx.send(day_wkai)

@bot.command()
async def adam(ctx):
    adam_wkai = "The next ADAM summoning is in "
    if wk_day == 2:
        adam_wkai += "Five Days"
    else:
        adam_wkai += (str((2 - rday) % 5)) + " Days"
    await ctx.send(adam_wkai)

bot.run("a token")
