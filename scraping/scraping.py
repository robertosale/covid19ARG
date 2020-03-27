import bs4
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup


myUrl = 'https://public.flourish.studio/visualisation/1586532/embed?auto=1'
uClient = uReq(myUrl)
pageHtml= uClient.read()
uClient.close()

pageSoup = soup(pageHtml,"html.parser")


string = pageSoup.find_all("script")[-1]

string = str(string)

json = string[string.find("_Flourish_data = ")+16:string.find("]}]};")+4]

print(json)