export const menuListAdmin = [
    {
        title: "회원관리",
        href: "account",
        group: [
            {
                title: "가입한사람",
                href: "",
            },
            {
                title: "생성일자",
                href: "",
            },
            {
                title: "탈퇴멤버",
                href: "",
            }
        ]
    },
    {
        title: "목록관리",
        href: "list",
        group: [
            {
                title: "음악",
                href: "list/music",
            },
            {
                title: "뮤직비디오",
                href: "list/musicvideo",
            },
            {
                title: "플레이리스트",
                href: "list/playlist",
            }
        ]
    },
    {
        title: "키워드 관리",
        href: "keyword",
        group: [
            {
                title: "날씨",
                href: "",
            },
            {
                title: "계절",
                href: "",
            },
            {
                title: "시간",
                href: "",
            }
        ]
    },
]

export const dummySearchList = {
    "tracks": {
        "hits": [
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "529961839",
                    "title": "여름 안에서 (feat. 황광희)",
                    "subtitle": "싹쓰리",
                    "share": {
                        "subject": "여름 안에서 (feat. 황광희) - 싹쓰리",
                        "text": "여름 안에서 (feat. 황광희)(싹쓰리 제공)",
                        "href": "https://www.shazam.com/track/529961839/in-the-summer-feat-hwang-kwang-hee",
                        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/dd/de/9e/ddde9ef7-d981-24c3-671d-8d3bb85c89da/cover_-.jpg/400x400cc.jpg",
                        "twitter": "@Shazam으로 싹쓰리의 여름 안에서 (feat. 황광희)을(를) 찾았어요.",
                        "html": "https://www.shazam.com/snippets/email-share/529961839?lang=ko-KR&country=KR",
                        "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/29/b4/db/29b4db04-7563-d65d-85bc-d61f29c22d3a/pr_source.png/800x800cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/529961839"
                    },
                    "images": {
                        "background": "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/29/b4/db/29b4db04-7563-d65d-85bc-d61f29c22d3a/pr_source.png/800x800cc.jpg",
                        "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/dd/de/9e/ddde9ef7-d981-24c3-671d-8d3bb85c89da/cover_-.jpg/400x400cc.jpg",
                        "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/dd/de/9e/ddde9ef7-d981-24c3-671d-8d3bb85c89da/cover_-.jpg/400x400cc.jpg",
                        "joecolor": "b:fcfcfcp:131518s:002e68t:424345q:325785"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1523244771"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/6e/ab/b0/6eabb0a6-a13c-6f06-f7ca-bd67e915c9f3/mzaf_17516497564286447399.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "열기",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/kr/album/in-the-summer-feat-hwang-kwang-hee/1523244769?i=1523244771&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/kr/album/in-the-summer-feat-hwang-kwang-hee/1523244769?i=1523244771&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Apple Music에서 열기",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Spotify에서 열기",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:%EC%97%AC%EB%A6%84%20%EC%95%88%EC%97%90%EC%84%9C%20%28feat.%20%ED%99%A9%EA%B4%91%ED%9D%AC%29%20%EC%8B%B9%EC%93%B0%EB%A6%AC"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Deezer에서 열기",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27%EC%97%AC%EB%A6%84+%EC%95%88%EC%97%90%EC%84%9C+%28feat.+%ED%99%A9%EA%B4%91%ED%9D%AC%29%27%20artist%3A%27%EC%8B%B9%EC%93%B0%EB%A6%AC%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": false,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "1523244770"
                        }
                    ],
                    "url": "https://www.shazam.com/track/529961839/in-the-summer-feat-hwang-kwang-hee"
                }
            },
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "579987793",
                    "title": "한 여름밤의 꿀: 다시 여름",
                    "subtitle": "레이나 & San E",
                    "share": {
                        "subject": "한 여름밤의 꿀: 다시 여름 - 레이나 & San E",
                        "text": "한 여름밤의 꿀: 다시 여름(레이나 & San E 제공)",
                        "href": "https://www.shazam.com/track/579987793/a-midsummer-nights-sweetness-summer-again",
                        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8d/12/cb/8d12cbda-a1cd-0c54-128c-225978840d30/190296547652.jpg/400x400cc.jpg",
                        "twitter": "@Shazam으로 레이나 & San E의 한 여름밤의 꿀: 다시 여름을(를) 찾았어요.",
                        "html": "https://www.shazam.com/snippets/email-share/579987793?lang=ko-KR&country=KR",
                        "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/cd/84/9e/cd849e96-56f0-69b4-dc86-cd436a703d16/mzl.jpzieguu.jpg/800x800cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/579987793"
                    },
                    "images": {
                        "background": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/cd/84/9e/cd849e96-56f0-69b4-dc86-cd436a703d16/mzl.jpzieguu.jpg/800x800cc.jpg",
                        "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8d/12/cb/8d12cbda-a1cd-0c54-128c-225978840d30/190296547652.jpg/400x400cc.jpg",
                        "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8d/12/cb/8d12cbda-a1cd-0c54-128c-225978840d30/190296547652.jpg/400x400cc.jpg",
                        "joecolor": "b:93bfe2p:000000s:1d1b18t:1d262dq:343b40"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1579608263"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8f/14/93/8f149334-8ae6-1a9f-fdb6-e85a1e41248e/mzaf_7913309986029972982.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "열기",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/kr/album/a-midsummer-nights-sweetness-summer-again/1579608262?i=1579608263&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/kr/album/a-midsummer-nights-sweetness-summer-again/1579608262?i=1579608263&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Apple Music에서 열기",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Spotify에서 열기",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:%ED%95%9C%20%EC%97%AC%EB%A6%84%EB%B0%A4%EC%9D%98%20%EA%BF%80%3A%20%EB%8B%A4%EC%8B%9C%20%EC%97%AC%EB%A6%84%20%EB%A0%88%EC%9D%B4%EB%82%98"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Deezer에서 열기",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27%ED%95%9C+%EC%97%AC%EB%A6%84%EB%B0%A4%EC%9D%98+%EA%BF%80%3A+%EB%8B%A4%EC%8B%9C+%EC%97%AC%EB%A6%84%27%20artist%3A%27%EB%A0%88%EC%9D%B4%EB%82%98++San+E%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": false,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "888539276"
                        }
                    ],
                    "url": "https://www.shazam.com/track/579987793/a-midsummer-nights-sweetness-summer-again"
                }
            },
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "40052815",
                    "title": "여름아! 부탁해",
                    "subtitle": "인디고",
                    "share": {
                        "subject": "여름아! 부탁해 - 인디고",
                        "text": "여름아! 부탁해(인디고 제공)",
                        "href": "https://www.shazam.com/track/40052815/please-summer",
                        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/d3/17/98/d31798f4-dd85-da3e-1b1b-d86f60f96ee0/100843_1.jpg/400x400cc.jpg",
                        "twitter": "@Shazam으로 인디고의 여름아! 부탁해을(를) 찾았어요.",
                        "html": "https://www.shazam.com/snippets/email-share/40052815?lang=ko-KR&country=KR",
                        "snapchat": "https://www.shazam.com/partner/sc/track/40052815"
                    },
                    "images": {
                        "background": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/d3/17/98/d31798f4-dd85-da3e-1b1b-d86f60f96ee0/100843_1.jpg/400x400cc.jpg",
                        "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/d3/17/98/d31798f4-dd85-da3e-1b1b-d86f60f96ee0/100843_1.jpg/400x400cc.jpg",
                        "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/d3/17/98/d31798f4-dd85-da3e-1b1b-d86f60f96ee0/100843_1.jpg/400x400cc.jpg",
                        "joecolor": "b:181d17p:d8dddcs:cdbfbet:b1b6b4q:a99f9c"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1419890471"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4a/1d/2c/4a1d2cc3-7b0d-5228-39cc-96aa1cc750a6/mzaf_18211438856132286299.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "열기",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/kr/album/please-summer/1419890307?i=1419890471&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/kr/album/please-summer/1419890307?i=1419890471&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Apple Music에서 열기",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Spotify에서 열기",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:%EC%97%AC%EB%A6%84%EC%95%84%21%20%EB%B6%80%ED%83%81%ED%95%B4%20%EC%9D%B8%EB%94%94%EA%B3%A0"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Deezer에서 열기",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27%EC%97%AC%EB%A6%84%EC%95%84%21+%EB%B6%80%ED%83%81%ED%95%B4%27%20artist%3A%27%EC%9D%B8%EB%94%94%EA%B3%A0%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": false,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "347912966"
                        }
                    ],
                    "url": "https://www.shazam.com/track/40052815/please-summer"
                }
            },
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "671075079",
                    "title": "몇 번의 여름 (영화 '여름날 우리')",
                    "subtitle": "TOIL & Gist",
                    "share": {
                        "subject": "몇 번의 여름 (영화 '여름날 우리') - TOIL & Gist",
                        "text": "몇 번의 여름 (영화 '여름날 우리')(TOIL & Gist 제공)",
                        "href": "https://www.shazam.com/track/671075079/after-a-few-summers-my-love",
                        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/69/d8/02/69d80230-fe0f-dede-fb07-f9477272e2cc/cover_KM0017808_1.jpg/400x400cc.jpg",
                        "twitter": "@Shazam으로 TOIL & Gist의 몇 번의 여름 (영화 '여름날 우리')을(를) 찾았어요.",
                        "html": "https://www.shazam.com/snippets/email-share/671075079?lang=ko-KR&country=KR",
                        "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/f9/e0/6e/f9e06e67-a282-ec8a-cfae-7ac4d4ebfa5f/mzl.oldyhpet.jpg/800x800cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/671075079"
                    },
                    "images": {
                        "background": "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/f9/e0/6e/f9e06e67-a282-ec8a-cfae-7ac4d4ebfa5f/mzl.oldyhpet.jpg/800x800cc.jpg",
                        "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/69/d8/02/69d80230-fe0f-dede-fb07-f9477272e2cc/cover_KM0017808_1.jpg/400x400cc.jpg",
                        "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/69/d8/02/69d80230-fe0f-dede-fb07-f9477272e2cc/cover_KM0017808_1.jpg/400x400cc.jpg",
                        "joecolor": "b:cfd9d8p:170710s:2d3621t:3c3138q:4e5646"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1695503147"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/b8/c1/ba/b8c1ba99-7a25-879a-d902-9ac072bb353a/mzaf_7491563387263745362.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "열기",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/kr/album/after-a-few-summers-my-love/1695503146?i=1695503147&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/kr/album/after-a-few-summers-my-love/1695503146?i=1695503147&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Apple Music에서 열기",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Spotify에서 열기",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:%EB%AA%87%20%EB%B2%88%EC%9D%98%20%EC%97%AC%EB%A6%84%20%28%EC%98%81%ED%99%94%20%27%EC%97%AC%EB%A6%84%EB%82%A0%20%EC%9A%B0%EB%A6%AC%27%29%20TOIL"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Deezer에서 열기",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27%EB%AA%87+%EB%B2%88%EC%9D%98+%EC%97%AC%EB%A6%84+%28%EC%98%81%ED%99%94+%5C%27%EC%97%AC%EB%A6%84%EB%82%A0+%EC%9A%B0%EB%A6%AC%5C%27%29%27%20artist%3A%27TOIL++Gist%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": false,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "592685573"
                        }
                    ],
                    "url": "https://www.shazam.com/track/671075079/after-a-few-summers-my-love"
                }
            },
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "531641651",
                    "title": "그 여름을 틀어줘",
                    "subtitle": "싹쓰리",
                    "share": {
                        "subject": "그 여름을 틀어줘 - 싹쓰리",
                        "text": "그 여름을 틀어줘(싹쓰리 제공)",
                        "href": "https://www.shazam.com/track/531641651/play-the-summer",
                        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0a/d6/9d/0ad69d95-24e4-c6aa-235b-d81b62236c8a/cover_-_DS.jpg/400x400cc.jpg",
                        "twitter": "@Shazam으로 싹쓰리의 그 여름을 틀어줘을(를) 찾았어요.",
                        "html": "https://www.shazam.com/snippets/email-share/531641651?lang=ko-KR&country=KR",
                        "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/29/b4/db/29b4db04-7563-d65d-85bc-d61f29c22d3a/pr_source.png/800x800cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/531641651"
                    },
                    "images": {
                        "background": "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/29/b4/db/29b4db04-7563-d65d-85bc-d61f29c22d3a/pr_source.png/800x800cc.jpg",
                        "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0a/d6/9d/0ad69d95-24e4-c6aa-235b-d81b62236c8a/cover_-_DS.jpg/400x400cc.jpg",
                        "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0a/d6/9d/0ad69d95-24e4-c6aa-235b-d81b62236c8a/cover_-_DS.jpg/400x400cc.jpg",
                        "joecolor": "b:bebebcp:0b0b0as:161615t:2f2f2dq:383836"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1525161569"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b1/75/c7/b175c7fa-420f-4a61-42e8-8cb20d53964f/mzaf_6694786624233529637.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "열기",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/kr/album/play-the-summer/1525161568?i=1525161569&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/kr/album/play-the-summer/1525161568?i=1525161569&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Apple Music에서 열기",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Spotify에서 열기",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:%EA%B7%B8%20%EC%97%AC%EB%A6%84%EC%9D%84%20%ED%8B%80%EC%96%B4%EC%A4%98%20%EC%8B%B9%EC%93%B0%EB%A6%AC"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Deezer에서 열기",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27%EA%B7%B8+%EC%97%AC%EB%A6%84%EC%9D%84+%ED%8B%80%EC%96%B4%EC%A4%98%27%20artist%3A%27%EC%8B%B9%EC%93%B0%EB%A6%AC%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": false,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "1523244770"
                        }
                    ],
                    "url": "https://www.shazam.com/track/531641651/play-the-summer"
                }
            }
        ]
    },
    "artists": {
        "hits": [
            {
                "artist": {
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/e5/ce/fe/e5cefe6d-98a2-5108-19ff-aec2dd3e3fcc/mzl.utjkmnxh.jpg/800x800bb.jpg",
                    "name": "우주소녀",
                    "verified": false,
                    "weburl": "https://music.apple.com/kr/artist/%EC%9A%B0%EC%A3%BC%EC%86%8C%EB%85%80/1087651007",
                    "adamid": "1087651007"
                }
            },
            {
                "artist": {
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/f7/3a/de/f73ade9d-a3cb-7650-9835-343fe62b8b8e/mzl.gaygatgx.jpg/800x800bb.jpg",
                    "name": "우주소녀 쪼꼬미",
                    "verified": false,
                    "weburl": "https://music.apple.com/kr/artist/%EC%9A%B0%EC%A3%BC%EC%86%8C%EB%85%80-%EC%AA%BC%EA%BC%AC%EB%AF%B8/1533632762",
                    "adamid": "1533632762"
                }
            },
            {
                "artist": {
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/36/b1/b1/36b1b1a5-d7f6-8b82-5ed5-95d1f6969d76/mzl.kukgkwpx.jpeg/800x800bb.jpg",
                    "name": "여름",
                    "verified": false,
                    "weburl": "https://music.apple.com/kr/artist/%EC%97%AC%EB%A6%84/1699180748",
                    "adamid": "1699180748"
                }
            },
            {
                "artist": {
                    "name": "여름",
                    "verified": false,
                    "weburl": "https://music.apple.com/kr/artist/%EC%97%AC%EB%A6%84/1698072344",
                    "adamid": "1698072344"
                }
            },
            {
                "artist": {
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0e/68/74/0e687450-cd45-704b-8fa5-3b91b3676fca/cover_KM0012505_1.jpg/800x800ac.jpg",
                    "name": "여름",
                    "verified": false,
                    "weburl": "https://music.apple.com/kr/artist/%EC%97%AC%EB%A6%84/1367085106",
                    "adamid": "1367085106"
                }
            }
        ]
    }
}

export const dummyWeather = {
    "location": {
        "city": "Seoul",
        "woeid": 1132599,
        "country": "South Korea",
        "lat": 37.557121,
        "long": 126.977379,
        "timezone_id": "Asia/Seoul"
    },
    "current_observation": {
        "pubDate": 1721228038,
        "wind": {
            "chill": 82,
            "direction": "South",
            "speed": 3
        },
        "atmosphere": {
            "humidity": 88,
            "visibility": 21,
            "pressure": 1007.8
        },
        "astronomy": {
            "sunrise": "5:24 AM",
            "sunset": "7:52 PM"
        },
        "condition": {
            "temperature": 78,
            "text": "Partly Cloudy",
            "code": 30
        }
    },
    "forecasts": [
        {
            "day": "Wed",
            "date": 1721232000,
            "high": 81,
            "low": 76,
            "text": "Scattered Showers",
            "code": 45
        },
        {
            "day": "Thu",
            "date": 1721318400,
            "high": 79,
            "low": 75,
            "text": "Showers",
            "code": 11
        },
        {
            "day": "Fri",
            "date": 1721404800,
            "high": 85,
            "low": 75,
            "text": "Showers",
            "code": 11
        },
        {
            "day": "Sat",
            "date": 1721491200,
            "high": 83,
            "low": 76,
            "text": "Rain",
            "code": 12
        },
        {
            "day": "Sun",
            "date": 1721577600,
            "high": 83,
            "low": 77,
            "text": "Rain",
            "code": 12
        },
        {
            "day": "Mon",
            "date": 1721664000,
            "high": 88,
            "low": 78,
            "text": "Thunderstorms",
            "code": 4
        },
        {
            "day": "Tue",
            "date": 1721750400,
            "high": 92,
            "low": 79,
            "text": "Cloudy",
            "code": 26
        },
        {
            "day": "Wed",
            "date": 1721836800,
            "high": 92,
            "low": 78,
            "text": "Mostly Cloudy",
            "code": 28
        },
        {
            "day": "Thu",
            "date": 1721923200,
            "high": 95,
            "low": 82,
            "text": "Partly Cloudy",
            "code": 30
        },
        {
            "day": "Fri",
            "date": 1722009600,
            "high": 93,
            "low": 83,
            "text": "Showers",
            "code": 11
        },
        {
            "day": "Sat",
            "date": 1722096000,
            "high": 85,
            "low": 73,
            "text": "Showers",
            "code": 11
        }
    ]
}

export const dummyArtistDetail = {
    "data": [
        {
            "id": "307762356",
            "type": "artists"
        }
    ],
    "resources": {
        "artists": {
            "307762356": {
                "id": "307762356",
                "type": "artists",
                "attributes": {
                    "genreNames": [
                        "K-Pop"
                    ],
                    "name": "김진표",
                    "artwork": {
                        "width": 1419,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/c1/55/76/c15576e0-7ec7-2fcc-c1ff-720691c0a01c/jp5.jpg/{w}x{h}ac.jpg",
                        "height": 1419,
                        "textColor3": "3a3a39",
                        "textColor2": "1f201f",
                        "textColor4": "4c4c4b",
                        "textColor1": "090908",
                        "bgColor": "ffffff",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/artist/%EA%B9%80%EC%A7%84%ED%91%9C/307762356"
                },
                "relationships": {
                    "albums": {
                        "data": [
                            {
                                "id": "984338985",
                                "type": "albums"
                            },
                            {
                                "id": "1698593327",
                                "type": "albums"
                            },
                            {
                                "id": "1193046315",
                                "type": "albums"
                            },
                            {
                                "id": "1454261955",
                                "type": "albums"
                            },
                            {
                                "id": "985037075",
                                "type": "albums"
                            },
                            {
                                "id": "1452974882",
                                "type": "albums"
                            },
                            {
                                "id": "984375747",
                                "type": "albums"
                            },
                            {
                                "id": "1454907623",
                                "type": "albums"
                            },
                            {
                                "id": "1508256039",
                                "type": "albums"
                            },
                            {
                                "id": "1406679035",
                                "type": "albums"
                            },
                            {
                                "id": "1732646693",
                                "type": "albums"
                            },
                            {
                                "id": "1547875127",
                                "type": "albums"
                            },
                            {
                                "id": "1547835391",
                                "type": "albums"
                            },
                            {
                                "id": "1570392685",
                                "type": "albums"
                            }
                        ]
                    }
                },
                "views": {
                    "latest-release": {
                        "attributes": {
                            "title": "신규 발매"
                        },
                        "data": []
                    },
                    "top-songs": {
                        "attributes": {
                            "title": "인기곡"
                        },
                        "data": [
                            {
                                "id": "984339217",
                                "type": "songs"
                            },
                            {
                                "id": "1339074800",
                                "type": "songs"
                            },
                            {
                                "id": "985037668",
                                "type": "songs"
                            },
                            {
                                "id": "1539886348",
                                "type": "songs"
                            },
                            {
                                "id": "1562087018",
                                "type": "songs"
                            },
                            {
                                "id": "984339225",
                                "type": "songs"
                            },
                            {
                                "id": "1547875128",
                                "type": "songs"
                            },
                            {
                                "id": "1547835392",
                                "type": "songs"
                            },
                            {
                                "id": "1698593330",
                                "type": "songs"
                            },
                            {
                                "id": "1454261956",
                                "type": "songs"
                            },
                            {
                                "id": "1698517835",
                                "type": "songs"
                            },
                            {
                                "id": "1193046523",
                                "type": "songs"
                            },
                            {
                                "id": "1454261960",
                                "type": "songs"
                            },
                            {
                                "id": "985037675",
                                "type": "songs"
                            },
                            {
                                "id": "1519403552",
                                "type": "songs"
                            },
                            {
                                "id": "1651585536",
                                "type": "songs"
                            },
                            {
                                "id": "1568406485",
                                "type": "songs"
                            },
                            {
                                "id": "1544931239",
                                "type": "songs"
                            },
                            {
                                "id": "1454261963",
                                "type": "songs"
                            },
                            {
                                "id": "1543850402",
                                "type": "songs"
                            }
                        ]
                    }
                },
                "meta": {
                    "views": {
                        "order": [
                            "latest-release",
                            "top-songs"
                        ]
                    }
                }
            }
        },
        "albums": {
            "984338985": {
                "id": "984338985",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 뮤직팜(Music Farm),under license to Kakao M Corp.",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝",
                        "힙합/랩"
                    ],
                    "releaseDate": "2009-12-17",
                    "upc": "8804775061431",
                    "isMasteredForItunes": false,
                    "artwork": {
                        "width": 3151,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music1/v4/1a/95/a0/1a95a052-5082-e815-0c75-acf2f8b20bd4/romantic.jpg/{w}x{h}bb.jpg",
                        "height": 4343,
                        "textColor3": "493335",
                        "textColor2": "69000d",
                        "textColor4": "87333d",
                        "textColor1": "1b0002",
                        "bgColor": "ffffff",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/romantic-winter-ep/984338985",
                    "playParams": {
                        "id": "984338985",
                        "kind": "album"
                    },
                    "recordLabel": "뮤직팜(Music Farm)",
                    "isCompilation": false,
                    "trackCount": 6,
                    "isPrerelease": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": false,
                    "name": "Romantic 겨울 - EP",
                    "artistName": "김진표",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1715101107624
                    }
                }
            },
            "984375747": {
                "id": "984375747",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 뮤직팜(Music Farm),under license to Kakao M Corp.",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝",
                        "힙합/랩"
                    ],
                    "releaseDate": "2008-05-29",
                    "upc": "8804775061448",
                    "isMasteredForItunes": false,
                    "artwork": {
                        "width": 1419,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/c1/55/76/c15576e0-7ec7-2fcc-c1ff-720691c0a01c/jp5.jpg/{w}x{h}bb.jpg",
                        "height": 1419,
                        "textColor3": "3a3a39",
                        "textColor2": "1f201f",
                        "textColor4": "4c4c4b",
                        "textColor1": "090908",
                        "bgColor": "ffffff",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/galanty-show/984375747",
                    "playParams": {
                        "id": "984375747",
                        "kind": "album"
                    },
                    "recordLabel": "뮤직팜(Music Farm)",
                    "isCompilation": false,
                    "trackCount": 14,
                    "isPrerelease": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": false,
                    "name": "Galanty Show",
                    "artistName": "김진표",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1710062525254
                    }
                }
            },
            "985037075": {
                "id": "985037075",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 뮤직팜(Music Farm),under license to Kakao M Corp.",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝",
                        "힙합/랩"
                    ],
                    "releaseDate": "2003-05-12",
                    "isMasteredForItunes": false,
                    "upc": "8804775061943",
                    "artwork": {
                        "width": 2844,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music7/v4/a3/1c/66/a31c66c0-4f51-db51-ae39-5a89b466ab51/Jp4.jpg/{w}x{h}bb.jpg",
                        "height": 2802,
                        "textColor3": "3f2c2f",
                        "textColor2": "262122",
                        "textColor4": "494545",
                        "textColor1": "190206",
                        "bgColor": "d6d5d3",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/jp4/985037075",
                    "playParams": {
                        "id": "985037075",
                        "kind": "album"
                    },
                    "recordLabel": "뮤직팜(Music Farm)",
                    "isCompilation": false,
                    "trackCount": 15,
                    "isPrerelease": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": false,
                    "name": "JP4",
                    "artistName": "김진표",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1710083176433
                    }
                }
            },
            "1193046315": {
                "id": "1193046315",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 뮤직팜(Music Farm),under license to Kakao M Corp.",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝",
                        "힙합/랩"
                    ],
                    "releaseDate": "2004-05-24",
                    "upc": "8804775061936",
                    "isMasteredForItunes": false,
                    "artwork": {
                        "width": 1600,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music91/v4/17/92/2f/17922f41-5d9f-2463-0f74-067136a4a509/Jinpyo_Remastering_cover.jpg/{w}x{h}bb.jpg",
                        "height": 1448,
                        "textColor3": "363611",
                        "textColor2": "0f1012",
                        "textColor4": "363611",
                        "textColor1": "0f1012",
                        "bgColor": "d0d20c",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/remastering-all-about-jp/1193046315",
                    "playParams": {
                        "id": "1193046315",
                        "kind": "album"
                    },
                    "recordLabel": "뮤직팜(Music Farm)",
                    "isCompilation": true,
                    "trackCount": 32,
                    "isPrerelease": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": false,
                    "name": "Remastering All About JP",
                    "artistName": "김진표",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1710066469849
                    }
                }
            },
            "1406679035": {
                "id": "1406679035",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 2018 TSN Company",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝"
                    ],
                    "releaseDate": "2013-08-22",
                    "isMasteredForItunes": false,
                    "upc": "8806163341972",
                    "artwork": {
                        "width": 1400,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/57/25/c7/5725c72f-8ce7-26cc-1d77-19487e542b64/8806163341972.jpg/{w}x{h}bb.jpg",
                        "height": 1400,
                        "textColor3": "ccc9c1",
                        "textColor2": "f9ecd6",
                        "textColor4": "cec1ad",
                        "textColor1": "f6f6ee",
                        "bgColor": "22150c",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/%EC%82%AC%EB%A1%9C%EC%9E%A1%EC%95%84%EC%9A%94-single/1406679035",
                    "playParams": {
                        "id": "1406679035",
                        "kind": "album"
                    },
                    "recordLabel": "TSN Company",
                    "isCompilation": false,
                    "trackCount": 2,
                    "isPrerelease": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": false,
                    "name": "사로잡아요 - Single",
                    "artistName": "김진표 & HELLOVENUS",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1710050631782
                    }
                }
            },
            "1452974882": {
                "id": "1452974882",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 2013 레이블벅스",
                    "genreNames": [
                        "힙합/랩",
                        "음악",
                        "팝",
                        "K-Pop"
                    ],
                    "releaseDate": "2013-10-04",
                    "upc": "8806163352930",
                    "isMasteredForItunes": false,
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/42/33/dd/4233dd06-2596-7251-55fc-0beee2cf0e34/390588.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "c09b65",
                        "textColor2": "d3a930",
                        "textColor4": "aa8827",
                        "textColor1": "eec17d",
                        "bgColor": "070506",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/%EC%98%81%EC%9B%90%ED%86%A0%EB%A1%9D-feat-john-park-single/1452974882",
                    "playParams": {
                        "id": "1452974882",
                        "kind": "album"
                    },
                    "recordLabel": "레이블벅스",
                    "isCompilation": false,
                    "trackCount": 1,
                    "isPrerelease": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": true,
                    "name": "영원토록 (feat. John Park) - Single",
                    "artistName": "김진표",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1710026334501
                    }
                }
            },
            "1454261955": {
                "id": "1454261955",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 2013 레이블벅스",
                    "genreNames": [
                        "힙합/랩",
                        "음악",
                        "팝",
                        "K-Pop"
                    ],
                    "releaseDate": "2013-10-10",
                    "upc": "8806163355610",
                    "isMasteredForItunes": false,
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/38/e2/0e/38e20e47-55d9-0526-c7f0-6cff13a06769/391198.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "222627",
                        "textColor2": "2f2419",
                        "textColor4": "433f37",
                        "textColor1": "060405",
                        "bgColor": "94aeaf",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/jp7/1454261955",
                    "playParams": {
                        "id": "1454261955",
                        "kind": "album"
                    },
                    "recordLabel": "레이블벅스",
                    "isCompilation": false,
                    "trackCount": 10,
                    "isPrerelease": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": false,
                    "name": "Jp7",
                    "contentRating": "explicit",
                    "artistName": "김진표",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1710063399488
                    }
                }
            },
            "1454907623": {
                "id": "1454907623",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 2015 브랜뉴뮤직, under license to NHN Bugs Corp",
                    "genreNames": [
                        "힙합/랩",
                        "음악",
                        "팝",
                        "K-Pop"
                    ],
                    "releaseDate": "2015-12-18",
                    "isMasteredForItunes": false,
                    "upc": "8806197990948",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/8c/79/7e/8c797e2c-2dae-31ec-93ea-62685567f09e/543126.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "2e3638",
                        "textColor2": "222c2e",
                        "textColor4": "474f50",
                        "textColor1": "040c0f",
                        "bgColor": "dadfdb",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/%EC%82%B0%ED%83%80%EC%B2%98%EB%9F%BC-single/1454907623",
                    "playParams": {
                        "id": "1454907623",
                        "kind": "album"
                    },
                    "recordLabel": "브랜뉴뮤직",
                    "isCompilation": false,
                    "trackCount": 2,
                    "isPrerelease": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": false,
                    "name": "산타처럼 - Single",
                    "artistName": "김진표",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1710371811751
                    }
                }
            },
            "1508256039": {
                "id": "1508256039",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 2020 오감엔터테인먼트",
                    "genreNames": [
                        "댄스",
                        "음악",
                        "팝",
                        "K-Pop"
                    ],
                    "releaseDate": "2020-04-15",
                    "upc": "8809717458454",
                    "isMasteredForItunes": false,
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/7d/b3/1c/7db31cf1-8e6c-a925-c1b7-35e71c8a494b/8809717458454.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "2c2c2c",
                        "textColor2": "1b1b1b",
                        "textColor4": "424242",
                        "textColor1": "000000",
                        "bgColor": "dedede",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/%EB%8C%80%EB%A1%9C-feat-%EA%B9%80%EC%A7%84%ED%91%9C-single/1508256039",
                    "playParams": {
                        "id": "1508256039",
                        "kind": "album"
                    },
                    "recordLabel": "더 인디 레이블",
                    "isCompilation": false,
                    "trackCount": 1,
                    "isPrerelease": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": true,
                    "name": "대로 (feat. 김진표) - Single",
                    "artistName": "BB Project",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1710375885980
                    }
                }
            },
            "1547835391": {
                "id": "1547835391",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 2010 레이블 벅스, under license to NHN Bugs Corp",
                    "genreNames": [
                        "힙합/랩",
                        "음악",
                        "팝",
                        "K-Pop"
                    ],
                    "releaseDate": "2010-12-15",
                    "upc": "191953101644",
                    "isMasteredForItunes": false,
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7f/b0/2e/7fb02e40-fbc5-8509-11f4-64f8f979febf/191953101644.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "3d3d3d",
                        "textColor2": "313131",
                        "textColor4": "535353",
                        "textColor1": "161616",
                        "bgColor": "dbdbdb",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/%EC%9D%B4%EB%B3%84-%EB%92%A4%EC%97%90-%ED%95%B4%EC%95%BC-%ED%95%A0-%EB%AA%87-%EA%B0%80%EC%A7%80-single/1547835391",
                    "playParams": {
                        "id": "1547835391",
                        "kind": "album"
                    },
                    "recordLabel": "레이블 벅스",
                    "isCompilation": false,
                    "trackCount": 2,
                    "isPrerelease": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": false,
                    "name": "이별 뒤에 해야 할 몇 가지 - Single",
                    "contentRating": "explicit",
                    "artistName": "김진표",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1714077369563
                    }
                }
            },
            "1547875127": {
                "id": "1547875127",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 2009 노트뮤직, under license to NHN Bugs Corp",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝"
                    ],
                    "releaseDate": "2009-05-15",
                    "isMasteredForItunes": false,
                    "upc": "191953104522",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/bb/b3/d0/bbb3d0d1-d741-0d56-f9e3-edbf6b4a3b32/191953104522.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "4a4446",
                        "textColor2": "1c1e1d",
                        "textColor4": "494748",
                        "textColor1": "1d191b",
                        "bgColor": "feeff6",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/color-of-city-pink-single/1547875127",
                    "playParams": {
                        "id": "1547875127",
                        "kind": "album"
                    },
                    "recordLabel": "노트뮤직",
                    "isCompilation": false,
                    "trackCount": 2,
                    "isPrerelease": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": false,
                    "name": "Color Of City (Pink) - Single",
                    "artistName": "요조 & 김진표",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1710338956904
                    }
                }
            },
            "1570392685": {
                "id": "1570392685",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 2021 오감엔터테인먼트",
                    "genreNames": [
                        "록",
                        "음악",
                        "팝",
                        "K-Pop"
                    ],
                    "releaseDate": "2021-06-03",
                    "upc": "8809795725059",
                    "isMasteredForItunes": false,
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/12/b2/93/12b29375-4bbb-de10-5433-1f034573b98e/8809795725059.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "c4a379",
                        "textColor2": "e3b686",
                        "textColor4": "bc976e",
                        "textColor1": "edc594",
                        "bgColor": "1e1a0f",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/more-money-rap-ver-single/1570392685",
                    "playParams": {
                        "id": "1570392685",
                        "kind": "album"
                    },
                    "recordLabel": "KOZMUSIC",
                    "isCompilation": false,
                    "trackCount": 2,
                    "isPrerelease": false,
                    "audioTraits": [
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": false,
                    "name": "More Money (Rap Ver.)) - Single",
                    "artistName": "노바소닉 & 김진표",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1710247515813
                    }
                }
            },
            "1698593327": {
                "id": "1698593327",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 1997 Beyond Music, under license to Dreamus",
                    "genreNames": [
                        "힙합/랩",
                        "음악",
                        "팝",
                        "K-Pop"
                    ],
                    "releaseDate": "1997-06-01",
                    "isMasteredForItunes": false,
                    "upc": "888618095010",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/80/f6/80/80f680b7-2777-ce36-b569-587a34fff837/888618095010.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "977aac",
                        "textColor2": "a69bde",
                        "textColor4": "867cb4",
                        "textColor1": "bb99d4",
                        "bgColor": "06000c",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/%EC%97%B4%EC%99%B8/1698593327",
                    "playParams": {
                        "id": "1698593327",
                        "kind": "album"
                    },
                    "recordLabel": "Beyond Music",
                    "isCompilation": false,
                    "trackCount": 12,
                    "isPrerelease": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": false,
                    "name": "열외",
                    "contentRating": "explicit",
                    "artistName": "김진표",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1710279336373
                    }
                }
            },
            "1732646693": {
                "id": "1732646693",
                "type": "albums",
                "attributes": {
                    "copyright": "℗ 2010 제이제이홀릭미디어",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝"
                    ],
                    "releaseDate": "2010-02-02",
                    "upc": "888618210024",
                    "isMasteredForItunes": false,
                    "artwork": {
                        "width": 1400,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/00/25/d6/0025d6bc-5158-9183-536c-4dcb5bac8c1f/888618210024_Cover.jpg/{w}x{h}bb.jpg",
                        "height": 1400,
                        "textColor3": "272221",
                        "textColor2": "161312",
                        "textColor4": "302c2a",
                        "textColor1": "0b0706",
                        "bgColor": "99918e",
                        "hasP3": false
                    },
                    "url": "https://music.apple.com/kr/album/m4-%EC%B2%AB-%EB%B2%88%EC%A7%B8-%EC%9D%B4%EC%95%BC%EA%B8%B0-%EB%AA%A8%EB%91%90-%EC%9E%A0%EB%93%A0-%ED%9B%84%EC%97%90-feat-%EA%B9%80%EC%A7%84%ED%91%9C-single/1732646693",
                    "playParams": {
                        "id": "1732646693",
                        "kind": "album"
                    },
                    "recordLabel": "BIGBAND",
                    "isCompilation": false,
                    "trackCount": 1,
                    "isPrerelease": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "isSingle": true,
                    "name": "M4 첫 번째 이야기 - 모두 잠든 후에 (feat. 김진표) - Single",
                    "artistName": "이세준",
                    "isComplete": false
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 0,
                        "MZ_INDEXER": 1710261457389
                    }
                }
            }
        },
        "songs": {
            "984339217": {
                "id": "984339217",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": false,
                    "albumName": "Romantic 겨울 - EP",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝",
                        "힙합/랩"
                    ],
                    "trackNumber": 3,
                    "releaseDate": "2009-12-17",
                    "durationInMillis": 249813,
                    "isVocalAttenuationAllowed": false,
                    "isMasteredForItunes": false,
                    "isrc": "KRA490900647",
                    "artwork": {
                        "width": 3151,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music1/v4/1a/95/a0/1a95a052-5082-e815-0c75-acf2f8b20bd4/romantic.jpg/{w}x{h}bb.jpg",
                        "height": 4343,
                        "textColor3": "493335",
                        "textColor2": "69000d",
                        "textColor4": "87333d",
                        "textColor1": "1b0002",
                        "bgColor": "ffffff",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EB%A1%9C%EB%A7%A8%ED%8B%B1-%EA%B2%A8%EC%9A%B8-feat-%EA%B9%80%EC%A7%84%ED%98%B8/984338985?i=984339217",
                    "playParams": {
                        "id": "984339217",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "hasLyrics": false,
                    "isAppleDigitalMaster": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "로맨틱 겨울 (feat. 김진호)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/32/00/6a/32006a01-aff3-cf04-1b9b-c0aa185908a9/mzaf_12349473351873122100.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "김진표"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1715343576544,
                        "MZ_INDEXER": 1718088171075
                    }
                }
            },
            "984339225": {
                "id": "984339225",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": false,
                    "albumName": "Romantic 겨울 - EP",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝",
                        "힙합/랩"
                    ],
                    "trackNumber": 5,
                    "durationInMillis": 266667,
                    "releaseDate": "2009-12-17",
                    "isVocalAttenuationAllowed": false,
                    "isMasteredForItunes": false,
                    "isrc": "KRA381208342",
                    "artwork": {
                        "width": 3151,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music1/v4/1a/95/a0/1a95a052-5082-e815-0c75-acf2f8b20bd4/romantic.jpg/{w}x{h}bb.jpg",
                        "height": 4343,
                        "textColor3": "493335",
                        "textColor2": "69000d",
                        "textColor4": "87333d",
                        "textColor1": "1b0002",
                        "bgColor": "ffffff",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EC%B9%9C%EA%B5%AC%EC%95%BC-with-%EC%9D%B4%EC%A0%81-%EA%B9%80%EB%8F%99%EB%A5%A0-%EC%8B%B8%EC%9D%B4-%EA%B8%B8-%EB%A5%98%EC%8B%9C%EC%9B%90-%EA%B9%80%EC%9B%90%EC%A4%80-%EA%B9%80%EC%A1%B0%ED%95%9C/984338985?i=984339225",
                    "playParams": {
                        "id": "984339225",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "isAppleDigitalMaster": false,
                    "hasLyrics": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "친구야 (with 이적, 김동률, 싸이, 길, 류시원, 김원준 & 김조한)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2d/15/ce/2d15cebf-4902-8f23-7225-ada04791c323/mzaf_15409429610335083816.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "김진표"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1717216599482,
                        "MZ_INDEXER": 1718046856862
                    }
                }
            },
            "985037668": {
                "id": "985037668",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": false,
                    "albumName": "JP4",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝",
                        "힙합/랩"
                    ],
                    "trackNumber": 3,
                    "durationInMillis": 247693,
                    "releaseDate": "2003-05-12",
                    "isVocalAttenuationAllowed": false,
                    "isMasteredForItunes": false,
                    "isrc": "KRA381210255",
                    "artwork": {
                        "width": 2844,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music7/v4/a3/1c/66/a31c66c0-4f51-db51-ae39-5a89b466ab51/Jp4.jpg/{w}x{h}bb.jpg",
                        "height": 2802,
                        "textColor3": "3f2c2f",
                        "textColor2": "262122",
                        "textColor4": "494545",
                        "textColor1": "190206",
                        "bgColor": "d6d5d3",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EC%95%84%EC%A7%81-%EB%AA%BB%EB%8B%A4%ED%95%9C-%EC%9D%B4%EC%95%BC%EA%B8%B0-feat-bmk/985037075?i=985037668",
                    "playParams": {
                        "id": "985037668",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "isAppleDigitalMaster": false,
                    "hasLyrics": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "아직 못다한 이야기 (feat. BMK)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/54/45/e2/5445e2df-4c63-81ce-b4c8-1e5926dab9b0/mzaf_4709437950766191071.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "김진표"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1716241295361,
                        "MZ_INDEXER": 1719339261445
                    }
                }
            },
            "985037675": {
                "id": "985037675",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": false,
                    "albumName": "JP4",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝",
                        "힙합/랩"
                    ],
                    "trackNumber": 4,
                    "durationInMillis": 222267,
                    "releaseDate": "2003-05-12",
                    "isVocalAttenuationAllowed": false,
                    "isMasteredForItunes": false,
                    "isrc": "KRA381210256",
                    "artwork": {
                        "width": 2844,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music7/v4/a3/1c/66/a31c66c0-4f51-db51-ae39-5a89b466ab51/Jp4.jpg/{w}x{h}bb.jpg",
                        "height": 2802,
                        "textColor3": "3f2c2f",
                        "textColor2": "262122",
                        "textColor4": "494545",
                        "textColor1": "190206",
                        "bgColor": "d6d5d3",
                        "hasP3": false
                    },
                    "audioLocale": "es-ES",
                    "url": "https://music.apple.com/kr/album/%EC%9C%A0%EB%82%9C%ED%9E%88-feat-%EC%8B%A0%EC%98%88%EC%9B%90/985037075?i=985037675",
                    "playParams": {
                        "id": "985037675",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "isAppleDigitalMaster": false,
                    "hasLyrics": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "유난히 (feat. 신예원)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d5/8c/d3/d58cd3c8-9556-96d0-13a7-227d9950214b/mzaf_17907193057144516556.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "김진표"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1711165380831,
                        "MZ_INDEXER": 1718667137211
                    }
                }
            },
            "1193046523": {
                "id": "1193046523",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": false,
                    "albumName": "Remastering All About JP",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝",
                        "힙합/랩"
                    ],
                    "trackNumber": 1,
                    "durationInMillis": 324333,
                    "releaseDate": "2004-05-24",
                    "isVocalAttenuationAllowed": false,
                    "isMasteredForItunes": false,
                    "isrc": "KRA381210237",
                    "artwork": {
                        "width": 1600,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music91/v4/17/92/2f/17922f41-5d9f-2463-0f74-067136a4a509/Jinpyo_Remastering_cover.jpg/{w}x{h}bb.jpg",
                        "height": 1448,
                        "textColor3": "363611",
                        "textColor2": "0f1012",
                        "textColor4": "363611",
                        "textColor1": "0f1012",
                        "bgColor": "d0d20c",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EC%83%B4%ED%91%B8%EC%9D%98-%EC%9A%94%EC%A0%95-feat-%EA%B9%80%EC%A1%B0%ED%95%9C-%EC%9D%B4%EC%A4%80/1193046315?i=1193046523",
                    "playParams": {
                        "id": "1193046523",
                        "kind": "song"
                    },
                    "discNumber": 2,
                    "hasCredits": false,
                    "isAppleDigitalMaster": false,
                    "hasLyrics": true,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "샴푸의 요정 (feat. 김조한 & 이준)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/31/71/b4/3171b495-f5cd-fd50-2bb4-4cbce05b9bdc/mzaf_5852816898629538374.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "김진표"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1713449739532,
                        "MZ_INDEXER": 1718680216029
                    }
                }
            },
            "1339074800": {
                "id": "1339074800",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": true,
                    "albumName": "싸이6甲, Pt. 1 - EP",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝"
                    ],
                    "trackNumber": 4,
                    "releaseDate": "2012-07-15",
                    "durationInMillis": 279061,
                    "isVocalAttenuationAllowed": true,
                    "isMasteredForItunes": false,
                    "isrc": "KRA341205653",
                    "artwork": {
                        "width": 1772,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/77/a3/98/77a39810-e45e-35de-fe20-dbe809ac789d/8806384535815.jpg/{w}x{h}bb.jpg",
                        "height": 1772,
                        "textColor3": "012d2e",
                        "textColor2": "111111",
                        "textColor4": "0f3a3a",
                        "textColor1": "000101",
                        "bgColor": "06dde0",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/77%ED%95%99-%EA%B0%9C%EB%A1%A0-feat-%EB%A6%AC%EC%8C%8D-%EA%B9%80%EC%A7%84%ED%91%9C/1339074793?i=1339074800",
                    "playParams": {
                        "id": "1339074800",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "hasLyrics": true,
                    "isAppleDigitalMaster": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "77학 개론 (feat. 리쌍 & 김진표)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1d/a7/cd/1da7cd4f-c3b7-2961-9da4-6cd337d2fcca/mzaf_17854448530556300072.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "싸이"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1715874527082,
                        "MZ_INDEXER": 1717936685560
                    }
                }
            },
            "1454261956": {
                "id": "1454261956",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": false,
                    "albumName": "Jp7",
                    "genreNames": [
                        "힙합/랩",
                        "음악",
                        "팝",
                        "K-Pop"
                    ],
                    "trackNumber": 1,
                    "releaseDate": "2013-10-10",
                    "durationInMillis": 242549,
                    "isVocalAttenuationAllowed": false,
                    "isMasteredForItunes": false,
                    "isrc": "KRA341327916",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/38/e2/0e/38e20e47-55d9-0526-c7f0-6cff13a06769/391198.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "222627",
                        "textColor2": "2f2419",
                        "textColor4": "433f37",
                        "textColor1": "060405",
                        "bgColor": "94aeaf",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EC%A2%80%EB%B9%84-feat-lyn/1454261955?i=1454261956",
                    "playParams": {
                        "id": "1454261956",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "hasLyrics": true,
                    "isAppleDigitalMaster": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "좀비 (feat. Lyn)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/90/25/a9/9025a9e2-b264-55e3-c480-933d4f03b528/mzaf_10881762177456315131.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "김진표"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1719326759031,
                        "MZ_INDEXER": 1718978384966
                    }
                }
            },
            "1454261960": {
                "id": "1454261960",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": false,
                    "albumName": "Jp7",
                    "genreNames": [
                        "힙합/랩",
                        "음악",
                        "팝",
                        "K-Pop"
                    ],
                    "trackNumber": 5,
                    "releaseDate": "2013-10-10",
                    "durationInMillis": 231036,
                    "isVocalAttenuationAllowed": false,
                    "isMasteredForItunes": false,
                    "isrc": "KRA341327920",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/38/e2/0e/38e20e47-55d9-0526-c7f0-6cff13a06769/391198.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "222627",
                        "textColor2": "2f2419",
                        "textColor4": "433f37",
                        "textColor1": "060405",
                        "bgColor": "94aeaf",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EC%84%9C%EB%A5%B8%EC%9D%BC%EA%B3%B1-feat-kim-yuna/1454261955?i=1454261960",
                    "playParams": {
                        "id": "1454261960",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "isAppleDigitalMaster": false,
                    "hasLyrics": true,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "서른일곱 (feat. Kim Yuna)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3b/65/59/3b6559f9-752d-2393-db87-c88b5521960e/mzaf_4422783149328873922.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "김진표"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1719041533652,
                        "MZ_INDEXER": 1719043416086
                    }
                }
            },
            "1454261963": {
                "id": "1454261963",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": false,
                    "albumName": "Jp7",
                    "genreNames": [
                        "힙합/랩",
                        "음악",
                        "팝",
                        "K-Pop"
                    ],
                    "trackNumber": 7,
                    "durationInMillis": 243253,
                    "releaseDate": "2013-10-04",
                    "isVocalAttenuationAllowed": false,
                    "isMasteredForItunes": false,
                    "isrc": "KRA341326363",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/38/e2/0e/38e20e47-55d9-0526-c7f0-6cff13a06769/391198.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "222627",
                        "textColor2": "2f2419",
                        "textColor4": "433f37",
                        "textColor1": "060405",
                        "bgColor": "94aeaf",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EC%98%81%EC%9B%90%ED%86%A0%EB%A1%9D-feat-john-park/1454261955?i=1454261963",
                    "playParams": {
                        "id": "1454261963",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "isAppleDigitalMaster": false,
                    "hasLyrics": true,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "영원토록 (feat. John Park)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ff/15/ec/ff15eca7-c5da-205d-579f-2dde0d7c6bb8/mzaf_13826868185869299841.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "김진표"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1712137172875,
                        "MZ_INDEXER": 1718925756350
                    }
                }
            },
            "1519403552": {
                "id": "1519403552",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": false,
                    "albumName": "The New Classik... And You Don't Stop",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝",
                        "힙합/랩"
                    ],
                    "trackNumber": 2,
                    "releaseDate": "2020-06-19",
                    "durationInMillis": 291373,
                    "isVocalAttenuationAllowed": false,
                    "isMasteredForItunes": false,
                    "isrc": "KRA382002082",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/8e/a3/49/8ea34935-6af6-9beb-49f4-e8d12c5a4cd2/cover_-.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "bbc0c8",
                        "textColor2": "d2d0cd",
                        "textColor4": "abadac",
                        "textColor1": "e5e9f0",
                        "bgColor": "132026",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%ED%9E%99%ED%95%A9%EA%B5%AC%EC%A1%B0%EB%8C%80-feat-%EC%97%90%ED%94%BD%ED%95%98%EC%9D%B4-%EA%B9%80%EC%A7%84%ED%91%9C-%EC%97%90%EB%A6%AD-%EC%A3%BC%EC%84%9D-%EC%A1%B0%ED%94%BC%EB%94%94-%EA%B9%80%EC%B0%BD%EB%A0%AC-%EB%B9%8C%EC%8A%A4%ED%83%9D%EC%8A%A4-%EC%9D%B4%EC%A4%80/1519403550?i=1519403552",
                    "playParams": {
                        "id": "1519403552",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "isAppleDigitalMaster": false,
                    "hasLyrics": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "힙합구조대 (feat. 에픽하이, 김진표, 에릭, 주석, 조피디, 김창렬, 빌스택스 & 이준)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ed/7f/59/ed7f598d-f4b2-772a-4ead-3e074a852f39/mzaf_17090977065801888850.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "이현도"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1718765890690,
                        "MZ_INDEXER": 1717938722320
                    }
                }
            },
            "1539886348": {
                "id": "1539886348",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": true,
                    "albumName": "Trace",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝",
                        "록"
                    ],
                    "trackNumber": 4,
                    "releaseDate": "2020-11-11",
                    "durationInMillis": 184038,
                    "isVocalAttenuationAllowed": true,
                    "isMasteredForItunes": false,
                    "isrc": "KRA382006339",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5d/92/93/5d92936c-e891-7e52-8c40-516211f18531/cover_-.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "2c2e2c",
                        "textColor2": "31312c",
                        "textColor4": "50514c",
                        "textColor1": "030605",
                        "bgColor": "cecfc9",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EB%8F%8C%ED%8C%94%EB%A7%A4-feat-%EA%B9%80%EC%A7%84%ED%91%9C/1539886344?i=1539886348",
                    "playParams": {
                        "id": "1539886348",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "hasLyrics": true,
                    "isAppleDigitalMaster": false,
                    "audioTraits": [
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "돌팔매 (feat. 김진표)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/4f/02/55/4f02551e-95b8-8f48-2ee1-55cf65adf533/mzaf_2358153130624589747.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "이적"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1718330768029,
                        "MZ_INDEXER": 1719973899576
                    }
                }
            },
            "1543850402": {
                "id": "1543850402",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": true,
                    "albumName": "다시 꿈꾸고 싶다",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝"
                    ],
                    "trackNumber": 5,
                    "releaseDate": "2005-04-07",
                    "durationInMillis": 289800,
                    "isVocalAttenuationAllowed": true,
                    "isMasteredForItunes": false,
                    "isrc": "KRA341504290",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/08/90/43/08904391-d938-2cbc-086b-25eb60b32775/8809784722922.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "393336",
                        "textColor2": "2e3227",
                        "textColor4": "585b52",
                        "textColor1": "080004",
                        "bgColor": "ffffff",
                        "hasP3": false
                    },
                    "composerName": "이현승",
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EC%9D%BC%ED%95%99%EB%85%84-%EC%9D%BC%EB%B0%98-feat-%EA%B9%80%EC%A7%84%ED%91%9C/1543850397?i=1543850402",
                    "playParams": {
                        "id": "1543850402",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "hasLyrics": true,
                    "isAppleDigitalMaster": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "일학년 일반 (feat. 김진표)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/6b/75/0c/6b750c17-d691-5a66-f4f2-cb3de0e66372/mzaf_3635500237469784316.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "성시경"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1713442187388,
                        "MZ_INDEXER": 1718542244597
                    }
                }
            },
            "1544931239": {
                "id": "1544931239",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": false,
                    "albumName": "이재훈 1집",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝"
                    ],
                    "trackNumber": 14,
                    "releaseDate": "2007-02-01",
                    "durationInMillis": 242613,
                    "isVocalAttenuationAllowed": false,
                    "isMasteredForItunes": false,
                    "isrc": "KRA341504587",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/68/bf/34/68bf3457-df7f-b045-1a15-e848aafd160e/8809784677239.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "cbcbcc",
                        "textColor2": "c4c4c4",
                        "textColor4": "9d9d9d",
                        "textColor1": "fefefe",
                        "bgColor": "010103",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EC%9A%B0%EB%A6%B0-%EB%8B%A4%EC%8B%9C-%EB%A7%8C%EB%82%98%EC%95%BC-%ED%95%9C%EB%8B%A4-feat-%EA%B9%80%EC%A7%84%ED%91%9C/1544931006?i=1544931239",
                    "playParams": {
                        "id": "1544931239",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "isAppleDigitalMaster": false,
                    "hasLyrics": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "우린 다시 만나야 한다 (feat. 김진표)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/13/ce/76/13ce76e3-baf1-b138-c87e-c96c13b76adc/mzaf_7310949163432513896.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "이재훈"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1705851162256,
                        "MZ_INDEXER": 1720395777512
                    }
                }
            },
            "1547835392": {
                "id": "1547835392",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": false,
                    "albumName": "이별 뒤에 해야 할 몇 가지 - Single",
                    "genreNames": [
                        "힙합/랩",
                        "음악",
                        "팝",
                        "K-Pop"
                    ],
                    "trackNumber": 1,
                    "releaseDate": "2010-12-15",
                    "durationInMillis": 249200,
                    "isVocalAttenuationAllowed": false,
                    "isMasteredForItunes": false,
                    "isrc": "USA371247977",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7f/b0/2e/7fb02e40-fbc5-8509-11f4-64f8f979febf/191953101644.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "3d3d3d",
                        "textColor2": "313131",
                        "textColor4": "535353",
                        "textColor1": "161616",
                        "bgColor": "dbdbdb",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EC%9D%B4%EB%B3%84-%EB%92%A4%EC%97%90-%ED%95%B4%EC%95%BC-%ED%95%A0-%EB%AA%87-%EA%B0%80%EC%A7%80-feat-%EB%A0%88%EC%9D%B4%EB%94%94%EC%A0%9C%EC%9D%B8/1547835391?i=1547835392",
                    "playParams": {
                        "id": "1547835392",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "hasLyrics": true,
                    "isAppleDigitalMaster": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "이별 뒤에 해야 할 몇 가지 (feat. 레이디제인)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/06/6c/9c/066c9cdd-b380-b6ff-5d25-f9b3c270d342/mzaf_7380740520883232803.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "김진표"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1718407401520,
                        "MZ_INDEXER": 1717853592368
                    }
                }
            },
            "1547875128": {
                "id": "1547875128",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": true,
                    "albumName": "Color Of City (Pink) - Single",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝"
                    ],
                    "trackNumber": 1,
                    "releaseDate": "2009-05-15",
                    "durationInMillis": 229564,
                    "isVocalAttenuationAllowed": true,
                    "isMasteredForItunes": false,
                    "isrc": "USA371247967",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/bb/b3/d0/bbb3d0d1-d741-0d56-f9e3-edbf6b4a3b32/191953104522.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "4a4446",
                        "textColor2": "1c1e1d",
                        "textColor4": "494748",
                        "textColor1": "1d191b",
                        "bgColor": "feeff6",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EC%A2%8B%EC%95%84%ED%95%B4/1547875127?i=1547875128",
                    "playParams": {
                        "id": "1547875128",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "hasLyrics": true,
                    "isAppleDigitalMaster": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "좋아해",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/98/ba/7d/98ba7ddc-19bb-0e52-b2e2-63e80acef15c/mzaf_1808890546737546251.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "요조 & 김진표"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1717470703807,
                        "MZ_INDEXER": 1717928694826
                    }
                }
            },
            "1562087018": {
                "id": "1562087018",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": true,
                    "albumName": "Carnival (이적+김동률 프로젝트 앨범)",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝"
                    ],
                    "trackNumber": 9,
                    "durationInMillis": 264647,
                    "releaseDate": "1997-05-04",
                    "isVocalAttenuationAllowed": true,
                    "isMasteredForItunes": false,
                    "isrc": "KRA340901851",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ad/f2/80/adf280de-9864-e63f-7a92-abd6588d84bb/3000.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "d1d1cd",
                        "textColor2": "fefdde",
                        "textColor4": "d0d0b6",
                        "textColor1": "fffffb",
                        "bgColor": "1a1c17",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EA%B7%B8%EB%85%80%EB%A5%BC-%EC%9E%A1%EC%95%84%EC%9A%94-feat-%EC%84%9C%EB%8F%99%EC%9A%B1-%EA%B9%80%EC%A7%84%ED%91%9C/1562086949?i=1562087018",
                    "playParams": {
                        "id": "1562087018",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "isAppleDigitalMaster": false,
                    "hasLyrics": true,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "그녀를 잡아요 (feat. 서동욱 & 김진표)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/2c/d5/ca/2cd5ca3a-6b9d-ffdf-4cc6-535981c62f36/mzaf_1835209239691935879.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "카니발"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1717509037426,
                        "MZ_INDEXER": 1718612384426
                    }
                }
            },
            "1568406485": {
                "id": "1568406485",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": false,
                    "albumName": "바보",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝"
                    ],
                    "trackNumber": 3,
                    "releaseDate": "1999-10-05",
                    "durationInMillis": 338158,
                    "isVocalAttenuationAllowed": false,
                    "isMasteredForItunes": false,
                    "isrc": "QZF452025780",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/02/a2/7d/02a27d19-6fce-c670-d917-a9e9175b9fc2/8809795743220.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "dabfab",
                        "textColor2": "f6d5a2",
                        "textColor4": "d9b898",
                        "textColor1": "f9deba",
                        "bgColor": "624271",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EB%82%B4%EC%9D%BC%EC%9D%B4-%EC%B0%BE%EC%95%84%EC%98%A4%EB%A9%B4-with-%EA%B9%80%EC%A2%85%EC%84%9C-%EC%9C%A0%EB%A6%AC%EC%83%81%EC%9E%90-%EB%B0%95%EC%A0%95%ED%98%84-%EA%B9%80%EC%A7%84%ED%91%9C/1568406469?i=1568406485",
                    "playParams": {
                        "id": "1568406485",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "hasLyrics": true,
                    "isAppleDigitalMaster": false,
                    "audioTraits": [
                        "lossy-stereo"
                    ],
                    "name": "내일이 찾아오면 (with 김종서, 유리상자, 박정현 & 김진표)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/86/2d/f9/862df926-6e12-6203-1e0f-f2c65a71ba66/mzaf_14976634974464991737.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "김장훈"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1708053624897,
                        "MZ_INDEXER": 1720099088734
                    }
                }
            },
            "1651585536": {
                "id": "1651585536",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": true,
                    "albumName": "블루브랜드 2집 Trauma, Pt. 2",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝"
                    ],
                    "trackNumber": 1,
                    "releaseDate": "2010-05-11",
                    "durationInMillis": 261382,
                    "isVocalAttenuationAllowed": true,
                    "isMasteredForItunes": false,
                    "isrc": "KRA491000060",
                    "artwork": {
                        "width": 1400,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/45/1a/93/451a9354-79d2-ccac-605c-9bac29f22ecd/8809231388848_Cover.jpg/{w}x{h}bb.jpg",
                        "height": 1400,
                        "textColor3": "002b3e",
                        "textColor2": "001b2a",
                        "textColor4": "003853",
                        "textColor1": "000a11",
                        "bgColor": "00adf5",
                        "hasP3": false
                    },
                    "composerName": "Kim Jin Pyo, 김건우 & MayBee",
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EC%95%84%EB%AC%B4-%EB%A7%90%EB%8F%84-%ED%95%98%EC%A7%80-%EB%A7%88-feat-%EC%BC%80%EC%9D%B4%EC%9C%8C/1651585534?i=1651585536",
                    "playParams": {
                        "id": "1651585536",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "hasLyrics": true,
                    "isAppleDigitalMaster": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "아무 말도 하지 마 (feat. 케이윌)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/20/31/e7/2031e79a-f532-95eb-246a-9c7ba62938c7/mzaf_8821204391616805616.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "김진표"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1720235388667,
                        "MZ_INDEXER": 1720422751513
                    }
                }
            },
            "1698517835": {
                "id": "1698517835",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": true,
                    "albumName": "REMAKE & MIX 18번",
                    "genreNames": [
                        "K-Pop",
                        "음악",
                        "팝"
                    ],
                    "trackNumber": 14,
                    "durationInMillis": 197627,
                    "releaseDate": "2005-07-22",
                    "isVocalAttenuationAllowed": true,
                    "isMasteredForItunes": false,
                    "isrc": "KRA401500314",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2f/d8/87/2fd88759-6773-df4c-5a54-92d2cca8eb2a/8809856760418.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "323132",
                        "textColor2": "2d2628",
                        "textColor4": "564f52",
                        "textColor1": "010101",
                        "bgColor": "f8f3f9",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/life-feat-%EC%A1%B0pd-%EC%9D%B4%ED%95%98%EB%8A%98-jp-masta-wu/1698517819?i=1698517835",
                    "playParams": {
                        "id": "1698517835",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "hasLyrics": true,
                    "isAppleDigitalMaster": false,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "Life (feat. 조PD, 이하늘, JP, MASTA WU)",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/36/c3/9d/36c39d5b-4f83-ada9-d6be-665519cc9d00/mzaf_6917439728338316962.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "싸이"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1713431511946,
                        "MZ_INDEXER": 1718998163969
                    }
                }
            },
            "1698593330": {
                "id": "1698593330",
                "type": "songs",
                "attributes": {
                    "hasTimeSyncedLyrics": false,
                    "albumName": "열외",
                    "genreNames": [
                        "힙합/랩",
                        "음악",
                        "팝",
                        "K-Pop"
                    ],
                    "trackNumber": 3,
                    "releaseDate": "1997-06-01",
                    "durationInMillis": 230478,
                    "isVocalAttenuationAllowed": false,
                    "isMasteredForItunes": false,
                    "isrc": "KRA341211841",
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/80/f6/80/80f680b7-2777-ce36-b569-587a34fff837/888618095010.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "977aac",
                        "textColor2": "a69bde",
                        "textColor4": "867cb4",
                        "textColor1": "bb99d4",
                        "bgColor": "06000c",
                        "hasP3": false
                    },
                    "audioLocale": "ko",
                    "url": "https://music.apple.com/kr/album/%EC%82%AC%EB%9E%91%ED%95%B4-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%83%9D%EA%B0%81%ED%95%B4/1698593327?i=1698593330",
                    "playParams": {
                        "id": "1698593330",
                        "kind": "song"
                    },
                    "discNumber": 1,
                    "hasCredits": false,
                    "isAppleDigitalMaster": false,
                    "hasLyrics": true,
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "name": "사랑해 그리고 생각해",
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/3c/05/96/3c0596a8-a699-47c3-3608-01802118d3ee/mzaf_12713499597331169796.plus.aac.p.m4a"
                        }
                    ],
                    "artistName": "김진표"
                },
                "meta": {
                    "contentVersion": {
                        "RTCI": 1719353906040,
                        "MZ_INDEXER": 1718570472161
                    }
                }
            }
        }
    }
}