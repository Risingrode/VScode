import json;
import requests  
url = "https://api.bilibili.com/x/v2/reply/main?&oid=176347087&type=11&next="
mList = []; # 存储参与评论的用户
i = 1; #页码
while True:
    target = url + '%d'%i; #请求每一页的数据的url
    r = requests.get(target).json(); #发送请求
    memberList = r["data"]["replies"]; #存储数据的字段
    if memberList == None:
        break;
    for member in memberList:
        #格式化数据
        m = {};
        m["mid"] = member["member"]["mid"];
        m["uname"] = member["member"]["uname"];
        m["avatar"] = member["member"]["avatar"];
        m["message"] = member["content"]["message"];
        print(m) #打印请求到的用户
        mList.append(m);
    i += 1;
print(len(mList)); #打印爬取到的数据总数，减掉我自己的两条评论。

# 将爬取到的数据到处json文件
with open("data.json","w",encoding="utf-8") as file:
    file.write(json.dumps(mList,indent=2,ensure_ascii=False));