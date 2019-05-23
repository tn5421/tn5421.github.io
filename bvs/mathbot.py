import discord
from discord.ext import commands
import time

bot = commands.Bot(command_prefix='!')

@bot.command()
async def ping(ctx):
    await ctx.send('pong')

@bot.command()
async def wkai(ctx):
    wk_list = ["Craftworld at War", "AspenStory", "ADAM", "FarmVale", "ForeverQuest"]
    rday = (int(time.strftime("%d")))
    wk_day = rday % 5
    day_wkai = "Today's WKAI summon is a "
    day_wkai += wk_list[wk_day]
    await ctx.send(day_wkai)

bot.run("a token")
