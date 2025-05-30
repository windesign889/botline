var CHANNEL_ACCESS_TOKEN = 'FiQA08VrkbOeZevgCJJk0XG+bsLKCdI+owyqveFX+GAmE8Ayuo8EB6wZeOUFFO9mBi3gZ0r7dymfdugd6mn9z736ko6uCS/0uPbaaRa6q0zSq7VZMSf8eY5/NAH7nPXIhm8P8OAVb8R1NJswrJK+XgdB04t89/1O/w1cDnyilFU='; // นำ TOken Message Api Line มาใส่
var line_endpoint = 'https://api.line.me/v2/bot/message/reply';

var ws = SpreadsheetApp.openById('16jpyO-bmAiVbyx9vuk4GwdYPOtDZC6eAU55nnBg3dpE'); //นำ ID Google Sheet ที่ช่องนี้
var ba = SpreadsheetApp.openById('16jpyO-bmAiVbyx9vuk4GwdYPOtDZC6eAU55nnBg3dpE'); //ห้ามเเก้ไขเด็ดขาด

function doPost(e) {
    var json = JSON.parse(e.postData.contents);
    var reply_token = json.events[0].replyToken;
    var message = json.events[0].message.text;

    // เรียกใช้ฟังก์ชันการตรวจสอบข้อมูล
    var result = checkData(reply_token, message);

    // ส่งข้อมูลกลับไปยัง LINE Messaging API
    var response = UrlFetchApp.fetch(line_endpoint, {
        'headers': {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
        },
        'method': 'post',
        'payload': JSON.stringify({
            'replyToken': reply_token,
            'messages': [result],
        }),
    });

    Logger.log(response.getContentText()); // เพิ่มการล็อกเพื่อตรวจสอบการตอบกลับจาก LINE API

    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}

// ฟังก์ชันตรวจสอบข้อมูล
function checkData(reply_token, message) {
    var sheet = ws.getSheetByName("ReplyBonus"); //แก้3
    var data = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getDisplayValues();
    var found = false;
    var result = {};

    const webname = sheet.getRange("BL2").getValue();
    const iconQuick = sheet.getRange("BK2").getValue();

    const iconres = sheet.getRange("C38").getValue();
    const iconBo = sheet.getRange("C39").getValue();
    const iconLotto = sheet.getRange("C40").getValue();
    const iconPro = sheet.getRange("C41").getValue();
    const iconadd = sheet.getRange("C42").getValue();

    const tyepres = sheet.getRange("D38").getValue();
    const tyeBo = sheet.getRange("D39").getValue();
    const typeLotto = sheet.getRange("D40").getValue();
    const typePro = sheet.getRange("D41").getValue();
    const typeadd = sheet.getRange("D42").getValue();

    const labelres = sheet.getRange("E38").getValue();
    const labelBo = sheet.getRange("E39").getValue();
    const labelLotto = sheet.getRange("E40").getValue();
    const labelPro = sheet.getRange("E41").getValue();
    const labeladd = sheet.getRange("E42").getValue();

    const resultres = sheet.getRange("F38").getValue();
    const resulBo = sheet.getRange("F39").getValue();
    const resulLotto = sheet.getRange("F40").getValue();
    const resulPro = sheet.getRange("F41").getValue();
    const resuladd = sheet.getRange("F42").getValue();

    const stres = sheet.getRange("G38").getValue();
    const stBo = sheet.getRange("G39").getValue();
    const stLotto = sheet.getRange("G40").getValue();
    const stPro = sheet.getRange("G41").getValue();
    const stadd = sheet.getRange("G42").getValue();

    
  //============ชุดข้อมูลที่เพิ่มเข้ามาใหม่ ======================
  const rep = ws.getSheetByName("replyranlot");
  const lottoData = rep.getRange(2, 1, rep.getLastRow(), sheet.getLastColumn()).getDisplayValues();
  
  for(let i = 0; i < lottoData.length; i++){
    const keyword = lottoData[i][0]; //คอลัม A 
    const image = lottoData[i][1];//คอลัม B
    const nameData = lottoData[i][2];//คอลัม C
    const box1 = lottoData[i][3];//คอลัม D
    const box2 = lottoData[i][4];//คอลัม E
    const box3 = lottoData[i][5];//คอลัม F
    
    if(keyword === message){
      result = { /* เอา flex มาใส่*/};
      found = true;
      break;
      
    }
  }

  Logger.log(rep)
  //=========== สิ้นสุดข้อมูล =================

   //-------------------เริ่มเมนูหวย--------------------
   if (message == 'หวย') {
    result = {
      "type": "flex",
      "altText": "เลือกองค์ หยิบเลขให้",
      "contents": {
        "type": "carousel",
        "contents": [
          // ⬇️ วาง bubble ที่คุณสร้างไว้ตรงนี้
          // เพื่อความกระชับ ผมใส่เฉพาะคีย์หลัก ถ้าคุณมี bubble จริง ให้แทนด้วย full bubble JSON
    {
      "type": "bubble",
      "hero": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://img5.pic.in.th/file/secure-sv1/123404314872a0cb8b8c.png",
                "aspectRatio": "6:2",
                "aspectMode": "cover",
                "align": "center",
                "offsetEnd": "2px",
                "size": "100px"
              }
            ],
            "justifyContent": "center",
            "alignItems": "center",
            "width": "90px",
            "height": "40px",
            "maxWidth": "90px",
            "maxHeight": "40px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "สมัครสมาชิก",
                "color": "#ffffff",
                "size": "sm"
              }
            ],
            "justifyContent": "center",
            "alignItems": "center",
            "width": "90px",
            "height": "30px",
            "cornerRadius": "100px",
            "action": {
              "type": "uri",
              "label": "action",
              "uri": "https://member.ruok69.com/th?affiliateId=YKi8L42f1c"
            },
            "background": {
              "type": "linearGradient",
              "angle": "0deg",
              "startColor": "#990000",
              "endColor": "#FF0000"
            },
            "maxWidth": "90px",
            "maxHeight": "30px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "เข้าเล่นเกม",
                "color": "#ffffff",
                "size": "sm"
              }
            ],
            "justifyContent": "center",
            "alignItems": "center",
            "width": "90px",
            "height": "30px",
            "cornerRadius": "100px",
            "action": {
              "type": "uri",
              "label": "action",
              "uri": "https://member.ruok69.com/th?affiliateId=YKi8L42f1c"
            },
            "maxHeight": "30px",
            "maxWidth": "90px",
            "background": {
              "type": "linearGradient",
              "angle": "0deg",
              "startColor": "#056f00",
              "endColor": "#2baf2b"
            },
            "offsetStart": "3px"
          }
        ],
        "justifyContent": "center",
        "alignItems": "center",
        "position": "relative",
        "maxWidth": "300px",
        "paddingAll": "5px",
        "width": "300px",
        "height": "50px",
        "maxHeight": "300px",
        "background": {
          "type": "linearGradient",
          "angle": "0deg",
          "startColor": "#33021b",
          "endColor": "#6b3904"
        }
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "เลือกองค์ หยิบเลขให้",
            "color": "#FFFFFF",
            "size": "20px",
            "offsetStart": "45px",
            "offsetBottom": "10px",
            "weight": "bold",
            "scaling": true
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "ท้าวเวสสุวรรณ",
                    "color": "#ffffff",
                    "size": "xxs",
                    "weight": "bold",
                    "align": "center"
                  },
                  {
                    "type": "separator",
                    "color": "#1bddf2"
                  },
                  {
                    "type": "image",
                    "url": "https://img2.pic.in.th/pic/photo_2025-05-24_20-55-36.jpg",
                    "aspectMode": "cover",
                    "size": "50px",
                    "aspectRatio": "1:1",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": "Lord Vessuwan"
                    },
                    "align": "center",
                    "offsetTop": "2px"
                  }
                ],
                "justifyContent": "center",
                "alignItems": "center",
                "width": "80px",
                "height": "80px",
                "maxHeight": "110px",
                "maxWidth": "70px",
                "cornerRadius": "10px",
                "borderWidth": "2px",
                "borderColor": "#b01025",
                "background": {
                  "type": "linearGradient",
                  "angle": "0deg",
                  "startColor": "#02000b",
                  "endColor": "#02000b"
                },
                "margin": "3px",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "Lord Vessuwan"
                },
                "offsetBottom": "20px",
                "offsetEnd": "40px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "พญานาคราช",
                    "color": "#ffffff",
                    "size": "xxs",
                    "weight": "bold"
                  },
                  {
                    "type": "separator",
                    "color": "#1bddf2"
                  },
                  {
                    "type": "image",
                    "url": "https://img2.pic.in.th/pic/photo_2025-05-26_00-21-04.jpg",
                    "aspectMode": "cover",
                    "size": "50px",
                    "aspectRatio": "1:1",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": "The Naga King"
                    },
                    "align": "center",
                    "offsetTop": "2px"
                  }
                ],
                "justifyContent": "center",
                "alignItems": "center",
                "width": "80px",
                "height": "80px",
                "maxHeight": "110px",
                "maxWidth": "70px",
                "cornerRadius": "10px",
                "borderWidth": "2px",
                "borderColor": "#b01025",
                "background": {
                  "type": "linearGradient",
                  "angle": "0deg",
                  "startColor": "#02000b",
                  "endColor": "#02000b"
                },
                "margin": "3px",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "The Naga King"
                },
                "offsetBottom": "20px",
                "offsetEnd": "40px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "พระพิฆเนศ",
                    "color": "#ffffff",
                    "size": "xxs",
                    "weight": "bold",
                    "align": "center"
                  },
                  {
                    "type": "separator",
                    "color": "#1bddf2"
                  },
                  {
                    "type": "image",
                    "url": "https://img5.pic.in.th/file/secure-sv1/photo_2025-05-26_00-20-50.jpg",
                    "aspectMode": "cover",
                    "size": "50px",
                    "aspectRatio": "1:1",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": "Lord Ganesha"
                    },
                    "align": "center",
                    "offsetTop": "2px"
                  }
                ],
                "justifyContent": "center",
                "alignItems": "center",
                "width": "80px",
                "height": "80px",
                "maxHeight": "110px",
                "maxWidth": "70px",
                "cornerRadius": "10px",
                "borderWidth": "2px",
                "borderColor": "#b01025",
                "background": {
                  "type": "linearGradient",
                  "angle": "0deg",
                  "startColor": "#02000b",
                  "endColor": "#02000b"
                },
                "margin": "3px",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "Lord Ganesha"
                },
                "offsetBottom": "20px",
                "offsetEnd": "40px"
              }
            ],
            "justifyContent": "center",
            "alignItems": "center",
            "maxHeight": "85px",
            "maxWidth": "300px",
            "width": "500px",
            "height": "120px",
            "paddingTop": "40px",
            "paddingStart": "70px",
            "offsetEnd": "15px"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "color": "#ffffff",
                    "size": "xxs",
                    "weight": "bold",
                    "align": "center",
                    "text": "“ไอ้ไข่”"
                  },
                  {
                    "type": "separator",
                    "color": "#1bddf2"
                  },
                  {
                    "type": "image",
                    "url": "https://img2.pic.in.th/pic/photo_2025-05-26_00-20-57.jpg",
                    "aspectMode": "cover",
                    "size": "50px",
                    "aspectRatio": "1:1",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": "Ai Kai"
                    },
                    "align": "center",
                    "offsetTop": "2px"
                  }
                ],
                "justifyContent": "center",
                "alignItems": "center",
                "width": "80px",
                "height": "80px",
                "maxHeight": "110px",
                "maxWidth": "70px",
                "cornerRadius": "10px",
                "borderWidth": "2px",
                "borderColor": "#b01025",
                "background": {
                  "type": "linearGradient",
                  "angle": "0deg",
                  "startColor": "#02000b",
                  "endColor": "#02000b"
                },
                "margin": "3px",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "Ai Kai"
                },
                "offsetBottom": "20px",
                "offsetEnd": "40px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "หนูแหว๋ว",
                    "color": "#ffffff",
                    "size": "xxs",
                    "weight": "bold"
                  },
                  {
                    "type": "separator",
                    "color": "#1bddf2"
                  },
                  {
                    "type": "image",
                    "url": "https://img5.pic.in.th/file/secure-sv1/photo_2025-05-26_00-21-08.jpg",
                    "aspectMode": "cover",
                    "size": "50px",
                    "aspectRatio": "1:1",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": "awesome"
                    },
                    "align": "center",
                    "offsetTop": "2px"
                  }
                ],
                "justifyContent": "center",
                "alignItems": "center",
                "width": "80px",
                "height": "80px",
                "maxHeight": "110px",
                "maxWidth": "70px",
                "cornerRadius": "10px",
                "borderWidth": "2px",
                "borderColor": "#b01025",
                "background": {
                  "type": "linearGradient",
                  "angle": "0deg",
                  "startColor": "#02000b",
                  "endColor": "#02000b"
                },
                "margin": "3px",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "Little Mouse"
                },
                "offsetBottom": "20px",
                "offsetEnd": "40px"
              }
            ],
            "justifyContent": "center",
            "alignItems": "center",
            "maxHeight": "85px",
            "maxWidth": "300px",
            "width": "500px",
            "height": "120px",
            "paddingTop": "40px",
            "paddingStart": "70px",
            "offsetEnd": "15px"
          }
        ],
        "background": {
          "type": "linearGradient",
          "angle": "20deg",
          "startColor": "#33021b",
          "endColor": "#6b3904"
        }
      },
      "styles": {
        "body": {
          "separator": true
        }
      }
      }
    ]
    }

    };
    return result;
    }

    //-------------------จบเมนูหวย--------------------

    //----------------------------------------------

    for (var i = 0; i < data.length; i++) {
        if (data[i][0] == message) {
            i = i + 2;

            const data1 = sheet.getRange(i, 1).getDisplayValue(); //อ่านค่า=ค่ายเกม
            const data2 = sheet.getRange(i, 2).getDisplayValue(); //สุ่มเลข

            // ========================== ตัวเเปร blog game 1 =====================
            const datagameName = sheet.getRange(i, 3).getDisplayValue(); //Game Name
            const dataCover = sheet.getRange(i, 4).getDisplayValue(); //Cover
            const dataIcongame = sheet.getRange(i, 5).getDisplayValue(); //Icon Game
            const dataBtstartCor = sheet.getRange(i, 6).getDisplayValue(); //BgStartColor
            const dataBendCor = sheet.getRange(i, 7).getDisplayValue(); //BgEndColor
            const dataBCentCor = sheet.getRange(i, 8).getDisplayValue(); //BgCenterColor
            const dataTextCor = sheet.getRange(i, 9).getDisplayValue(); //สีข้อความ
            const dataTextTks = sheet.getRange(i, 10).getDisplayValue(); //ตัวคุณคุณสูงสุด
            const dataTextDis = sheet.getRange(i, 11).getDisplayValue(); //โอกาสชนะ %
            const dataImgDis = sheet.getRange(i, 12).getDisplayValue(); //Image Display %
            const dataFreespin = sheet.getRange(i, 13).getDisplayValue(); //Free Spin
            const dataPlayTo = sheet.getRange(i, 14).getDisplayValue(); //กำลังเล่น

            // ========================== ตัวเเปร blog game 2 =====================
            const datagameName2 = sheet.getRange(i, 16).getDisplayValue(); //Game Name
            const dataCover2 = sheet.getRange(i, 17).getDisplayValue(); //Cover
            const dataIcongame2 = sheet.getRange(i, 18).getDisplayValue(); //Icon Game
            const dataBtstartCor2 = sheet.getRange(i, 19).getDisplayValue(); //BgStartColor
            const dataBendCor2 = sheet.getRange(i, 20).getDisplayValue(); //BgEndColor
            const dataBCentCor2 = sheet.getRange(i, 21).getDisplayValue(); //BgCenterColor
            const dataTextCor2 = sheet.getRange(i, 22).getDisplayValue(); //สีข้อความ
            const dataTextTks2 = sheet.getRange(i, 23).getDisplayValue(); //ตัวคุณคุณสูงสุด
            const dataTextDis2 = sheet.getRange(i, 24).getDisplayValue(); //โอกาสชนะ %
            const dataImgDis2 = sheet.getRange(i, 25).getDisplayValue(); //Image Display %
            const dataFreespin2 = sheet.getRange(i, 26).getDisplayValue(); //Free Spin
            const dataPlayTo2 = sheet.getRange(i, 27).getDisplayValue(); //กำลังเล่น

            // ========================== ตัวเเปร blog game 3 =====================
            const datagameName3 = sheet.getRange(i, 29).getDisplayValue(); //Game Name
            const dataCover3 = sheet.getRange(i, 30).getDisplayValue(); //Cover
            const dataIcongame3 = sheet.getRange(i, 31).getDisplayValue(); //Icon Game
            const dataBtstartCor3 = sheet.getRange(i, 32).getDisplayValue(); //BgStartColor
            const dataBendCor3 = sheet.getRange(i, 33).getDisplayValue(); //BgEndColor
            const dataBCentCor3 = sheet.getRange(i, 34).getDisplayValue(); //BgCenterColor
            const dataTextCor3 = sheet.getRange(i, 35).getDisplayValue(); //สีข้อความ
            const dataTextTks3 = sheet.getRange(i, 36).getDisplayValue(); //ตัวคุณคุณสูงสุด
            const dataTextDis3 = sheet.getRange(i, 37).getDisplayValue(); //โอกาสชนะ %
            const dataImgDis3 = sheet.getRange(i, 38).getDisplayValue(); //Image Display %
            const dataFreespin3 = sheet.getRange(i, 39).getDisplayValue(); //Free Spin
            const dataPlayTo3 = sheet.getRange(i, 40).getDisplayValue(); //กำลังเล่น


            // ========================== ตัวเเปร blog game 4 =====================
            const datagameName4 = sheet.getRange(i, 42).getDisplayValue(); //Game Name
            const dataCover4 = sheet.getRange(i, 43).getDisplayValue(); //Cover
            const dataIcongame4 = sheet.getRange(i, 44).getDisplayValue(); //Icon Game
            const dataBtstartCor4 = sheet.getRange(i, 45).getDisplayValue(); //BgStartColor
            const dataBendCor4 = sheet.getRange(i, 46).getDisplayValue(); //BgEndColor
            const dataBCentCor4 = sheet.getRange(i, 47).getDisplayValue(); //BgCenterColor
            const dataTextCor4 = sheet.getRange(i, 48).getDisplayValue(); //สีข้อความ
            const dataTextTks4 = sheet.getRange(i, 49).getDisplayValue(); //ตัวคุณคุณสูงสุด
            const dataTextDis4 = sheet.getRange(i, 50).getDisplayValue(); //โอกาสชนะ %
            const dataImgDis4 = sheet.getRange(i, 51).getDisplayValue(); //Image Display %
            const dataFreespin4 = sheet.getRange(i, 52).getDisplayValue(); //Free Spin
            const dataPlayTo4 = sheet.getRange(i, 53).getDisplayValue(); //กำลังเล่น

            // ============================== ตัวแปรข้อมูลเว็บไซต์ ==================== 
            const dataLinkweb = sheet.getRange(i, 55).getDisplayValue(); //กำลังเล่น
            const dataimgLogo = sheet.getRange(i, 56).getDisplayValue(); //กำลังเล่น
            const datalogogames = sheet.getRange(i, 57).getDisplayValue(); //กำลังเล่น
            const dataThong = sheet.getRange(i, 58).getDisplayValue(); //กำลังเล่น
            const dataPoster = sheet.getRange(i, 59).getDisplayValue(); //กำลังเล่น
            const dataDisscitpImg = sheet.getRange(i, 60).getDisplayValue(); //กำลังเล่น
            const dataTimeText = sheet.getRange(i, 61).getDisplayValue(); //กำลังเล่น
            const dataTimes = sheet.getRange(i, 62).getDisplayValue(); //กำลังเล่น

            result = {
                "type": "flex",
                "altText": "4 เกมแตกดี ตั้งแต่เวลา " + dataTimes + " น.",
                "contents": {
                    "type": "carousel",
                    "contents": [
                        {
                            "type": "bubble",
                            "hero": {
                                "type": "image",
                                "url": dataPoster,
                                "size": "full",
                                "aspectMode": "cover",
                                "aspectRatio": "2:1"
                            },
                            "body": {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "image",
                                                "url": "https://img2.pic.in.th/pic/Untitled-15582_3-ezgif.com-gif-to-apng-converter.png",
                                                "aspectRatio": "300:80",
                                                "size": "300px",
                                                "animated": true
                                            }

                                        ],
                                        "position": "relative",
                                        "maxHeight": "40px",
                                        "justifyContent": "center",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": []
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": dataTimeText,
                                                "size": "lg",
                                                "color": "#FFFFFF",
                                                "weight": "bold"
                                            }
                                        ],
                                        "position": "relative",
                                        "alignItems": "center",
                                        "justifyContent": "center",
                                        "offsetTop": "1px"
                                    },
                                    {
                                        "type": "image",
                                        "url": dataDisscitpImg,
                                        "aspectRatio": "2:1",
                                        "size": "full",
                                        "aspectMode": "cover"
                                    }
                                ],
                                "paddingAll": "2px"
                            },
                            "styles": {
                                "body": {
                                    "backgroundColor": "#000000"
                                }
                            }
                        },
                        {
                            "type": "bubble",
                            "hero": {
                                "type": "image",
                                "url": dataCover,
                                "size": "full",
                                "aspectRatio": "2:1",
                                "aspectMode": "cover",
                                "backgroundColor": "#000000"
                            },
                            "body": {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "horizontal",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": dataIcongame,
                                                                "size": "60px",
                                                                "align": "start"
                                                            }
                                                        ],
                                                        "maxWidth": "60px",
                                                        "maxHeight": "60px",
                                                        "width": "60px",
                                                        "height": "60px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "box",
                                                                "layout": "baseline",
                                                                "contents": [
                                                                    {
                                                                        "type": "text",
                                                                        "text": "อัตราการชนะของเกม",
                                                                        "size": "lg",
                                                                        "color": dataTextCor
                                                                    }
                                                                ],
                                                                "paddingStart": "10px"
                                                            },
                                                            {
                                                                "type": "box",
                                                                "layout": "baseline",
                                                                "contents": [
                                                                    {
                                                                        "type": "text",
                                                                        "text": datagameName,
                                                                        "weight": "bold",
                                                                        "size": "lg",
                                                                        "color": dataTextCor,
                                                                        "align": "start"
                                                                    }
                                                                ],
                                                                "justifyContent": "space-around",
                                                                "alignItems": "center",
                                                                "paddingStart": "5px"
                                                            }
                                                        ],
                                                        "width": "230px",
                                                        "height": "60px",
                                                        "maxHeight": "60px",
                                                        "maxWidth": "230px"
                                                    }
                                                ],
                                                "position": "relative",
                                                "justifyContent": "center",
                                                "alignItems": "center",
                                                "width": "300px",
                                                "height": "60px",
                                                "maxWidth": "300px",
                                                "maxHeight": "60px"
                                            }
                                        ],
                                        "position": "relative",
                                        "width": "300px",
                                        "maxWidth": "300px",
                                        "height": "60px",
                                        "maxHeight": "60px",
                                        "justifyContent": "center",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": `รวมสถิติผู้เล่นจาก ${webname}`,
                                                "size": "md",
                                                "color": dataTextCor
                                            }
                                        ],
                                        "position": "relative"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "image",
                                                "url": dataImgDis,
                                                "aspectRatio": "300:20",
                                                "size": "300px",
                                                "animated": true
                                            }

                                        ],
                                        "maxWidth": "300px",
                                        "maxHeight": "30px",
                                        "justifyContent": "center",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "โอกาสชนะ",
                                                                "size": "sm",
                                                                "color": dataTextCor,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "paddingStart": "10px",
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataTextDis,
                                                                "size": "sm",
                                                                "color": dataTextCor,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center",
                                                        "paddingStart": "10px"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "ฟรีสปิน",
                                                                "size": "sm",
                                                                "color": dataTextCor,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataFreespin,
                                                                "size": "sm",
                                                                "color": dataTextCor,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "ตัวคูณสูงสุด",
                                                                "size": "sm",
                                                                "color": dataTextCor,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataTextTks,
                                                                "size": "sm",
                                                                "color": dataTextCor,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "กำลังเล่น",
                                                                "size": "sm",
                                                                "color": dataTextCor,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataPlayTo,
                                                                "size": "sm",
                                                                "color": dataTextCor,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    }
                                                ]
                                            }
                                        ],
                                        "position": "relative",
                                        "justifyContent": "space-evenly",
                                        "alignItems": "flex-start",
                                        "width": "300px",
                                        "height": "40px",
                                        "maxWidth": "300px",
                                        "maxHeight": "40px",
                                        "paddingAll": "2px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": datalogogames,
                                                        "aspectRatio": "9:2",
                                                        "aspectMode": "cover",
                                                        "size": "60px"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": "ใบรับรอง",
                                                        "color": dataTextCor,
                                                        "size": "12px",
                                                        "flex": 1,
                                                        "offsetTop": "2px"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "flex-start",
                                                "width": "65px"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": dataimgLogo,
                                                        "aspectRatio": "5:2",
                                                        "aspectMode": "cover",
                                                        "size": "100px"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": dataThong,
                                                        "aspectRatio": "3:1",
                                                        "aspectMode": "cover",
                                                        "size": "60px"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": "ภาษาที่รองรับ",
                                                        "color": "#ffffff",
                                                        "size": "12px",
                                                        "flex": 1,
                                                        "offsetTop": "2px"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "flex-end",
                                                "width": "70px"
                                            }
                                        ],
                                        "justifyContent": "space-around",
                                        "alignItems": "center",
                                        "position": "relative",
                                        "maxHeight": "40px",
                                        "maxWidth": "290px",
                                        "paddingAll": "5px",
                                        "offsetTop": "10px",
                                        "width": "290px",
                                        "height": "40px"
                                    }
                                ],
                                "background": {
                                    "type": "linearGradient",
                                    "angle": "0deg",
                                    "startColor": dataBtstartCor,
                                    "endColor": dataBendCor,
                                    "centerColor": dataBCentCor
                                },
                                "justifyContent": "center",
                                "alignItems": "center",
                                "position": "relative",
                                "paddingAll": "2px"
                            },
                            "action": {
                                "type": "uri",
                                "label": "action",
                                "uri": dataLinkweb
                            }
                        },
                        {
                            "type": "bubble",
                            "hero": {
                                "type": "image",
                                "url": dataCover2,
                                "size": "full",
                                "aspectRatio": "2:1",
                                "aspectMode": "cover",
                                "backgroundColor": "#000000"
                            },
                            "body": {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "horizontal",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": dataIcongame2,
                                                                "size": "60px",
                                                                "align": "start"
                                                            }
                                                        ],
                                                        "maxWidth": "60px",
                                                        "maxHeight": "60px",
                                                        "width": "60px",
                                                        "height": "60px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "box",
                                                                "layout": "baseline",
                                                                "contents": [
                                                                    {
                                                                        "type": "text",
                                                                        "text": "อัตราการชนะของเกม",
                                                                        "size": "lg",
                                                                        "color": dataTextCor2
                                                                    }
                                                                ],
                                                                "paddingStart": "10px"
                                                            },
                                                            {
                                                                "type": "box",
                                                                "layout": "baseline",
                                                                "contents": [
                                                                    {
                                                                        "type": "text",
                                                                        "text": datagameName2,
                                                                        "weight": "bold",
                                                                        "size": "lg",
                                                                        "color": dataTextCor2,
                                                                        "align": "start"
                                                                    }
                                                                ],
                                                                "justifyContent": "space-around",
                                                                "alignItems": "center",
                                                                "paddingStart": "5px"
                                                            }
                                                        ],
                                                        "width": "230px",
                                                        "height": "60px",
                                                        "maxHeight": "60px",
                                                        "maxWidth": "230px"
                                                    }
                                                ],
                                                "position": "relative",
                                                "justifyContent": "center",
                                                "alignItems": "center",
                                                "width": "300px",
                                                "height": "60px",
                                                "maxWidth": "300px",
                                                "maxHeight": "60px"
                                            }
                                        ],
                                        "position": "relative",
                                        "width": "300px",
                                        "maxWidth": "300px",
                                        "height": "60px",
                                        "maxHeight": "60px",
                                        "justifyContent": "center",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": `รวมสถิติผู้เล่นจาก ${webname}`,
                                                "size": "md",
                                                "color": dataTextCor2
                                            }
                                        ],
                                        "position": "relative"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "image",
                                                "url": dataImgDis2,
                                                "aspectRatio": "300:20",
                                                "size": "300px",
                                                "animated": true
                                            }

                                        ],
                                        "maxWidth": "300px",
                                        "maxHeight": "30px",
                                        "justifyContent": "center",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "โอกาสชนะ",
                                                                "size": "sm",
                                                                "color": dataTextCor2,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "paddingStart": "10px",
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataTextDis2,
                                                                "size": "sm",
                                                                "color": dataTextCor2,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center",
                                                        "paddingStart": "10px"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "ฟรีสปิน",
                                                                "size": "sm",
                                                                "color": dataTextCor2,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataFreespin2,
                                                                "size": "sm",
                                                                "color": dataTextCor2,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "ตัวคูณสูงสุด",
                                                                "size": "sm",
                                                                "color": dataTextCor2,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataTextTks2,
                                                                "size": "sm",
                                                                "color": dataTextCor2,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "กำลังเล่น",
                                                                "size": "sm",
                                                                "color": dataTextCor2,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataPlayTo2,
                                                                "size": "sm",
                                                                "color": dataTextCor2,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    }
                                                ]
                                            }
                                        ],
                                        "position": "relative",
                                        "justifyContent": "space-evenly",
                                        "alignItems": "flex-start",
                                        "width": "300px",
                                        "height": "40px",
                                        "maxWidth": "300px",
                                        "maxHeight": "40px",
                                        "paddingAll": "2px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": datalogogames,
                                                        "aspectRatio": "9:2",
                                                        "aspectMode": "cover",
                                                        "size": "60px"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": "ใบรับรอง",
                                                        "color": dataTextCor2,
                                                        "size": "12px",
                                                        "flex": 1,
                                                        "offsetTop": "2px"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "flex-start",
                                                "width": "65px"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": dataimgLogo,
                                                        "aspectRatio": "5:2",
                                                        "aspectMode": "cover",
                                                        "size": "100px"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": dataThong,
                                                        "aspectRatio": "3:1",
                                                        "aspectMode": "cover",
                                                        "size": "60px"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": "ภาษาที่รองรับ",
                                                        "color": "#ffffff",
                                                        "size": "12px",
                                                        "flex": 1,
                                                        "offsetTop": "2px"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "flex-end",
                                                "width": "70px"
                                            }
                                        ],
                                        "justifyContent": "space-around",
                                        "alignItems": "center",
                                        "position": "relative",
                                        "maxHeight": "40px",
                                        "maxWidth": "290px",
                                        "paddingAll": "5px",
                                        "offsetTop": "10px",
                                        "width": "290px",
                                        "height": "40px"
                                    }
                                ],
                                "background": {
                                    "type": "linearGradient",
                                    "angle": "0deg",
                                    "startColor": dataBtstartCor2,
                                    "endColor": dataBendCor2,
                                    "centerColor": dataBCentCor2
                                },
                                "justifyContent": "center",
                                "alignItems": "center",
                                "position": "relative",
                                "paddingAll": "2px"
                            },
                            "action": {
                                "type": "uri",
                                "label": "action",
                                "uri": dataLinkweb
                            }
                        },
                        {
                            "type": "bubble",
                            "hero": {
                                "type": "image",
                                "url": dataCover3,
                                "size": "full",
                                "aspectRatio": "2:1",
                                "aspectMode": "cover",
                                "backgroundColor": "#000000"
                            },
                            "body": {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "horizontal",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": dataIcongame3,
                                                                "size": "60px",
                                                                "align": "start"
                                                            }
                                                        ],
                                                        "maxWidth": "60px",
                                                        "maxHeight": "60px",
                                                        "width": "60px",
                                                        "height": "60px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "box",
                                                                "layout": "baseline",
                                                                "contents": [
                                                                    {
                                                                        "type": "text",
                                                                        "text": "อัตราการชนะของเกม",
                                                                        "size": "lg",
                                                                        "color": dataTextCor3
                                                                    }
                                                                ],
                                                                "paddingStart": "10px"
                                                            },
                                                            {
                                                                "type": "box",
                                                                "layout": "baseline",
                                                                "contents": [
                                                                    {
                                                                        "type": "text",
                                                                        "text": datagameName3,
                                                                        "weight": "bold",
                                                                        "size": "lg",
                                                                        "color": dataTextCor3,
                                                                        "align": "start"
                                                                    }
                                                                ],
                                                                "justifyContent": "space-around",
                                                                "alignItems": "center",
                                                                "paddingStart": "5px"
                                                            }
                                                        ],
                                                        "width": "230px",
                                                        "height": "60px",
                                                        "maxHeight": "60px",
                                                        "maxWidth": "230px"
                                                    }
                                                ],
                                                "position": "relative",
                                                "justifyContent": "center",
                                                "alignItems": "center",
                                                "width": "300px",
                                                "height": "60px",
                                                "maxWidth": "300px",
                                                "maxHeight": "60px"
                                            }
                                        ],
                                        "position": "relative",
                                        "width": "300px",
                                        "maxWidth": "300px",
                                        "height": "60px",
                                        "maxHeight": "60px",
                                        "justifyContent": "center",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": `รวมสถิติผู้เล่นจาก ${webname}`,
                                                "size": "md",
                                                "color": dataTextCor3
                                            }
                                        ],
                                        "position": "relative"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "image",
                                                "url": dataImgDis3,
                                                "aspectRatio": "300:20",
                                                "size": "300px",
                                                "animated": true
                                            }

                                        ],
                                        "maxWidth": "300px",
                                        "maxHeight": "30px",
                                        "justifyContent": "center",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "โอกาสชนะ",
                                                                "size": "sm",
                                                                "color": dataTextCor3,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "paddingStart": "10px",
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataTextDis3,
                                                                "size": "sm",
                                                                "color": dataTextCor3,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center",
                                                        "paddingStart": "10px"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "ฟรีสปิน",
                                                                "size": "sm",
                                                                "color": dataTextCor3,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataFreespin3,
                                                                "size": "sm",
                                                                "color": dataTextCor3,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "ตัวคูณสูงสุด",
                                                                "size": "sm",
                                                                "color": dataTextCor3,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataTextTks3,
                                                                "size": "sm",
                                                                "color": dataTextCor3,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "กำลังเล่น",
                                                                "size": "sm",
                                                                "color": dataTextCor3,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataPlayTo3,
                                                                "size": "sm",
                                                                "color": dataTextCor3,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    }
                                                ]
                                            }
                                        ],
                                        "position": "relative",
                                        "justifyContent": "space-evenly",
                                        "alignItems": "flex-start",
                                        "width": "300px",
                                        "height": "40px",
                                        "maxWidth": "300px",
                                        "maxHeight": "40px",
                                        "paddingAll": "2px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": datalogogames,
                                                        "aspectRatio": "9:2",
                                                        "aspectMode": "cover",
                                                        "size": "60px"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": "ใบรับรอง",
                                                        "color": dataTextCor3,
                                                        "size": "12px",
                                                        "flex": 1,
                                                        "offsetTop": "2px"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "flex-start",
                                                "width": "65px"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": dataimgLogo,
                                                        "aspectRatio": "5:2",
                                                        "aspectMode": "cover",
                                                        "size": "100px"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": dataThong,
                                                        "aspectRatio": "3:1",
                                                        "aspectMode": "cover",
                                                        "size": "60px"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": "ภาษาที่รองรับ",
                                                        "color": "#ffffff",
                                                        "size": "12px",
                                                        "flex": 1,
                                                        "offsetTop": "2px"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "flex-end",
                                                "width": "70px"
                                            }
                                        ],
                                        "justifyContent": "space-around",
                                        "alignItems": "center",
                                        "position": "relative",
                                        "maxHeight": "40px",
                                        "maxWidth": "290px",
                                        "paddingAll": "5px",
                                        "offsetTop": "10px",
                                        "width": "290px",
                                        "height": "40px"
                                    }
                                ],
                                "background": {
                                    "type": "linearGradient",
                                    "angle": "0deg",
                                    "startColor": dataBtstartCor3,
                                    "endColor": dataBendCor3,
                                    "centerColor": dataBCentCor3
                                },
                                "justifyContent": "center",
                                "alignItems": "center",
                                "position": "relative",
                                "paddingAll": "2px"
                            },
                            "action": {
                                "type": "uri",
                                "label": "action",
                                "uri": dataLinkweb
                            }
                        },
                        {
                            "type": "bubble",
                            "hero": {
                                "type": "image",
                                "url": dataCover4,
                                "size": "full",
                                "aspectRatio": "2:1",
                                "aspectMode": "cover",
                                "backgroundColor": "#000000"
                            },
                            "body": {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "horizontal",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": dataIcongame4,
                                                                "size": "60px",
                                                                "align": "start"
                                                            }
                                                        ],
                                                        "maxWidth": "60px",
                                                        "maxHeight": "60px",
                                                        "width": "60px",
                                                        "height": "60px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "box",
                                                                "layout": "baseline",
                                                                "contents": [
                                                                    {
                                                                        "type": "text",
                                                                        "text": "อัตราการชนะของเกม",
                                                                        "size": "lg",
                                                                        "color": dataTextCor4
                                                                    }
                                                                ],
                                                                "paddingStart": "10px"
                                                            },
                                                            {
                                                                "type": "box",
                                                                "layout": "baseline",
                                                                "contents": [
                                                                    {
                                                                        "type": "text",
                                                                        "text": datagameName4,
                                                                        "weight": "bold",
                                                                        "size": "lg",
                                                                        "color": dataTextCor4,
                                                                        "align": "start"
                                                                    }
                                                                ],
                                                                "justifyContent": "space-around",
                                                                "alignItems": "center",
                                                                "paddingStart": "5px"
                                                            }
                                                        ],
                                                        "width": "230px",
                                                        "height": "60px",
                                                        "maxHeight": "60px",
                                                        "maxWidth": "230px"
                                                    }
                                                ],
                                                "position": "relative",
                                                "justifyContent": "center",
                                                "alignItems": "center",
                                                "width": "300px",
                                                "height": "60px",
                                                "maxWidth": "300px",
                                                "maxHeight": "60px"
                                            }
                                        ],
                                        "position": "relative",
                                        "width": "300px",
                                        "maxWidth": "300px",
                                        "height": "60px",
                                        "maxHeight": "60px",
                                        "justifyContent": "center",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": `รวมสถิติผู้เล่นจาก ${webname}`,
                                                "size": "md",
                                                "color": dataTextCor4
                                            }
                                        ],
                                        "position": "relative"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "image",
                                                "url": dataImgDis4,
                                                "aspectRatio": "300:20",
                                                "size": "300px",
                                                "animated": true
                                            }

                                        ],
                                        "maxWidth": "300px",
                                        "maxHeight": "30px",
                                        "justifyContent": "center",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "โอกาสชนะ",
                                                                "size": "sm",
                                                                "color": dataTextCor4,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "paddingStart": "10px",
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataTextDis4,
                                                                "size": "sm",
                                                                "color": dataTextCor4,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center",
                                                        "paddingStart": "10px"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "ฟรีสปิน",
                                                                "size": "sm",
                                                                "color": dataTextCor4,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataFreespin4,
                                                                "size": "sm",
                                                                "color": dataTextCor4,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "ตัวคูณสูงสุด",
                                                                "size": "sm",
                                                                "color": dataTextCor4,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataTextTks4,
                                                                "size": "sm",
                                                                "color": dataTextCor4,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "กำลังเล่น",
                                                                "size": "sm",
                                                                "color": dataTextCor4,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "baseline",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": dataPlayTo4,
                                                                "size": "sm",
                                                                "color": dataTextCor4,
                                                                "align": "center"
                                                            }
                                                        ],
                                                        "justifyContent": "center",
                                                        "alignItems": "center"
                                                    }
                                                ]
                                            }
                                        ],
                                        "position": "relative",
                                        "justifyContent": "space-evenly",
                                        "alignItems": "flex-start",
                                        "width": "300px",
                                        "height": "40px",
                                        "maxWidth": "300px",
                                        "maxHeight": "40px",
                                        "paddingAll": "2px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": datalogogames,
                                                        "aspectRatio": "9:2",
                                                        "aspectMode": "cover",
                                                        "size": "60px"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": "ใบรับรอง",
                                                        "color": dataTextCor4,
                                                        "size": "12px",
                                                        "flex": 1,
                                                        "offsetTop": "2px"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "flex-start",
                                                "width": "65px"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": dataimgLogo,
                                                        "aspectRatio": "5:2",
                                                        "aspectMode": "cover",
                                                        "size": "100px"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": dataThong,
                                                        "aspectRatio": "3:1",
                                                        "aspectMode": "cover",
                                                        "size": "60px"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": "ภาษาที่รองรับ",
                                                        "color": "#ffffff",
                                                        "size": "12px",
                                                        "flex": 1,
                                                        "offsetTop": "2px"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "flex-end",
                                                "width": "70px"
                                            }
                                        ],
                                        "justifyContent": "space-around",
                                        "alignItems": "center",
                                        "position": "relative",
                                        "maxHeight": "40px",
                                        "maxWidth": "290px",
                                        "paddingAll": "5px",
                                        "offsetTop": "10px",
                                        "width": "290px",
                                        "height": "40px"
                                    }
                                ],
                                "background": {
                                    "type": "linearGradient",
                                    "angle": "0deg",
                                    "startColor": dataBtstartCor4,
                                    "endColor": dataBendCor4,
                                    "centerColor": dataBCentCor4
                                },
                                "justifyContent": "center",
                                "alignItems": "center",
                                "position": "relative",
                                "paddingAll": "2px"
                            },
                            "action": {
                                "type": "uri",
                                "label": "action",
                                "uri": dataLinkweb
                            }
                        },
                    ]
                },
                "quickReply": {
                    "items": [
                        {
                            "type": "action",
                            "imageUrl": iconres,
                            "action": {
                                "type": tyepres,
                                "label": labelres,
                                [stres]: resultres
                            }
                        },
                        {
                            "type": "action",
                            "imageUrl": iconBo,
                            "action": {
                                "type": tyeBo,
                                "label": labelBo,
                                [stBo]: resulBo
                            }
                        },
                        {
                            "type": "action",
                            "imageUrl": iconLotto,
                            "action": {
                                "type": typeLotto,
                                "label": labelLotto,
                                [stLotto]: resulLotto
                            }
                        },
                        {
                            "type": "action",
                            "imageUrl": iconPro,
                            "action": {
                                "type": typePro,
                                "label": labelPro,
                                [stPro]: resulPro
                            }
                        },
                        {
                            "type": "action",
                            "imageUrl": iconadd,
                            "action": {
                                "type": typeadd,
                                "label": labeladd,
                                [stadd]: resuladd
                            }
                        }
                    ]
                }
            }
            found = true;
            break;
        } // end if

    }// end for


    var datalinKWeb = sheet.getRange("C48").getValue();
    var registerLink = sheet.getRange("C49").getValue();
    var dataimgLogo = sheet.getRange("BD2").getValue();

    const dataImageres = sheet.getRange("C47").getValue();
    const dataImageLog = sheet.getRange("D47").getValue();
    const datastartColor = sheet.getRange("E47").getValue();
    const datacenterColor = sheet.getRange("F47").getValue();
    const dataendColor = sheet.getRange("G47").getValue();
    const dataBackgroundUrl = sheet.getRange("H47").getValue();

    if (message == "BONUS TIME") {
        result = {
            "type": "flex",
            "altText": "เลือกค่ายเกม",
            "contents": {
                "type": "carousel",
                "contents": [
                    {
                        "type": "bubble",
                        "size": "giga",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": dataimgLogo,
                                                    "size": "full",
                                                    "aspectRatio": "3:1"
                                                }
                                            ],
                                            "paddingAll": "0px",
                                            "action": {
                                                "type": "uri",
                                                "label": "action",
                                                "uri": datalinKWeb
                                            },
                                            "height": "60px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": dataImageres,
                                                            "size": "full",
                                                            "aspectRatio": "3:1",
                                                            "aspectMode": "cover"
                                                        }
                                                    ],
                                                    "action": {
                                                        "type": "uri",
                                                        "label": "action",
                                                        "uri": registerLink
                                                    }
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": dataImageLog,
                                                            "size": "full",
                                                            "aspectRatio": "3:1",
                                                            "aspectMode": "cover"
                                                        }
                                                    ],
                                                    "action": {
                                                        "type": "uri",
                                                        "label": "action",
                                                        "uri": datalinKWeb
                                                    },
                                                    "paddingStart": "2px"
                                                }
                                            ],
                                            "justifyContent": "center",
                                            "alignItems": "center",
                                            "paddingAll": "0px"
                                        }
                                    ],
                                    "paddingAll": "5px",
                                    "paddingTop": "0px",
                                    "background": {
                                        "type": "linearGradient",
                                        "angle": "0deg",
                                        "startColor": datastartColor,
                                        "endColor": dataendColor,
                                        "centerColor": datacenterColor
                                    },
                                    "height": "60px"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "image",
                                            "url": dataBackgroundUrl,
                                            "size": "full",
                                            "aspectMode": "cover",
                                            "animated": true,
                                            "position": "relative",
                                            "gravity": "bottom",
                                            "aspectRatio": "4:6"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://img5.pic.in.th/file/secure-sv1/PG-Soft.jpeg",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME PG Soft"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://img2.pic.in.th/pic/spinix.jpeg",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME Spinix"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://i.pinimg.com/564x/4e/aa/42/4eaa42612d8c92780fee6ab31e8962b5.jpg",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME AMB"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://asset.brandfetch.io/idySoIKOUU/idP9-DkoY6.jpeg",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME Pragmatic"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        }
                                                    ],
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "paddingBottom": "10px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://cq9games.com.tw/userfiles/images/20210521032822381.jpg",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME CQ9"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://i.postimg.cc/pT3br06g/sdvdvdsv.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME EVOPLAY"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://i.postimg.cc/6qSs7Mbk/acascsc.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME NEXTSPIN"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://i.postimg.cc/pLDP5tQR/5554.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME JILI"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        }
                                                    ],
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "paddingBottom": "10px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://img5.pic.in.th/file/secure-sv1/21321.md.jpg",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME SPADEGAMING"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://img5.pic.in.th/file/secure-sv1/live22.jpg",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME LIVE22"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://img5.pic.in.th/file/secure-sv1/nolimit01.jpg",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME NOLIMIT"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://img5.pic.in.th/file/secure-sv1/net01.jpg",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME NETENT"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        }
                                                    ],
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "paddingBottom": "10px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://i.postimg.cc/7Z2rr697/516516516.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME YGG"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://img2.pic.in.th/pic/funkygames_2x_6d6a769cff.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME FUNKYGAME"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://img5.pic.in.th/file/secure-sv1/Mroco.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME MIRCO"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://img5.pic.in.th/file/secure-sv1/redtiger.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME REDTIGER"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        }
                                                    ],
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "paddingBottom": "10px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://img5.pic.in.th/file/secure-sv1/YRG_m.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME YGR"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://img2.pic.in.th/pic/6319bc5d21.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BONUSTIME HABANERO"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        }
                                                    ],
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "paddingBottom": "10px"
                                                }
                                            ],
                                            "position": "absolute",
                                            "paddingAll": "5px"
                                        }
                                    ],
                                    "alignItems": "center",
                                    "height": "400px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    },
                    {
                        "type": "bubble",
                        "size": "giga",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": dataimgLogo,
                                                    "size": "full",
                                                    "aspectRatio": "3:1"
                                                }
                                            ],
                                            "paddingAll": "0px",
                                            "action": {
                                                "type": "uri",
                                                "label": "action",
                                                "uri": datalinKWeb
                                            },
                                            "height": "60px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": dataImageres,
                                                            "size": "full",
                                                            "aspectRatio": "3:1",
                                                            "aspectMode": "cover"
                                                        }
                                                    ],
                                                    "action": {
                                                        "type": "uri",
                                                        "label": "action",
                                                        "uri": registerLink
                                                    }
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": dataImageLog,
                                                            "size": "full",
                                                            "aspectRatio": "3:1",
                                                            "aspectMode": "cover"
                                                        }
                                                    ],
                                                    "action": {
                                                        "type": "uri",
                                                        "label": "action",
                                                        "uri": datalinKWeb
                                                    },
                                                    "paddingStart": "2px"
                                                }
                                            ],
                                            "justifyContent": "center",
                                            "alignItems": "center",
                                            "paddingAll": "0px"
                                        }
                                    ],
                                    "paddingAll": "5px",
                                    "paddingTop": "0px",
                                    "background": {
                                        "type": "linearGradient",
                                        "angle": "0deg",
                                        "startColor": datastartColor,
                                        "endColor": dataendColor,
                                        "centerColor": datacenterColor
                                    },
                                    "height": "60px"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "image",
                                            "url": dataBackgroundUrl,
                                            "size": "full",
                                            "aspectMode": "cover",
                                            "animated": true,
                                            "position": "relative",
                                            "gravity": "bottom",
                                            "aspectRatio": "4:6"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": "https://as1.ftcdn.net/v2/jpg/05/92/08/38/1000_F_592083801_PwD6uw16A77fhIe2B7kH6FAzjj10l6kc.jpg",
                                                            "size": "full",
                                                            "aspectMode": "cover",
                                                            "aspectRatio": "8:1",
                                                            "align": "center",
                                                            "gravity": "center"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "text",
                                                                    "text": "บาคาร่า",
                                                                    "size": "xl",
                                                                    "color": "#ffffff"
                                                                }
                                                            ],
                                                            "position": "absolute"
                                                        }
                                                    ],
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "cornerRadius": "20px",
                                                    "paddingBottom": "2px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://www.onlinecasinoreports.com/img/ocr2020/software/big/asia-gaming.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BACCARAT AG"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://www.livedealers.com/wp-content/uploads/2018/03/allbetlogo-1.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BACCARAT ALLBET"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://static.wixstatic.com/media/1c9435_32e95778d52b4b42afba23a8b1c152b2~mv2.png/v1/fill/w_160,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Big-gaimg-1.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BACCARAT BG"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://dg-casino.com/wp-content/uploads/2019/09/cropped-Logo-header.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BACCARAT DREAMGAMING"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        }
                                                    ],
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "paddingBottom": "10px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://static.wixstatic.com/media/9f9614_f31dc397f3ae46ca8000a581495c858d~mv2.png/v1/fill/w_300,h_300,al_c/9f9614_f31dc397f3ae46ca8000a581495c858d~mv2.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BACCARAT PRETTY"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://ufaasia.net/wp-content/uploads/2020/06/Sa-game-1-4.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BACCARAT SA"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://ae-sexy.net/wp-content/uploads/2024/01/ae-sexy.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BACCARAT SEXY"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://st.softgamings.com/uploads/WM-Logo_1200x500.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "BACCARAT WM"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        }
                                                    ],
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "paddingBottom": "10px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": "https://vauro.net/wp-content/uploads/2024/01/dragon-tiger-game-rules.jpg",
                                                            "size": "full",
                                                            "aspectMode": "cover",
                                                            "aspectRatio": "8:1",
                                                            "align": "center",
                                                            "gravity": "center"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "text",
                                                                    "text": "เสือ-มังกร",
                                                                    "size": "xl",
                                                                    "color": "#ffffff"
                                                                }
                                                            ],
                                                            "position": "absolute"
                                                        }
                                                    ],
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "cornerRadius": "20px",
                                                    "paddingBottom": "2px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://www.onlinecasinoreports.com/img/ocr2020/software/big/asia-gaming.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "DRAGONTIGER AG"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://www.livedealers.com/wp-content/uploads/2018/03/allbetlogo-1.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "DRAGONTIGER ALLBET"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://static.wixstatic.com/media/1c9435_32e95778d52b4b42afba23a8b1c152b2~mv2.png/v1/fill/w_160,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Big-gaimg-1.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "DRAGONTIGER BG"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://dg-casino.com/wp-content/uploads/2019/09/cropped-Logo-header.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "DRAGONTIGER DREAMGAMING"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        }
                                                    ],
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "paddingBottom": "10px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://static.wixstatic.com/media/9f9614_f31dc397f3ae46ca8000a581495c858d~mv2.png/v1/fill/w_300,h_300,al_c/9f9614_f31dc397f3ae46ca8000a581495c858d~mv2.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "DRAGONTIGER PRETTY"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://ufaasia.net/wp-content/uploads/2020/06/Sa-game-1-4.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "DRAGONTIGER SA"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://ae-sexy.net/wp-content/uploads/2024/01/ae-sexy.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "DRAGONTIGER SEXY"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://st.softgamings.com/uploads/WM-Logo_1200x500.png",
                                                                    "size": "full"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "DRAGONTIGER WM"
                                                            },
                                                            "margin": "5px",
                                                            "width": "70px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000"
                                                        }
                                                    ],
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "paddingBottom": "10px"
                                                }
                                            ],
                                            "position": "absolute",
                                            "paddingAll": "5px"
                                        }
                                    ],
                                    "alignItems": "center",
                                    "height": "400px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    },
                    {
                        "type": "bubble",
                        "size": "giga",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": dataimgLogo,
                                                    "size": "full",
                                                    "aspectRatio": "3:1"
                                                }
                                            ],
                                            "paddingAll": "0px",
                                            "action": {
                                                "type": "uri",
                                                "label": "action",
                                                "uri": datalinKWeb
                                            },
                                            "height": "60px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": dataImageres,
                                                            "size": "full",
                                                            "aspectRatio": "3:1",
                                                            "aspectMode": "cover"
                                                        }
                                                    ],
                                                    "action": {
                                                        "type": "uri",
                                                        "label": "action",
                                                        "uri": registerLink
                                                    }
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": dataImageLog,
                                                            "size": "full",
                                                            "aspectRatio": "3:1",
                                                            "aspectMode": "cover"
                                                        }
                                                    ],
                                                    "action": {
                                                        "type": "uri",
                                                        "label": "action",
                                                        "uri": datalinKWeb
                                                    },
                                                    "paddingStart": "2px"
                                                }
                                            ],
                                            "justifyContent": "center",
                                            "alignItems": "center",
                                            "paddingAll": "0px"
                                        }
                                    ],
                                    "paddingAll": "5px",
                                    "paddingTop": "0px",
                                    "background": {
                                        "type": "linearGradient",
                                        "angle": "0deg",
                                        "startColor": datastartColor,
                                        "endColor": dataendColor,
                                        "centerColor": datacenterColor
                                    },
                                    "height": "60px"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "image",
                                            "url": dataBackgroundUrl,
                                            "size": "full",
                                            "aspectMode": "cover",
                                            "animated": true,
                                            "position": "relative",
                                            "gravity": "bottom",
                                            "aspectRatio": "4:6"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://img.pikbest.com/wp/202405/nighttime-view-of-a-3d-rendered-football-stadium_9798284.jpg!w700wp",
                                                                    "size": "full",
                                                                    "aspectMode": "cover"
                                                                },
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": [
                                                                        {
                                                                            "type": "text",
                                                                            "text": "วิเคราะห์บอล",
                                                                            "size": "3xl",
                                                                            "color": "#e3bb1c",
                                                                            "weight": "bold",
                                                                            "decoration": "underline",
                                                                            "adjustMode": "shrink-to-fit"
                                                                        }
                                                                    ],
                                                                    "justifyContent": "center",
                                                                    "alignItems": "center",
                                                                    "position": "absolute"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "preview soccer"
                                                            },
                                                            "margin": "5px",
                                                            "width": "280px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000",
                                                            "justifyContent": "center"
                                                        }
                                                    ],
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "paddingBottom": "10px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": "https://cdn.vectorstock.com/i/500p/60/36/bingo-balls-splash-background-floating-lotto-game-vector-50096036.jpg",
                                                                    "size": "full",
                                                                    "aspectMode": "cover"
                                                                },
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": [
                                                                        {
                                                                            "type": "text",
                                                                            "text": "ตรวจเช็คหวย",
                                                                            "size": "3xl",
                                                                            "color": "#e3bb1c",
                                                                            "weight": "bold",
                                                                            "decoration": "underline",
                                                                            "adjustMode": "shrink-to-fit"
                                                                        }
                                                                    ],
                                                                    "justifyContent": "center",
                                                                    "alignItems": "center",
                                                                    "position": "absolute"
                                                                }
                                                            ],
                                                            "borderColor": "#ea861c",
                                                            "borderWidth": "1px",
                                                            "cornerRadius": "15px",
                                                            "alignItems": "center",
                                                            "action": {
                                                                "type": "message",
                                                                "label": "action",
                                                                "text": "ตรวจหวย"
                                                            },
                                                            "margin": "5px",
                                                            "width": "280px",
                                                            "height": "70px",
                                                            "backgroundColor": "#000000",
                                                            "justifyContent": "center"
                                                        }
                                                    ],
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "paddingBottom": "10px"
                                                }
                                            ],
                                            "position": "absolute",
                                            "paddingAll": "5px"
                                        }
                                    ],
                                    "alignItems": "center",
                                    "height": "400px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    }
                ]
            },
            "quickReply": {
                "items": [
                    {
                        "type": "action",
                        "imageUrl": iconres,
                        "action": {
                            "type": tyepres,
                            "label": labelres,
                            [stres]: resultres
                        }
                    },
                    {
                        "type": "action",
                        "imageUrl": iconBo,
                        "action": {
                            "type": tyeBo,
                            "label": labelBo,
                            [stBo]: resulBo
                        }
                    },
                    {
                        "type": "action",
                        "imageUrl": iconLotto,
                        "action": {
                            "type": typeLotto,
                            "label": labelLotto,
                            [stLotto]: resulLotto
                        }
                    },
                    {
                        "type": "action",
                        "imageUrl": iconPro,
                        "action": {
                            "type": typePro,
                            "label": labelPro,
                            [stPro]: resulPro
                        }
                    },
                    {
                        "type": "action",
                        "imageUrl": iconadd,
                        "action": {
                            "type": typeadd,
                            "label": labeladd,
                            [stadd]: resuladd
                        }
                    }
                ]
            }

        }
        found = true; // BONUS TIME ถูกพบ
    }

    if (!found) {
        var resultLottoReply = LottoReply(reply_token, message) || { found: false, result: null };
        if (!resultLottoReply.found) {
            var resultBankreply = Bankreply(reply_token, message) || { found: false, result: null };
            if (!resultBankreply.found) {
                var resultBac = baccaratReply(reply_token, message) || { found: false, result: null };
                if (!resultBac.found) {
                    // หากไม่พบข้อมูลในฟังก์ชันใดเลย
                    var resultFootball = footballReply(reply_token, message) || { found: false, result: null };
                    if (!resultFootball.found) {
                        result = {
                            "type": "text",
                            "text": "ขออภัยค่ะ  เลือกเมนูด้านล่างเพื่อเช็คข้อมูลที่ต้องการได้เลยนะคะ",
                            "quickReply": {
                                "items": [
                                    {
                                        "type": "action",
                                        "imageUrl": iconres,
                                        "action": {
                                            "type": tyepres,
                                            "label": labelres,
                                            [stres]: resultres
                                        }
                                    },
                                    {
                                        "type": "action",
                                        "imageUrl": iconBo,
                                        "action": {
                                            "type": tyeBo,
                                            "label": labelBo,
                                            [stBo]: resulBo
                                        }
                                    },
                                    {
                                        "type": "action",
                                        "imageUrl": iconLotto,
                                        "action": {
                                            "type": typeLotto,
                                            "label": labelLotto,
                                            [stLotto]: resulLotto
                                        }
                                    },
                                    {
                                        "type": "action",
                                        "imageUrl": iconPro,
                                        "action": {
                                            "type": typePro,
                                            "label": labelPro,
                                            [stPro]: resulPro
                                        }
                                    },
                                    {
                                        "type": "action",
                                        "imageUrl": iconadd,
                                        "action": {
                                            "type": typeadd,
                                            "label": labeladd,
                                            [stadd]: resuladd
                                        }
                                    }
                                ]
                            }
                        };
                    } else {
                        result = resultFootball.result;
                    }
                } else {
                    // หากพบข้อมูลใน baccaratReply
                    result = resultBac.result;
                }
            } else {
                // หากพบข้อมูลใน Bankreply
                result = resultBankreply.result;
            }
        } else {
            // หากพบข้อมูลใน LottoReply
            result = resultLottoReply.result;
        }
    } else {
        // หากพบข้อมูลใน ReplyBonus (ฟังก์ชันต้นทาง)
        return result;
    }

    // คืนค่าผลลัพธ์สุดท้าย
    return result;
}


// ฟังก์ชัน LottoReply
function LottoReply(reply_token, message) {
    var sheet1 = ws.getSheetByName("ReplyBonus"); //แก้3
    var sheet = ws.getSheetByName("ReplyLotto"); // ค้นหาในชีท ReplyLotto
    var data = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getDisplayValues(); // ดึงข้อมูลจากชีท
    var found = false;
    var result = {};

    // ตรวจสอบข้อมูลในชีท ReplyLotto
    for (var i = 0; i < data.length; i++) {
        if (data[i][0] && data[i][0].trim() == message.trim()) {
            // ดึงข้อมูลจากแถวที่ตรงกัน
            const data1 = sheet.getRange(i + 2, 1).getDisplayValue(); // ค่ายเกม
            const data2 = sheet.getRange(i + 2, 2).getDisplayValue(); // ข้อมูลอื่น ๆ
            const dataC2 = sheet.getRange(i + 2, 3).getDisplayValue(); // ข้อมูลอื่น ๆ
            const dataD2 = sheet.getRange(i + 2, 4).getDisplayValue(); // ข้อมูลอื่น ๆ
            const dataE2 = sheet.getRange(i + 2, 5).getDisplayValue(); // ข้อมูลอื่น ๆ
            const dataF2 = sheet.getRange(i + 2, 6).getDisplayValue(); // ข้อมูลอื่น ๆ
            const dataG2 = sheet.getRange(i + 2, 7).getDisplayValue(); // ข้อมูลอื่น ๆ
            const dataH2 = sheet.getRange(i + 2, 8).getDisplayValue(); // ข้อมูลอื่น ๆ
            const dataI2 = sheet.getRange(i + 2, 9).getDisplayValue(); // ข้อมูลอื่น ๆ
            const dataJ2 = sheet.getRange(i + 2, 10).getDisplayValue(); // ข้อมูลอื่น ๆ
            const dataK2 = sheet.getRange(i + 2, 11).getDisplayValue(); // ข้อมูลอื่น ๆ
            const dataL2 = sheet.getRange(i + 2, 12).getDisplayValue(); // ข้อมูลอื่น ๆ
            const dataM2 = sheet.getRange(i + 2, 13).getDisplayValue(); // ข้อมูลอื่น ๆ
            const dataN2 = sheet.getRange(i + 2, 14).getDisplayValue(); // ข้อมูลอื่น ๆ
            const dataO2 = sheet.getRange(i + 2, 15).getDisplayValue(); // ข้อมูลอื่น ๆ

            // สร้างข้อความตอบกลับ
            result = {
                "type": "flex",
                "altText": "เช็คหวย  " + data2,
                "contents": {
                    "type": "carousel",
                    "contents": [
                        {
                            "type": "bubble",
                            "size": "giga",
                            "body": {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "image",
                                        "url": dataI2,
                                        "align": "center",
                                        "size": "full",
                                        "position": "relative",
                                        "aspectMode": "cover",
                                        "animated": true
                                    },
                                    {
                                        "type": "text",
                                        "text": dataC2,
                                        "weight": "bold",
                                        "position": "absolute",
                                        "align": "center",
                                        "gravity": "center",
                                        "wrap": true,
                                        "color": "#ffffff",
                                        "size": "25px",
                                        "scaling": true,
                                        "offsetTop": "2%"
                                    },
                                    {
                                        "type": "text",
                                        "text": "รางวัลที่ 1",
                                        "size": "20px",
                                        "color": "#ffffff",
                                        "weight": "bold",
                                        "position": "absolute",
                                        "align": "center",
                                        "gravity": "center",
                                        "wrap": true,
                                        "scaling": true,
                                        "offsetTop": "15%"
                                    },
                                    {
                                        "type": "text",
                                        "text": dataD2,
                                        "size": "xxl",
                                        "color": "#ffffff",
                                        "weight": "bold",
                                        "position": "absolute",
                                        "align": "center",
                                        "wrap": true,
                                        "gravity": "center",
                                        "scaling": true,
                                        "offsetTop": "25%",
                                        "offsetStart": "36%"
                                    },
                                    {
                                        "type": "text",
                                        "text": "เลขท้าย 3 ตัว",
                                        "size": "15px",
                                        "color": "#0c0d30",
                                        "weight": "bold",
                                        "position": "absolute",
                                        "align": "center",
                                        "gravity": "center",
                                        "wrap": true,
                                        "scaling": true,
                                        "offsetTop": "36%",
                                        "offsetStart": "15%"
                                    },
                                    {
                                        "type": "text",
                                        "text": dataE2,
                                        "size": "20px",
                                        "color": "#0c0d30",
                                        "weight": "bold",
                                        "position": "absolute",
                                        "align": "center",
                                        "gravity": "center",
                                        "wrap": true,
                                        "scaling": true,
                                        "offsetTop": "42%",
                                        "offsetStart": dataL2,
                                        "style": "normal"
                                    },
                                    {
                                        "type": "text",
                                        "text": "เลขท้าย 2 ตัว",
                                        "size": "15px",
                                        "color": "#0c0d30",
                                        "weight": "bold",
                                        "position": "absolute",
                                        "align": "center",
                                        "gravity": "center",
                                        "wrap": true,
                                        "scaling": true,
                                        "offsetTop": "36%",
                                        "offsetStart": "61%"
                                    },
                                    {
                                        "type": "text",
                                        "text": dataF2,
                                        "weight": "bold",
                                        "color": "#0c0d30",
                                        "size": "20px",
                                        "position": "absolute",
                                        "align": "center",
                                        "gravity": "center",
                                        "wrap": true,
                                        "scaling": true,
                                        "offsetTop": "42%",
                                        "offsetStart": "69%"
                                    },
                                    {
                                        "type": "text",
                                        "text": "เลขหน้า 3 ตัว",
                                        "size": "15px",
                                        "color": "#ffffff",
                                        "weight": "bold",
                                        "position": "absolute",
                                        "align": "center",
                                        "wrap": true,
                                        "gravity": "center",
                                        "scaling": true,
                                        "offsetTop": "53%",
                                        "offsetStart": "40%"
                                    },
                                    {
                                        "type": "text",
                                        "text": dataG2,
                                        "size": "20px",
                                        "color": "#FFFFFF",
                                        "weight": "bold",
                                        "position": "absolute",
                                        "align": "center",
                                        "gravity": "center",
                                        "wrap": true,
                                        "scaling": true,
                                        "offsetTop": "60%",
                                        "offsetStart": dataM2
                                    },
                                    {
                                        "type": "text",
                                        "text": dataH2,
                                        "size": "20px",
                                        "color": "#FFFFFF",
                                        "weight": "bold",
                                        "position": "absolute",
                                        "align": "center",
                                        "wrap": true,
                                        "scaling": true,
                                        "offsetTop": "60%",
                                        "offsetStart": dataN2
                                    },
                                    {
                                        "type": "image",
                                        "url": dataJ2,
                                        "position": "absolute",
                                        "gravity": "center",
                                        "size": "50px",
                                        "offsetTop": "87%",
                                        "offsetStart": "45%",
                                        "animated": true
                                    },
                                    {
                                        "type": "text",
                                        "text": "อ้างอิงจาก: สมาคมสลากกินแบ่งโลก",
                                        "weight": "bold",
                                        "position": "absolute",
                                        "align": "center",
                                        "size": "15px",
                                        "wrap": true,
                                        "gravity": "center",
                                        "scaling": true,
                                        "offsetTop": "72%",
                                        "offsetStart": "2%",
                                        "color": "#ffffff"
                                    },
                                    {
                                        "type": "text",
                                        "text": data2,
                                        "weight": "bold",
                                        "position": "absolute",
                                        "align": "center",
                                        "size": "25px",
                                        "wrap": true,
                                        "gravity": "center",
                                        "scaling": true,
                                        "offsetTop": "80%",
                                        "color": "#ffffff"
                                    },
                                    {
                                        "type": "image",
                                        "url": dataO2,
                                        "position": "absolute",
                                        "offsetTop": "80%",
                                        "offsetStart": "5%",
                                        "align": "center",
                                        "gravity": "center",
                                        "animated": true
                                    },
                                    {
                                        "type": "image",
                                        "url": dataK2,
                                        "position": "absolute",
                                        "offsetTop": "80%",
                                        "offsetStart": "70%",
                                        "align": "center",
                                        "gravity": "center"
                                    }
                                ],
                                "paddingAll": "0px",
                                "position": "relative",
                                "justifyContent": "center",
                                "alignItems": "center"
                            },
                            "styles": {
                                "body": {
                                    "separator": true
                                }
                            }
                        }
                    ]
                }
            };
            found = true; // พบข้อมูล
            break; // เจอข้อมูลแล้วออกจากลูป
        }
    }

    var dataO2 = sheet.getRange(i, 15).getDisplayValue(); // ข้อมูลอื่น ๆ
    var datap2 = sheet.getRange(i, 16).getDisplayValue();
    var datalinKWeb = sheet1.getRange("C48").getValue();
    var registerLink = sheet1.getRange("C49").getValue();
    var dataimgLogo = sheet1.getRange("BD2").getValue();
    const dataImageres = sheet1.getRange("C47").getValue();
    const dataImageLog = sheet1.getRange("D47").getValue();
    const datastartColor = sheet1.getRange("E47").getValue();
    const datacenterColor = sheet1.getRange("F47").getValue();
    const dataendColor = sheet1.getRange("G47").getValue();
    const dataBackgroundColor = sheet1.getRange("I47").getValue();
    if (message == "ตรวจหวย") {
        result = {
            "type": "flex",
            "altText": "เลือกค่ายเกม",
            "contents": {
                "type": "carousel",
                "contents": [
                    {
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": dataimgLogo
                                                }
                                            ]
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": dataImageres,
                                                    "action": {
                                                        "type": "uri",
                                                        "label": "action",
                                                        "uri": registerLink
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": dataImageLog,
                                                    "action": {
                                                        "type": "uri",
                                                        "label": "action",
                                                        "uri": datalinKWeb
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "paddingAll": "0px",
                                    "justifyContent": "center",
                                    "alignItems": "center",
                                    "height": "40px",
                                    "background": {
                                        "type": "linearGradient",
                                        "angle": "0deg",
                                        "startColor": datastartColor,
                                        "endColor": dataendColor,
                                        "centerColor": datacenterColor
                                    }
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": "https://img2.pic.in.th/pic/lotto-thai.png",
                                                    "action": {
                                                        "type": "message",
                                                        "label": "action",
                                                        "text": "หวยไทยรัฐบาล"
                                                      }                                      
                                                }
                                            ],
                                            "width": "100px",
                                            "height": "100px",
                                            "margin": "5px",
                                            "borderColor": "#FF0D00",
                                            "borderWidth": "2px",
                                            "cornerRadius": "15px",
                                            "justifyContent": "center",
                                            "alignItems": "center",
                                            "backgroundColor": "#000000"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": "https://img2.pic.in.th/pic/lotto-lao.png",
                                                    "action": {
                                                        "type": "message",
                                                        "label": "action",
                                                        "text": "หวยลาว"
                                                    }
                                                },
                                                
                                            ],
                                            "width": "100px",
                                            "height": "100px",
                                            "margin": "5px",
                                            "backgroundColor": "#000000",
                                            "borderWidth": "2px",
                                            "borderColor": "#FF0D00",
                                            "cornerRadius": "15px"
                                        }
                                    ],
                                    "justifyContent": "center",
                                    "alignItems": "center",
                                    "width": "300px",
                                    "backgroundColor": dataBackgroundColor,
                                    "paddingAll": "10px"
                                }
                            ],
                            "paddingAll": "0px",
                            "justifyContent": "center",
                            "alignItems": "flex-end",
                            "width": "300px",
                            "position": "relative"
                        }
                    }
                ]
            }
        };
        found = true; // พบข้อมูล
    }


    return { found: found, result: result }; // คืนค่าพร้อมกับ found
}

// ฟังก์ชัน Bankreply
function Bankreply(reply_token, message) {
    var sheet = ws.getSheetByName("ReplyBank"); // ชีทใหม่
    var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getDisplayValues(); // -1 เพื่อตัดแถวหัว
    var found = false;
    var result = {};
    var bubbles = []; // ประกาศ array สำหรับเก็บ bubble

    // Loop เพื่อสร้าง bubble สำหรับแต่ละรายการใน data
    for (var i = 0; i < data.length; i++) {
        const datalogo = data[i][1];
        const dataName = data[i][2];
        const dataBankUs = data[i][3];
        const dataAccoutS = data[i][4];
        const dataAccoutC = data[i][5];
        const dataBankUsCor = data[i][6];
        const dataButtonTextCor = data[i][7];
        const dataBUttonCorlor = data[i][8];
        const dataBackgroud = data[i][9];
        const dataTextCor = data[i][10];


        // หากพบข้อมูลที่ตรงกัน
        if (data[i][0] && data[i][0].trim() == message.trim()) {
            var bubble = {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "image",
                                    "url": datalogo,//Image
                                    "align": "center",
                                    "gravity": "center",
                                    "size": "xl",
                                    "aspectMode": "cover"
                                }
                            ],
                            "position": "relative"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "ธนาคาร : " + dataName,//BankName
                                    "color": dataBankUsCor,//สีข้อความ
                                    "weight": "bold",
                                    "size": "xl"
                                },
                                {
                                    "type": "text",
                                    "text": "ชื่อบัญชี : " + dataBankUs,//ชื่อบัญชี
                                    "size": "xl",
                                    "color": dataTextCor,//สีชื่อบัญชี
                                    "weight": "bold"
                                },
                                {
                                    "type": "text",
                                    "text": "เลขบัญชี :  " + dataAccoutS,//เลขบัญชีที่โชว์
                                    "size": "xl",
                                    "color": dataTextCor,//สีเลขบัญชี
                                    "weight": "bold"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "กดคัดลอก",
                                    "size": "xl",
                                    "weight": "bold",
                                    "style": "normal",
                                    "decoration": "none",
                                    "position": "relative",
                                    "align": "start",
                                    "color": dataButtonTextCor,//สีข้อความคัดลอก
                                    "wrap": true
                                }
                            ],
                            "position": "relative",
                            "backgroundColor": dataBUttonCorlor,//สีปุ่ม
                            "margin": "5px",
                            "paddingAll": "10px",
                            "cornerRadius": "45px",
                            "alignItems": "center"
                        }
                    ],
                    "backgroundColor": dataBackgroud,//สีพื้นหลัง
                    "action": {
                        "type": "clipboard",
                        "label": "Copy",
                        "clipboardText": dataAccoutC
                    }
                }
            };
            bubbles.push(bubble); // เพิ่ม bubble เข้าไปใน array
            found = true; // พบข้อมูล
        }
    }

    // หากไม่พบข้อมูล
    if (bubbles.length === 0) {
        result = {
            "type": "text",
            "text": "ไม่พบข้อมูลธนาคารที่คุณค้นหา"
        };
    } else {
        // สร้าง Flex Message
        result = {
            "type": "flex",
            "altText": "ข้อมูลธนาคาร",
            "contents": {
                "type": "carousel",
                "contents": bubbles // ส่ง array ของ bubbles
            }
        };
    }

    return { found: found, result: result }; // คืนค่าพร้อมกับ found
}

function baccaratReply(reply_token, message) {
    var sheet = ws.getSheetByName("ReplyBonus"); // ชีท ReplyBonus
    var sheet1 = ba.getSheetByName("BarReply"); // ชีท BarReply
    var data = sheet1.getRange(2, 1, sheet1.getLastRow() - 1, sheet1.getLastColumn()).getDisplayValues(); // ดึงข้อมูลจากชีท BarReply
    var found = false;
    var result = {};

    // ดึงค่าจาก ReplyBonus
    var datalinKWeb = sheet.getRange("BC2").getValue(); // ลิงก์เว็บ
    var dataimgLogo = sheet.getRange("BD2").getValue(); // โลโก้หรือรูปภาพ

    for (var i = 0; i < data.length; i++) {

        const keyWord = data[i][0]; // คำค้นจากคอลัมน์ A
        const imageBac = data[i][1]; // URL รูปภาพจากคอลัมน์ B
        const IconLogo = data[i][2];//C
        const gameType = data[i][3];//D
        const gameName = data[i][4];//E

        //blog 1 
        const room1 = data[i][5];//f
        const Player1 = data[i][10];//่J
        const always1 = data[i][11];//K
        const Banker1 = data[i][12];//L

        //blog 2
        const room2 = data[i][14];//
        const Player2 = data[i][19];//่J
        const always2 = data[i][20];//K
        const Banker2 = data[i][21];//L

        //blog 3
        const room3 = data[i][23];//
        const Player3 = data[i][28];//่J
        const always3 = data[i][29];//K
        const Banker3 = data[i][30];//L

        //blog 3
        const room4 = data[i][32];//
        const Player4 = data[i][37];//่J
        const always4 = data[i][38];//K
        const Banker4 = data[i][39];//L

        //blog 4
        const room5 = data[i][41];//
        const Player5 = data[i][46];//่J
        const always5 = data[i][47];//K
        const Banker5 = data[i][48];//L

        const playerColor = data[i][50];
        const alwaysColor = data[i][51];
        const bankerColor = data[i][52];
        const starColor = data[i][53];
        const centerColor = data[i][54];
        const endColor = data[i][55];


        if (message == keyWord) {
            result = {
                "type": "flex",
                "altText": `สูตร AI CASINO LIVE สด ค่ายดัง ${gameName}`,
                "contents": {
                    "type": "carousel",
                    "contents": [
                        {
                            "type": "bubble",
                            "hero": {
                                "type": "image",
                                "url": imageBac,
                                "size": "full",
                                "aspectMode": "cover",
                                "aspectRatio": "8:4.5"
                            },
                            "body": {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": IconLogo
                                                    }
                                                ],
                                                "position": "relative",
                                                "paddingAll": "0px",
                                                "width": "110px",
                                                "height": "60px",
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": `อัตราการชนะของ${gameType}`,
                                                        "weight": "regular",
                                                        "color": "#FFFFFF",
                                                        "size": "xxs"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": gameType + " ห้อง " + room1,
                                                        "color": "#FFCC00",
                                                        "size": "lg",
                                                        "weight": "bold"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": `ค่าย ${gameName}`,
                                                        "color": "#FFFFFF",
                                                        "size": "xs"
                                                    }
                                                ]
                                            }
                                        ],
                                        "paddingAll": "0px",
                                        "paddingTop": "5px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "เพลย์เยอร์ชนะ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "เสมอ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "แบงค์เกอร์ชนะ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            }
                                        ],
                                        "justifyContent": "center",
                                        "alignItems": "center",
                                        "paddingStart": "5px",
                                        "paddingEnd": "5px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": Player1,
                                                        "color": playerColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": always1,
                                                        "color": alwaysColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": Banker1,
                                                        "color": bankerColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "alignItems": "center"
                                            }
                                        ],
                                        "justifyContent": "space-around",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "สูตรคำนวนจาก AI โอกาสชนะสูง",
                                                "color": "#FFFFFF",
                                                "size": "sm"
                                            }
                                        ],
                                        "alignItems": "center",
                                        "justifyContent": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": IconLogo
                                                            }
                                                        ],
                                                        "paddingAll": "0px",
                                                        "width": "80px",
                                                        "height": "65px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "ใบรับรอง",
                                                                "color": "#ffffff"
                                                            }
                                                        ],
                                                        "alignItems": "center",
                                                        "justifyContent": "center"
                                                    }
                                                ],
                                                "alignItems": "center",
                                                "justifyContent": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": dataimgLogo
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": "https://img2.pic.in.th/pic/Untitled-1c8f45651377db24e.png"
                                                            }
                                                        ],
                                                        "width": "80px",
                                                        "height": "65px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "รองรับภาษา",
                                                                "color": "#FFFFFF"
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "alignItems": "center",
                                                "justifyContent": "center"
                                            }
                                        ],
                                        "alignItems": "center",
                                        "justifyContent": "center",
                                        "offsetBottom": "10px"
                                    }
                                ],
                                "background": {
                                    "type": "linearGradient",
                                    "angle": "0deg",
                                    "startColor": starColor,
                                    "endColor": endColor,
                                    "centerColor": centerColor
                                },
                                "paddingAll": "0px"
                            }
                        },
                        {
                            "type": "bubble",
                            "hero": {
                                "type": "image",
                                "url": imageBac,
                                "size": "full",
                                "aspectMode": "cover",
                                "aspectRatio": "8:4.5"
                            },
                            "body": {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": IconLogo
                                                    }
                                                ],
                                                "position": "relative",
                                                "paddingAll": "0px",
                                                "width": "110px",
                                                "height": "60px",
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": `อัตราการชนะของ${gameType}`,
                                                        "weight": "regular",
                                                        "color": "#FFFFFF",
                                                        "size": "xxs"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": gameType + " ห้อง " + room2,
                                                        "color": "#FFCC00",
                                                        "size": "lg",
                                                        "weight": "bold"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": `ค่าย ${gameName}`,
                                                        "color": "#FFFFFF",
                                                        "size": "xs"
                                                    }
                                                ]
                                            }
                                        ],
                                        "paddingAll": "0px",
                                        "paddingTop": "5px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "เพลย์เยอร์ชนะ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "เสมอ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "แบงค์เกอร์ชนะ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            }
                                        ],
                                        "justifyContent": "center",
                                        "alignItems": "center",
                                        "paddingStart": "5px",
                                        "paddingEnd": "5px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": Player2,
                                                        "color": playerColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": always2,
                                                        "color": alwaysColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": Banker2,
                                                        "color": bankerColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "alignItems": "center"
                                            }
                                        ],
                                        "justifyContent": "space-around",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "สูตรคำนวนจาก AI โอกาสชนะสูง",
                                                "color": "#FFFFFF",
                                                "size": "sm"
                                            }
                                        ],
                                        "alignItems": "center",
                                        "justifyContent": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": IconLogo
                                                            }
                                                        ],
                                                        "paddingAll": "0px",
                                                        "width": "80px",
                                                        "height": "65px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "ใบรับรอง",
                                                                "color": "#ffffff"
                                                            }
                                                        ],
                                                        "alignItems": "center",
                                                        "justifyContent": "center"
                                                    }
                                                ],
                                                "alignItems": "center",
                                                "justifyContent": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": dataimgLogo
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": "https://img2.pic.in.th/pic/Untitled-1c8f45651377db24e.png"
                                                            }
                                                        ],
                                                        "width": "80px",
                                                        "height": "65px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "รองรับภาษา",
                                                                "color": "#FFFFFF"
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "alignItems": "center",
                                                "justifyContent": "center"
                                            }
                                        ],
                                        "alignItems": "center",
                                        "justifyContent": "center",
                                        "offsetBottom": "10px"
                                    }
                                ],
                                "background": {
                                    "type": "linearGradient",
                                    "angle": "0deg",
                                    "startColor": starColor,
                                    "endColor": endColor,
                                    "centerColor": centerColor
                                },
                                "paddingAll": "0px"
                            }
                        },
                        {
                            "type": "bubble",
                            "hero": {
                                "type": "image",
                                "url": imageBac,
                                "size": "full",
                                "aspectMode": "cover",
                                "aspectRatio": "8:4.5"
                            },
                            "body": {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": IconLogo
                                                    }
                                                ],
                                                "position": "relative",
                                                "paddingAll": "0px",
                                                "width": "110px",
                                                "height": "60px",
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": `อัตราการชนะของ${gameType}`,
                                                        "weight": "regular",
                                                        "color": "#FFFFFF",
                                                        "size": "xxs"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": gameType + " ห้อง " + room3,
                                                        "color": "#FFCC00",
                                                        "size": "lg",
                                                        "weight": "bold"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": `ค่าย ${gameName}`,
                                                        "color": "#FFFFFF",
                                                        "size": "xs"
                                                    }
                                                ]
                                            }
                                        ],
                                        "paddingAll": "0px",
                                        "paddingTop": "5px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "เพลย์เยอร์ชนะ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "เสมอ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "แบงค์เกอร์ชนะ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            }
                                        ],
                                        "justifyContent": "center",
                                        "alignItems": "center",
                                        "paddingStart": "5px",
                                        "paddingEnd": "5px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": Player3,
                                                        "color": playerColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": always3,
                                                        "color": alwaysColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": Banker3,
                                                        "color": bankerColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "alignItems": "center"
                                            }
                                        ],
                                        "justifyContent": "space-around",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "สูตรคำนวนจาก AI โอกาสชนะสูง",
                                                "color": "#FFFFFF",
                                                "size": "sm"
                                            }
                                        ],
                                        "alignItems": "center",
                                        "justifyContent": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": IconLogo
                                                            }
                                                        ],
                                                        "paddingAll": "0px",
                                                        "width": "80px",
                                                        "height": "65px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "ใบรับรอง",
                                                                "color": "#ffffff"
                                                            }
                                                        ],
                                                        "alignItems": "center",
                                                        "justifyContent": "center"
                                                    }
                                                ],
                                                "alignItems": "center",
                                                "justifyContent": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": dataimgLogo
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": "https://img2.pic.in.th/pic/Untitled-1c8f45651377db24e.png"
                                                            }
                                                        ],
                                                        "width": "80px",
                                                        "height": "65px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "รองรับภาษา",
                                                                "color": "#FFFFFF"
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "alignItems": "center",
                                                "justifyContent": "center"
                                            }
                                        ],
                                        "alignItems": "center",
                                        "justifyContent": "center",
                                        "offsetBottom": "10px"
                                    }
                                ],
                                "background": {
                                    "type": "linearGradient",
                                    "angle": "0deg",
                                    "startColor": starColor,
                                    "endColor": endColor,
                                    "centerColor": centerColor
                                },
                                "paddingAll": "0px"
                            }
                        },
                        {
                            "type": "bubble",
                            "hero": {
                                "type": "image",
                                "url": imageBac,
                                "size": "full",
                                "aspectMode": "cover",
                                "aspectRatio": "8:4.5"
                            },
                            "body": {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": IconLogo
                                                    }
                                                ],
                                                "position": "relative",
                                                "paddingAll": "0px",
                                                "width": "110px",
                                                "height": "60px",
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": `อัตราการชนะของ${gameType}`,
                                                        "weight": "regular",
                                                        "color": "#FFFFFF",
                                                        "size": "xxs"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": gameType + " ห้อง " + room4,
                                                        "color": "#FFCC00",
                                                        "size": "lg",
                                                        "weight": "bold"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": `ค่าย ${gameName}`,
                                                        "color": "#FFFFFF",
                                                        "size": "xs"
                                                    }
                                                ]
                                            }
                                        ],
                                        "paddingAll": "0px",
                                        "paddingTop": "5px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "เพลย์เยอร์ชนะ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "เสมอ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "แบงค์เกอร์ชนะ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            }
                                        ],
                                        "justifyContent": "center",
                                        "alignItems": "center",
                                        "paddingStart": "5px",
                                        "paddingEnd": "5px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": Player4,
                                                        "color": playerColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": always4,
                                                        "color": alwaysColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": Banker4,
                                                        "color": bankerColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "alignItems": "center"
                                            }
                                        ],
                                        "justifyContent": "space-around",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "สูตรคำนวนจาก AI โอกาสชนะสูง",
                                                "color": "#FFFFFF",
                                                "size": "sm"
                                            }
                                        ],
                                        "alignItems": "center",
                                        "justifyContent": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": IconLogo
                                                            }
                                                        ],
                                                        "paddingAll": "0px",
                                                        "width": "80px",
                                                        "height": "65px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "ใบรับรอง",
                                                                "color": "#ffffff"
                                                            }
                                                        ],
                                                        "alignItems": "center",
                                                        "justifyContent": "center"
                                                    }
                                                ],
                                                "alignItems": "center",
                                                "justifyContent": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": dataimgLogo
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": "https://img2.pic.in.th/pic/Untitled-1c8f45651377db24e.png"
                                                            }
                                                        ],
                                                        "width": "80px",
                                                        "height": "65px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "รองรับภาษา",
                                                                "color": "#FFFFFF"
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "alignItems": "center",
                                                "justifyContent": "center"
                                            }
                                        ],
                                        "alignItems": "center",
                                        "justifyContent": "center",
                                        "offsetBottom": "10px"
                                    }
                                ],
                                "background": {
                                    "type": "linearGradient",
                                    "angle": "0deg",
                                    "startColor": starColor,
                                    "endColor": endColor,
                                    "centerColor": centerColor
                                },
                                "paddingAll": "0px"
                            }
                        },
                        {
                            "type": "bubble",
                            "hero": {
                                "type": "image",
                                "url": imageBac,
                                "size": "full",
                                "aspectMode": "cover",
                                "aspectRatio": "8:4.5"
                            },
                            "body": {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": IconLogo
                                                    }
                                                ],
                                                "position": "relative",
                                                "paddingAll": "0px",
                                                "width": "110px",
                                                "height": "60px",
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": `อัตราการชนะของ${gameType}`,
                                                        "weight": "regular",
                                                        "color": "#FFFFFF",
                                                        "size": "xxs"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": gameType + " ห้อง " + room5,
                                                        "color": "#FFCC00",
                                                        "size": "lg",
                                                        "weight": "bold"
                                                    },
                                                    {
                                                        "type": "text",
                                                        "text": `ค่าย ${gameName}`,
                                                        "color": "#FFFFFF",
                                                        "size": "xs"
                                                    }
                                                ]
                                            }
                                        ],
                                        "paddingAll": "0px",
                                        "paddingTop": "5px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "เพลย์เยอร์ชนะ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "เสมอ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "แบงค์เกอร์ชนะ",
                                                        "color": "#FFFFFF",
                                                        "wrap": true,
                                                        "size": "sm",
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            }
                                        ],
                                        "justifyContent": "center",
                                        "alignItems": "center",
                                        "paddingStart": "5px",
                                        "paddingEnd": "5px"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": Player5,
                                                        "color": playerColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": always5,
                                                        "color": alwaysColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": Banker5,
                                                        "color": bankerColor,
                                                        "size": "lg",
                                                        "wrap": true,
                                                        "weight": "bold"
                                                    }
                                                ],
                                                "alignItems": "center"
                                            }
                                        ],
                                        "justifyContent": "space-around",
                                        "alignItems": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "สูตรคำนวนจาก AI โอกาสชนะสูง",
                                                "color": "#FFFFFF",
                                                "size": "sm"
                                            }
                                        ],
                                        "alignItems": "center",
                                        "justifyContent": "center"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": IconLogo
                                                            }
                                                        ],
                                                        "paddingAll": "0px",
                                                        "width": "80px",
                                                        "height": "65px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "ใบรับรอง",
                                                                "color": "#ffffff"
                                                            }
                                                        ],
                                                        "alignItems": "center",
                                                        "justifyContent": "center"
                                                    }
                                                ],
                                                "alignItems": "center",
                                                "justifyContent": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": dataimgLogo
                                                    }
                                                ],
                                                "justifyContent": "center",
                                                "alignItems": "center"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "image",
                                                                "url": "https://img2.pic.in.th/pic/Untitled-1c8f45651377db24e.png"
                                                            }
                                                        ],
                                                        "width": "80px",
                                                        "height": "65px"
                                                    },
                                                    {
                                                        "type": "box",
                                                        "layout": "vertical",
                                                        "contents": [
                                                            {
                                                                "type": "text",
                                                                "text": "รองรับภาษา",
                                                                "color": "#FFFFFF"
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "alignItems": "center",
                                                "justifyContent": "center"
                                            }
                                        ],
                                        "alignItems": "center",
                                        "justifyContent": "center",
                                        "offsetBottom": "10px"
                                    }
                                ],
                                "background": {
                                    "type": "linearGradient",
                                    "angle": "0deg",
                                    "startColor": starColor,
                                    "endColor": endColor,
                                    "centerColor": centerColor
                                },
                                "paddingAll": "0px"
                            }
                        }
                    ]
                }
            },

                found = true; // พบข้อมูล
            break; // ออกจากลูป
        }
    }

    return { found: found, result: result }; // คืนค่าผลลัพธ์
}

function footballReply(reply_token, message) {
    var sheet = ba.getSheetByName("SoccoReply"); // ชีท BarReply
    var found = false;
    var result = {};

    if (message == "preview soccer") {
        const dateShow = sheet.getRange("A3").getValue();

        const league1 = sheet.getRange("B3").getValue();
        const logoleague1 = sheet.getRange("C3").getValue();
        const teamA1Logo = sheet.getRange("D3").getValue();
        const teamA1Name = sheet.getRange("E3").getValue();
        const timeSporting1 = sheet.getRange("F3").getValue();
        const teamB1Logo = sheet.getRange("G3").getValue();
        const teamB1Name = sheet.getRange("H3").getValue();
        const discription1 = sheet.getRange("I3").getValue();
        const logoA1 = sheet.getRange("J3").getValue();
        const logoB1 = sheet.getRange("K3").getValue();
        const persenA1 = sheet.getRange("L3").getValue();
        const persenB1 = sheet.getRange("M3").getValue();

        const league2 = sheet.getRange("B4").getValue();
        const logoleague2 = sheet.getRange("C4").getValue();
        const teamA2Logo = sheet.getRange("D4").getValue();
        const teamA2Name = sheet.getRange("E4").getValue();
        const timeSporting2 = sheet.getRange("F4").getValue();
        const teamB2Logo = sheet.getRange("G4").getValue();
        const teamB2Name = sheet.getRange("H4").getValue();
        const discription2 = sheet.getRange("I4").getValue();
        const logoA2 = sheet.getRange("J4").getValue();
        const logoB2 = sheet.getRange("K4").getValue();
        const persenA2 = sheet.getRange("L4").getValue();
        const persenB2 = sheet.getRange("M4").getValue();

        const league3 = sheet.getRange("B5").getValue();
        const logoleague3 = sheet.getRange("C5").getValue();
        const teamA3Logo = sheet.getRange("D5").getValue();
        const teamA3Name = sheet.getRange("E5").getValue();
        const timeSporting3 = sheet.getRange("F5").getValue();
        const teamB3Logo = sheet.getRange("G5").getValue();
        const teamB3Name = sheet.getRange("H5").getValue();
        const discription3 = sheet.getRange("I5").getValue();
        const logoA3 = sheet.getRange("J5").getValue();
        const logoB3 = sheet.getRange("K5").getValue();
        const persenA3 = sheet.getRange("L5").getValue();
        const persenB3 = sheet.getRange("M5").getValue();

        const league4 = sheet.getRange("B6").getValue();
        const logoleague4 = sheet.getRange("C6").getValue();
        const teamA4Logo = sheet.getRange("D6").getValue();
        const teamA4Name = sheet.getRange("E6").getValue();
        const timeSporting4 = sheet.getRange("F6").getValue();
        const teamB4Logo = sheet.getRange("G6").getValue();
        const teamB4Name = sheet.getRange("H6").getValue();
        const discription4 = sheet.getRange("I6").getValue();
        const logoA4 = sheet.getRange("J6").getValue();
        const logoB4 = sheet.getRange("K6").getValue();
        const persenA4 = sheet.getRange("L6").getValue();
        const persenB4 = sheet.getRange("M6").getValue();

        const league5 = sheet.getRange("B7").getValue();
        const logoleague5 = sheet.getRange("C7").getValue();
        const teamA5Logo = sheet.getRange("D7").getValue();
        const teamA5Name = sheet.getRange("E7").getValue();
        const timeSporting5 = sheet.getRange("F7").getValue();
        const teamB5Logo = sheet.getRange("G7").getValue();
        const teamB5Name = sheet.getRange("H7").getValue();
        const discription5 = sheet.getRange("I7").getValue();
        const logoA5 = sheet.getRange("J7").getValue();
        const logoB5 = sheet.getRange("K7").getValue();
        const persenA5 = sheet.getRange("L7").getValue();
        const persenB5 = sheet.getRange("M7").getValue();

        result = {
            "type": "flex",
            "altText": `วิเคราะห์บอลคู่ประจำวันที่ ${dateShow}`,
            "contents": {
                "type": "carousel",
                "contents": [
                    {
                        "type": "bubble",
                        "size": "mega",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": teamA1Logo,
                                                            "aspectMode": "cover",
                                                            "size": "xl",
                                                            "aspectRatio": "1:2"
                                                        }
                                                    ],
                                                    "alignItems": "flex-start"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": teamB1Logo,
                                                            "size": "xl",
                                                            "aspectRatio": "1:2",
                                                            "aspectMode": "cover"
                                                        }
                                                    ],
                                                    "position": "relative",
                                                    "alignItems": "flex-end",
                                                    "justifyContent": "flex-end"
                                                }
                                            ],
                                            "position": "absolute",
                                            "flex": 2,
                                            "alignItems": "center",
                                            "justifyContent": "space-between",
                                            "width": "300px",
                                            "backgroundColor": "#000000"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": "https://img2.pic.in.th/pic/Untitled-1151980575c4183fe8cb.png",
                                                    "size": "full"
                                                }
                                            ],
                                            "position": "absolute",
                                            "alignItems": "center",
                                            "justifyContent": "center",
                                            "width": "300px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": []
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": "พรีวิวก่อนเกม",
                                                            "color": "#ffffff",
                                                            "weight": "bold"
                                                        }
                                                    ],
                                                    "backgroundColor": "#EB7A06",
                                                    "width": "100px",
                                                    "alignItems": "center",
                                                    "cornerRadius": "5px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": dateShow,
                                                            "color": "#ffffff",
                                                            "size": "xxs"
                                                        }
                                                    ],
                                                    "paddingTop": "2px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": logoleague1,
                                                            "size": "sm"
                                                        }
                                                    ],
                                                    "cornerRadius": "45px",
                                                    "backgroundColor": "#FFFFFF",
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "width": "50px",
                                                    "height": "50px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": league1,
                                                            "size": "xs",
                                                            "color": "#FFFFFF",
                                                            "weight": "bold"
                                                        }
                                                    ],
                                                    "paddingTop": "5px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": logoA1,
                                                                    "size": "xxs"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": [
                                                                        {
                                                                            "type": "text",
                                                                            "text": "เวลาเเข่งขัน",
                                                                            "size": "xxs",
                                                                            "color": "#ffffff"
                                                                        }
                                                                    ],
                                                                    "alignItems": "center"
                                                                },
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": [
                                                                        {
                                                                            "type": "text",
                                                                            "text": timeSporting1,
                                                                            "align": "center",
                                                                            "weight": "bold",
                                                                            "wrap": true,
                                                                            "gravity": "center",
                                                                            "color": "#FFFFFF"
                                                                        }
                                                                    ],
                                                                    "alignItems": "center",
                                                                    "backgroundColor": "#EB7A06",
                                                                    "cornerRadius": "10px",
                                                                    "justifyContent": "center"
                                                                },
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": []
                                                                }
                                                            ],
                                                            "justifyContent": "space-around"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": logoB1,
                                                                    "size": "xxs"
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "width": "200px",
                                                    "backgroundColor": "#000000",
                                                    "height": "50px",
                                                    "alignItems": "center",
                                                    "justifyContent": "space-around",
                                                    "cornerRadius": "15px"
                                                }
                                            ],
                                            "width": "300px",
                                            "alignItems": "center",
                                            "paddingTop": "15px"
                                        }
                                    ],
                                    "height": "180px"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": teamA1Name,
                                                            "color": "#FFFFFF"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": persenA1,
                                                            "size": "xxl",
                                                            "align": "center",
                                                            "weight": "bold",
                                                            "color": "#3765FE"
                                                        }
                                                    ],
                                                    "alignItems": "center"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": "https://img2.pic.in.th/pic/Lovepik_com-380162746-light-effects-vs-font-design-elements-yellow-gradient.png",
                                                            "size": "xs"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": teamB1Name,
                                                            "color": "#FFFFFF"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": persenB1,
                                                            "size": "xxl",
                                                            "align": "center",
                                                            "weight": "bold",
                                                            "color": "#FE3757"
                                                        }
                                                    ],
                                                    "alignItems": "center"
                                                }
                                            ],
                                            "justifyContent": "space-around"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": discription1,
                                                    "wrap": true,
                                                    "align": "center",
                                                    "scaling": true,
                                                    "decoration": "none",
                                                    "style": "normal",
                                                    "weight": "regular",
                                                    "color": "#FFFFFF",
                                                    "size": "xs"
                                                }
                                            ]
                                        }
                                    ],
                                    "alignItems": "center",
                                    "justifyContent": "flex-start",
                                    "background": {
                                        "type": "linearGradient",
                                        "angle": "0deg",
                                        "startColor": "#000000",
                                        "endColor": "#000000",
                                        "centerColor": "#323234"
                                    },
                                    "paddingAll": "15px",
                                    "height": "300px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    },
                    {
                        "type": "bubble",
                        "size": "mega",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": teamA2Logo,
                                                            "aspectMode": "cover",
                                                            "size": "xl",
                                                            "aspectRatio": "1:2"
                                                        }
                                                    ],
                                                    "alignItems": "flex-start"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": teamB2Logo,
                                                            "size": "xl",
                                                            "aspectRatio": "1:2",
                                                            "aspectMode": "cover"
                                                        }
                                                    ],
                                                    "position": "relative",
                                                    "alignItems": "flex-end",
                                                    "justifyContent": "flex-end"
                                                }
                                            ],
                                            "position": "absolute",
                                            "flex": 2,
                                            "alignItems": "center",
                                            "justifyContent": "space-between",
                                            "width": "300px",
                                            "backgroundColor": "#000000"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": "https://img2.pic.in.th/pic/Untitled-1151980575c4183fe8cb.png",
                                                    "size": "full"
                                                }
                                            ],
                                            "position": "absolute",
                                            "alignItems": "center",
                                            "justifyContent": "center",
                                            "width": "300px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": []
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": "พรีวิวก่อนเกม",
                                                            "color": "#ffffff",
                                                            "weight": "bold"
                                                        }
                                                    ],
                                                    "backgroundColor": "#EB7A06",
                                                    "width": "100px",
                                                    "alignItems": "center",
                                                    "cornerRadius": "5px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": dateShow,
                                                            "color": "#ffffff",
                                                            "size": "xxs"
                                                        }
                                                    ],
                                                    "paddingTop": "2px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": logoleague2,
                                                            "size": "sm"
                                                        }
                                                    ],
                                                    "cornerRadius": "45px",
                                                    "backgroundColor": "#FFFFFF",
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "width": "50px",
                                                    "height": "50px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": league2,
                                                            "size": "xs",
                                                            "color": "#FFFFFF",
                                                            "weight": "bold"
                                                        }
                                                    ],
                                                    "paddingTop": "5px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": logoA2,
                                                                    "size": "xxs"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": [
                                                                        {
                                                                            "type": "text",
                                                                            "text": "เวลาเเข่งขัน",
                                                                            "size": "xxs",
                                                                            "color": "#ffffff"
                                                                        }
                                                                    ],
                                                                    "alignItems": "center"
                                                                },
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": [
                                                                        {
                                                                            "type": "text",
                                                                            "text": timeSporting2,
                                                                            "align": "center",
                                                                            "weight": "bold",
                                                                            "wrap": true,
                                                                            "gravity": "center",
                                                                            "color": "#FFFFFF"
                                                                        }
                                                                    ],
                                                                    "alignItems": "center",
                                                                    "backgroundColor": "#EB7A06",
                                                                    "cornerRadius": "10px",
                                                                    "justifyContent": "center"
                                                                },
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": []
                                                                }
                                                            ],
                                                            "justifyContent": "space-around"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": logoB2,
                                                                    "size": "xxs"
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "width": "200px",
                                                    "backgroundColor": "#000000",
                                                    "height": "50px",
                                                    "alignItems": "center",
                                                    "justifyContent": "space-around",
                                                    "cornerRadius": "15px"
                                                }
                                            ],
                                            "width": "300px",
                                            "alignItems": "center",
                                            "paddingTop": "15px"
                                        }
                                    ],
                                    "height": "180px"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": teamA2Name,
                                                            "color": "#FFFFFF"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": persenA2,
                                                            "size": "xxl",
                                                            "align": "center",
                                                            "weight": "bold",
                                                            "color": "#3765FE"
                                                        }
                                                    ],
                                                    "alignItems": "center"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": "https://img2.pic.in.th/pic/Lovepik_com-380162746-light-effects-vs-font-design-elements-yellow-gradient.png",
                                                            "size": "xs"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": teamB2Name,
                                                            "color": "#FFFFFF"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": persenB2,
                                                            "size": "xxl",
                                                            "align": "center",
                                                            "weight": "bold",
                                                            "color": "#FE3757"
                                                        }
                                                    ],
                                                    "alignItems": "center"
                                                }
                                            ],
                                            "justifyContent": "space-around"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": discription2,
                                                    "wrap": true,
                                                    "align": "center",
                                                    "scaling": true,
                                                    "decoration": "none",
                                                    "style": "normal",
                                                    "weight": "regular",
                                                    "color": "#FFFFFF",
                                                    "size": "xs"
                                                }
                                            ]
                                        }
                                    ],
                                    "alignItems": "center",
                                    "justifyContent": "flex-start",
                                    "background": {
                                        "type": "linearGradient",
                                        "angle": "0deg",
                                        "startColor": "#000000",
                                        "endColor": "#000000",
                                        "centerColor": "#323234"
                                    },
                                    "paddingAll": "15px",
                                    "height": "300px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    },
                    {
                        "type": "bubble",
                        "size": "mega",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": teamA3Logo,
                                                            "aspectMode": "cover",
                                                            "size": "xl",
                                                            "aspectRatio": "1:2"
                                                        }
                                                    ],
                                                    "alignItems": "flex-start"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": teamB3Logo,
                                                            "size": "xl",
                                                            "aspectRatio": "1:2",
                                                            "aspectMode": "cover"
                                                        }
                                                    ],
                                                    "position": "relative",
                                                    "alignItems": "flex-end",
                                                    "justifyContent": "flex-end"
                                                }
                                            ],
                                            "position": "absolute",
                                            "flex": 2,
                                            "alignItems": "center",
                                            "justifyContent": "space-between",
                                            "width": "300px",
                                            "backgroundColor": "#000000"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": "https://img2.pic.in.th/pic/Untitled-1151980575c4183fe8cb.png",
                                                    "size": "full"
                                                }
                                            ],
                                            "position": "absolute",
                                            "alignItems": "center",
                                            "justifyContent": "center",
                                            "width": "300px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": []
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": "พรีวิวก่อนเกม",
                                                            "color": "#ffffff",
                                                            "weight": "bold"
                                                        }
                                                    ],
                                                    "backgroundColor": "#EB7A06",
                                                    "width": "100px",
                                                    "alignItems": "center",
                                                    "cornerRadius": "5px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": dateShow,
                                                            "color": "#ffffff",
                                                            "size": "xxs"
                                                        }
                                                    ],
                                                    "paddingTop": "2px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": logoleague3,
                                                            "size": "sm"
                                                        }
                                                    ],
                                                    "cornerRadius": "45px",
                                                    "backgroundColor": "#FFFFFF",
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "width": "50px",
                                                    "height": "50px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": league3,
                                                            "size": "xs",
                                                            "color": "#FFFFFF",
                                                            "weight": "bold"
                                                        }
                                                    ],
                                                    "paddingTop": "5px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": logoA3,
                                                                    "size": "xxs"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": [
                                                                        {
                                                                            "type": "text",
                                                                            "text": "เวลาเเข่งขัน",
                                                                            "size": "xxs",
                                                                            "color": "#ffffff"
                                                                        }
                                                                    ],
                                                                    "alignItems": "center"
                                                                },
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": [
                                                                        {
                                                                            "type": "text",
                                                                            "text": timeSporting3,
                                                                            "align": "center",
                                                                            "weight": "bold",
                                                                            "wrap": true,
                                                                            "gravity": "center",
                                                                            "color": "#FFFFFF"
                                                                        }
                                                                    ],
                                                                    "alignItems": "center",
                                                                    "backgroundColor": "#EB7A06",
                                                                    "cornerRadius": "10px",
                                                                    "justifyContent": "center"
                                                                },
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": []
                                                                }
                                                            ],
                                                            "justifyContent": "space-around"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": logoB3,
                                                                    "size": "xxs"
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "width": "200px",
                                                    "backgroundColor": "#000000",
                                                    "height": "50px",
                                                    "alignItems": "center",
                                                    "justifyContent": "space-around",
                                                    "cornerRadius": "15px"
                                                }
                                            ],
                                            "width": "300px",
                                            "alignItems": "center",
                                            "paddingTop": "15px"
                                        }
                                    ],
                                    "height": "180px"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": teamA3Name,
                                                            "color": "#FFFFFF"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": persenA3,
                                                            "size": "xxl",
                                                            "align": "center",
                                                            "weight": "bold",
                                                            "color": "#3765FE"
                                                        }
                                                    ],
                                                    "alignItems": "center"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": "https://img2.pic.in.th/pic/Lovepik_com-380162746-light-effects-vs-font-design-elements-yellow-gradient.png",
                                                            "size": "xs"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": teamB3Name,
                                                            "color": "#FFFFFF"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": persenB3,
                                                            "size": "xxl",
                                                            "align": "center",
                                                            "weight": "bold",
                                                            "color": "#FE3757"
                                                        }
                                                    ],
                                                    "alignItems": "center"
                                                }
                                            ],
                                            "justifyContent": "space-around"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": discription3,
                                                    "wrap": true,
                                                    "align": "center",
                                                    "scaling": true,
                                                    "decoration": "none",
                                                    "style": "normal",
                                                    "weight": "regular",
                                                    "color": "#FFFFFF",
                                                    "size": "xs"
                                                }
                                            ]
                                        }
                                    ],
                                    "alignItems": "center",
                                    "justifyContent": "flex-start",
                                    "background": {
                                        "type": "linearGradient",
                                        "angle": "0deg",
                                        "startColor": "#000000",
                                        "endColor": "#000000",
                                        "centerColor": "#323234"
                                    },
                                    "paddingAll": "15px",
                                    "height": "300px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    },
                    {
                        "type": "bubble",
                        "size": "mega",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": teamA4Logo,
                                                            "aspectMode": "cover",
                                                            "size": "xl",
                                                            "aspectRatio": "1:2"
                                                        }
                                                    ],
                                                    "alignItems": "flex-start"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": teamB4Logo,
                                                            "size": "xl",
                                                            "aspectRatio": "1:2",
                                                            "aspectMode": "cover"
                                                        }
                                                    ],
                                                    "position": "relative",
                                                    "alignItems": "flex-end",
                                                    "justifyContent": "flex-end"
                                                }
                                            ],
                                            "position": "absolute",
                                            "flex": 2,
                                            "alignItems": "center",
                                            "justifyContent": "space-between",
                                            "width": "300px",
                                            "backgroundColor": "#000000"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": "https://img2.pic.in.th/pic/Untitled-1151980575c4183fe8cb.png",
                                                    "size": "full"
                                                }
                                            ],
                                            "position": "absolute",
                                            "alignItems": "center",
                                            "justifyContent": "center",
                                            "width": "300px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": []
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": "พรีวิวก่อนเกม",
                                                            "color": "#ffffff",
                                                            "weight": "bold"
                                                        }
                                                    ],
                                                    "backgroundColor": "#EB7A06",
                                                    "width": "100px",
                                                    "alignItems": "center",
                                                    "cornerRadius": "5px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": dateShow,
                                                            "color": "#ffffff",
                                                            "size": "xxs"
                                                        }
                                                    ],
                                                    "paddingTop": "2px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": logoleague4,
                                                            "size": "sm"
                                                        }
                                                    ],
                                                    "cornerRadius": "45px",
                                                    "backgroundColor": "#FFFFFF",
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "width": "50px",
                                                    "height": "50px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": league4,
                                                            "size": "xs",
                                                            "color": "#FFFFFF",
                                                            "weight": "bold"
                                                        }
                                                    ],
                                                    "paddingTop": "5px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": logoA4,
                                                                    "size": "xxs"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": [
                                                                        {
                                                                            "type": "text",
                                                                            "text": "เวลาเเข่งขัน",
                                                                            "size": "xxs",
                                                                            "color": "#ffffff"
                                                                        }
                                                                    ],
                                                                    "alignItems": "center"
                                                                },
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": [
                                                                        {
                                                                            "type": "text",
                                                                            "text": timeSporting4,
                                                                            "align": "center",
                                                                            "weight": "bold",
                                                                            "wrap": true,
                                                                            "gravity": "center",
                                                                            "color": "#FFFFFF"
                                                                        }
                                                                    ],
                                                                    "alignItems": "center",
                                                                    "backgroundColor": "#EB7A06",
                                                                    "cornerRadius": "10px",
                                                                    "justifyContent": "center"
                                                                },
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": []
                                                                }
                                                            ],
                                                            "justifyContent": "space-around"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": logoB4,
                                                                    "size": "xxs"
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "width": "200px",
                                                    "backgroundColor": "#000000",
                                                    "height": "50px",
                                                    "alignItems": "center",
                                                    "justifyContent": "space-around",
                                                    "cornerRadius": "15px"
                                                }
                                            ],
                                            "width": "300px",
                                            "alignItems": "center",
                                            "paddingTop": "15px"
                                        }
                                    ],
                                    "height": "180px"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": teamA4Name,
                                                            "color": "#FFFFFF"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": persenA4,
                                                            "size": "xxl",
                                                            "align": "center",
                                                            "weight": "bold",
                                                            "color": "#3765FE"
                                                        }
                                                    ],
                                                    "alignItems": "center"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": "https://img2.pic.in.th/pic/Lovepik_com-380162746-light-effects-vs-font-design-elements-yellow-gradient.png",
                                                            "size": "xs"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": teamB4Name,
                                                            "color": "#FFFFFF"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": persenB4,
                                                            "size": "xxl",
                                                            "align": "center",
                                                            "weight": "bold",
                                                            "color": "#FE3757"
                                                        }
                                                    ],
                                                    "alignItems": "center"
                                                }
                                            ],
                                            "justifyContent": "space-around"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": discription4,
                                                    "wrap": true,
                                                    "align": "center",
                                                    "scaling": true,
                                                    "decoration": "none",
                                                    "style": "normal",
                                                    "weight": "regular",
                                                    "color": "#FFFFFF",
                                                    "size": "xs"
                                                }
                                            ]
                                        }
                                    ],
                                    "alignItems": "center",
                                    "justifyContent": "flex-start",
                                    "background": {
                                        "type": "linearGradient",
                                        "angle": "0deg",
                                        "startColor": "#000000",
                                        "endColor": "#000000",
                                        "centerColor": "#323234"
                                    },
                                    "paddingAll": "15px",
                                    "height": "300px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    },
                    {
                        "type": "bubble",
                        "size": "mega",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": teamA5Logo,
                                                            "aspectMode": "cover",
                                                            "size": "xl",
                                                            "aspectRatio": "1:2"
                                                        }
                                                    ],
                                                    "alignItems": "flex-start"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": teamB5Logo,
                                                            "size": "xl",
                                                            "aspectRatio": "1:2",
                                                            "aspectMode": "cover"
                                                        }
                                                    ],
                                                    "position": "relative",
                                                    "alignItems": "flex-end",
                                                    "justifyContent": "flex-end"
                                                }
                                            ],
                                            "position": "absolute",
                                            "flex": 2,
                                            "alignItems": "center",
                                            "justifyContent": "space-between",
                                            "width": "300px",
                                            "backgroundColor": "#000000"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": "https://img2.pic.in.th/pic/Untitled-1151980575c4183fe8cb.png",
                                                    "size": "full"
                                                }
                                            ],
                                            "position": "absolute",
                                            "alignItems": "center",
                                            "justifyContent": "center",
                                            "width": "300px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": []
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": "พรีวิวก่อนเกม",
                                                            "color": "#ffffff",
                                                            "weight": "bold"
                                                        }
                                                    ],
                                                    "backgroundColor": "#EB7A06",
                                                    "width": "100px",
                                                    "alignItems": "center",
                                                    "cornerRadius": "5px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": dateShow,
                                                            "color": "#ffffff",
                                                            "size": "xxs"
                                                        }
                                                    ],
                                                    "paddingTop": "2px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": logoleague5,
                                                            "size": "sm"
                                                        }
                                                    ],
                                                    "cornerRadius": "45px",
                                                    "backgroundColor": "#FFFFFF",
                                                    "alignItems": "center",
                                                    "justifyContent": "center",
                                                    "width": "50px",
                                                    "height": "50px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": league5,
                                                            "size": "xs",
                                                            "color": "#FFFFFF",
                                                            "weight": "bold"
                                                        }
                                                    ],
                                                    "paddingTop": "5px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "horizontal",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": logoA5,
                                                                    "size": "xxs"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": [
                                                                        {
                                                                            "type": "text",
                                                                            "text": "เวลาเเข่งขัน",
                                                                            "size": "xxs",
                                                                            "color": "#ffffff"
                                                                        }
                                                                    ],
                                                                    "alignItems": "center"
                                                                },
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": [
                                                                        {
                                                                            "type": "text",
                                                                            "text": timeSporting5,
                                                                            "align": "center",
                                                                            "weight": "bold",
                                                                            "wrap": true,
                                                                            "gravity": "center",
                                                                            "color": "#FFFFFF"
                                                                        }
                                                                    ],
                                                                    "alignItems": "center",
                                                                    "backgroundColor": "#EB7A06",
                                                                    "cornerRadius": "10px",
                                                                    "justifyContent": "center"
                                                                },
                                                                {
                                                                    "type": "box",
                                                                    "layout": "vertical",
                                                                    "contents": []
                                                                }
                                                            ],
                                                            "justifyContent": "space-around"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "vertical",
                                                            "contents": [
                                                                {
                                                                    "type": "image",
                                                                    "url": logoB5,
                                                                    "size": "xxs"
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "width": "200px",
                                                    "backgroundColor": "#000000",
                                                    "height": "50px",
                                                    "alignItems": "center",
                                                    "justifyContent": "space-around",
                                                    "cornerRadius": "15px"
                                                }
                                            ],
                                            "width": "300px",
                                            "alignItems": "center",
                                            "paddingTop": "15px"
                                        }
                                    ],
                                    "height": "180px"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": teamA5Name,
                                                            "color": "#FFFFFF"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": persenA5,
                                                            "size": "xxl",
                                                            "align": "center",
                                                            "weight": "bold",
                                                            "color": "#3765FE"
                                                        }
                                                    ],
                                                    "alignItems": "center"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "image",
                                                            "url": "https://img2.pic.in.th/pic/Lovepik_com-380162746-light-effects-vs-font-design-elements-yellow-gradient.png",
                                                            "size": "xs"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": teamB5Name,
                                                            "color": "#FFFFFF"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": persenB5,
                                                            "size": "xxl",
                                                            "align": "center",
                                                            "weight": "bold",
                                                            "color": "#FE3757"
                                                        }
                                                    ],
                                                    "alignItems": "center"
                                                }
                                            ],
                                            "justifyContent": "space-around"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": discription5,
                                                    "wrap": true,
                                                    "align": "center",
                                                    "scaling": true,
                                                    "decoration": "none",
                                                    "style": "normal",
                                                    "weight": "regular",
                                                    "color": "#FFFFFF",
                                                    "size": "xs"
                                                }
                                            ]
                                        }
                                    ],
                                    "alignItems": "center",
                                    "justifyContent": "flex-start",
                                    "background": {
                                        "type": "linearGradient",
                                        "angle": "0deg",
                                        "startColor": "#000000",
                                        "endColor": "#000000",
                                        "centerColor": "#323234"
                                    },
                                    "paddingAll": "15px",
                                    "height": "300px"
                                }
                            ],
                            "paddingAll": "0px",

                        }
                    }
                ]
            },

        }
    }
    found = true; // พบข้อมูล

    return { found: found, result: result }; // คืนค่าผลลัพธ์
}
