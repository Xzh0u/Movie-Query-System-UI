import axios from "axios";
import { MovieType } from "context/MovieProvider";
// import { MovieType } from "context/MovieProvider";

const serverUrl = "http://192.168.50.60:5000";

export type SortType = "view" | "date";

export type GetMoviesParams = {
  score?: number;
  scoreSmallerThan?: number;
  scoreLargerThan?: number;
  adaptation?: 1 | 0;
  country?: string;
  type?: string;
  director?: string;
  major?: string;
  language?: string;

  title?: string;
  sort?: SortType;

  limit: number;
  offset: number;
};

const mock: MovieType[] = [
  {
    adaptation: "False",
    country: ["美国"],
    date: "1931-01-30",
    director: ["查理·卓别林"],
    image_url:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2170238828.jpg",
    introduction: [
      "\n                                　　他是一个流浪汉（查理·卓别林 Charles Chaplin 饰），身无分文，遇上了双目失明的卖花女，却不忍袖手旁观。他想尽办法去凑够费用，供卖花女治病。一天，他搭救了一个富翁，富翁当晚和他称兄道弟，第二天却翻脸不认人。本来打算向他求助的主意行不通了。流浪汉去参加拳击比 赛，以图获得奖金，却输得一败涂地。谁知这时重遇富翁，二人不计前嫌，富翁答应出钱资助卖花女。在交给流浪汉1000元后，富翁遭到偷袭，身上剩下的钱被强盗抢走。流浪汉奋不顾身去追赶，却因为误会被警察押回警局坐牢。另一方面，卖花女凭借流浪汉的资助重获光明，开了一家体面的花店。\n                        ",
    ],
    language: ["英语"],
    link: {
      "1905电影网":
        "https://www.douban.com/link2/?url=http%3A%2F%2Fvip.1905.com%2Fplay%2F1331192.shtml%3F__hz%3D6e0721b2c6977135%26api_source%3Ddouban_vodadd&subtype=13&type=online-video",
      优酷视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fv.youku.com%2Fv_show%2Fid_XMzEwMzQyNjYw.html%3Ftpa%3DdW5pb25faWQ9MzAwMDA4XzEwMDAwMl8wMl8wMQ%26refer%3Desfhz_operation.xuka.xj_00003036_000000_FNZfau_19010900&subtype=3&type=online-video",
      哔哩哔哩:
        "https://www.douban.com/link2/?url=https%3A%2F%2Fwww.bilibili.com%2Fbangumi%2Fplay%2Fss28171%3Fbsource%3Ddouban&subtype=8&type=online-video&link2key=483c91a7f6",
      爱奇艺视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fwww.iqiyi.com%2Fv_19rrj5uk9k.html%3Fvfm%3Dm_331_dbdy%26fv%3D4904d94982104144a1548dd9040df241&subtype=9&type=online-video",
      腾讯视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fv.qq.com%2Fx%2Fcover%2Fb48c3tz58gusw8r.html%3Fptag%3Ddouban.movie&subtype=1&type=online-video",
    },
    majors: [
      "查理·卓别林",
      "弗吉尼亚·切瑞尔",
      "佛罗伦斯·李",
      "亨利·伯格曼",
      "珍·哈露",
    ],
    rank: 206,
    runtime: "87 分钟",
    score: 9.3,
    title: "城市之光",
    type: ["剧情", "喜剧", "爱情"],
    view: 0,
  },
  {
    adaptation: "False",
    country: ["美国"],
    date: "1936-02-25",
    director: ["查理·卓别林"],
    image_url:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2263408369.jpg",
    introduction: [
      "\n                                　　二十年代的美国处于经济萧条时期，失业率居高不下，工人受尽压榨，成为了大机器生产中的一颗螺丝钉。查理（查理·卓别林 Charles Chaplin 饰）就是一个底层市民，他在一个机器隆隆的厂房里日以继夜地工作，以赚取微薄的收入。重复繁重的工作压得他喘不过气，他把人们的鼻子当成螺丝钉来拧，卷入流水线机器的皮带里，令人苦笑不得。\n                                    ",
      "\n                                　　查理尽管贫穷，但却很善良。他在路上搭救了流浪女，和她一起生活，家里破烂却又温馨。每次身无分文的查理为了找到吃的，都会故意犯事，以便进入监牢。光景一时间有了好转，流浪女成了歌舞红星，然而好景太短暂了。\n                        ",
    ],
    language: ["英语"],
    link: {
      "1905电影网":
        "https://www.douban.com/link2/?url=https%3A%2F%2Fwww.1905.com%2Fvod%2Fplay%2F1391234.shtml%3F__hz%3D6e0721b2c6977135%26api_source%3Ddouban_vodadd&subtype=13&type=online-video&link2key=483c91a7f6",
      咪咕视频:
        "https://www.douban.com/link2/?url=https%3A%2F%2Fm.miguvideo.com%2Fmgs%2Fmsite%2Fprd%2Fdetail.html%3Fcid%3D681035911%26pwId%3Dd01197d3076b4164af82983c408bb996&subtype=15&type=online-video&link2key=483c91a7f6",
      哔哩哔哩:
        "https://www.douban.com/link2/?url=https%3A%2F%2Fwww.bilibili.com%2Fbangumi%2Fplay%2Fss26258%3Fbsource%3Ddouban&subtype=8&type=online-video&link2key=483c91a7f6",
      爱奇艺视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fwww.iqiyi.com%2Fv_19rrj6sjrw.html%3Fvfm%3Dm_331_dbdy%26fv%3D4904d94982104144a1548dd9040df241&subtype=9&type=online-video",
      腾讯视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fv.qq.com%2Fx%2Fcover%2F9w35g1rr7w3smmr.html%3Fptag%3Ddouban.movie&subtype=1&type=online-video",
    },
    majors: [
      "查理·卓别林",
      "宝莲·高黛",
      "亨利·伯格曼",
      "蒂尼·桑福德",
      "切斯特·康克林",
      "汉克·曼",
      "斯坦利·布莱斯通",
      "阿尔·欧内斯特·加西亚",
      "理查德·亚历山大",
      "塞西尔·雷诺兹",
      "米拉·麦金尼",
      "默多克·麦夸里",
      "威尔弗雷德·卢卡斯",
      "爱德华·勒桑",
      "弗雷德·马拉泰斯塔",
      "萨米·斯坦",
      "特德·奥利弗",
      "诺曼·安斯利",
      "博比·巴伯",
      "海尼·康克林",
      "格洛丽亚·德黑文",
      "帕特·弗莱厄蒂",
      "弗兰克·哈格尼",
      "帕特·哈蒙",
      "劳埃德·英格拉哈姆",
      "沃尔特·詹姆斯",
      "爱德华·金博尔",
      "杰克·洛",
      "巴迪·梅辛杰",
      "布鲁斯·米切尔",
      "弗兰克·莫兰",
      "詹姆斯·C·莫顿",
      "路易·纳托",
      "J·C·纽金特",
      "拉斯·鲍威尔",
      "约翰兰德",
      "哈里·威尔逊",
    ],
    rank: 87,
    runtime: "87分钟",
    score: 9.3,
    title: "摩登时代",
    type: ["剧情", "喜剧", "爱情"],
    view: 0,
  },
  {
    adaptation: "False",
    country: ["美国"],
    date: "1939-12-15",
    director: ["维克多·弗莱明", "乔治·库克", "山姆·伍德"],
    image_url:
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1963126880.jpg",
    introduction: [
      "\n                                　　美国南北战争前夕，南方农场塔拉庄园的千金斯嘉丽（费雯·丽 Vivien Leigh 饰）爱上了另一个农场主的儿子艾希礼（莱斯利·霍华德 Leslie Howard 饰），遭到了拒绝，为了报复，她嫁给了自己不爱的男人，艾希礼妻子梅兰妮（奥利维娅·德哈维兰 Olivia de Havilland 饰）的弟弟查尔斯。\n                                    ",
      "\n                                　　战争期间，斯嘉丽成为寡妇，失去母亲，挑起生活的重担， 不再是当初的千金小姐；战争结束后，她又两度为人妻，嫁给了爱她多年的投机商人瑞德（克拉克·盖博 Clark Gable 饰）。\n                                    ",
      "\n                                　　然而，纵使经历了生活的艰苦，斯嘉丽对艾希礼的感情仍然没有改变。艾希礼妻子梅兰妮的去世，给了斯嘉丽一个机会，一边是深爱自己的丈夫瑞德，一边是心心念念多年的艾希礼？斯嘉丽会给自己怎样一个不一样的明天？\n                        ",
    ],
    language: ["英语"],
    link: {
      "1905电影网":
        "https://www.douban.com/link2/?url=http%3A%2F%2Fvip.1905.com%2Fplay%2F1329696.shtml%3F__hz%3D6e0721b2c6977135%26api_source%3Ddouban_vodadd&subtype=13&type=online-video",
      优酷视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fv.youku.com%2Fv_show%2Fid_XNzc0MjY3MzE2.html%3Ftpa%3DdW5pb25faWQ9MzAwMDA4XzEwMDAwMl8wMl8wMQ%26refer%3Desfhz_operation.xuka.xj_00003036_000000_FNZfau_19010900&subtype=3&type=online-video",
      哔哩哔哩:
        "https://www.douban.com/link2/?url=https%3A%2F%2Fwww.bilibili.com%2Fbangumi%2Fplay%2Fss31886%3Fbsource%3Ddouban&subtype=8&type=online-video&link2key=483c91a7f6",
      爱奇艺视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fwww.iqiyi.com%2Fv_19rrjba8ec.html%3Fvfm%3Dm_331_dbdy%26fv%3D4904d94982104144a1548dd9040df241&subtype=9&type=online-video",
      腾讯视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fv.qq.com%2Fx%2Fcover%2Fgzdq4acw02m3ajs.html%3Fptag%3Ddouban.movie&subtype=1&type=online-video",
    },
    majors: [
      "费雯·丽",
      "克拉克·盖博",
      "奥利维娅·德哈维兰",
      "托马斯·米切尔",
      "芭芭拉·欧内尔",
      "伊夫林·凯耶斯",
      "安·卢瑟福德",
      "乔治·里弗斯",
      "弗莱德·克莱恩",
      "海蒂·麦克丹尼尔",
      "奥斯卡·波尔克",
      "巴特弗莱·麦昆",
      "维克托·乔里",
      "埃弗雷特·布朗",
      "霍华德·C·希克曼",
      "艾丽西亚·瑞特",
      "莱斯利·霍华德",
      "兰德·布鲁克斯",
      "卡洛尔·奈",
      "劳拉·霍普·克鲁斯",
      "埃迪·安德森",
      "哈里·达文波特",
      "利昂娜·罗伯特",
      "简·达威尔",
      "欧娜·满森",
      "保罗·赫斯特",
      "伊莎贝尔·朱尔",
      "卡米·金·肯伦",
      "艾瑞克·林登",
      "J·M·克里根",
      "沃德·邦德",
      "莉莲·肯布尔-库珀",
    ],
    rank: 31,
    runtime: "238分钟",
    score: 9.3,
    title: "乱世佳人",
    type: ["剧情", "爱情", "历史", "战争"],
    view: 0,
  },
  {
    adaptation: "False",
    country: ["美国"],
    date: "1940-05-17",
    director: ["茂文·勒鲁瓦"],
    image_url:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2351134499.jpg",
    introduction: [
      "\n                                　　第一次世界大战期间，回国度假的陆军中尉罗伊（罗伯特·泰勒）在滑铁卢桥上邂逅了舞蹈演员玛拉（费雯·丽），两人彼此倾心，爱情迅速升温。就在两人决定结婚之时，罗伊应招回营地，两人被迫分离。由于错过剧团演出，玛拉被开除，只能和好友相依为命。\n                                    ",
      "\n                                　　不久玛拉得知罗伊阵亡的消息，几欲崩溃，备受打击。失去爱情的玛拉感到一切都失去了意义，为了生存，她和好友不得不沦为妓女。然而命运弄人，就在此时玛拉竟然再次遇到了罗伊。虽然为罗伊的生还兴奋不已，玛拉却因自己的失身陷入痛苦之中。\n                                    ",
      "\n                                　　感到一切难以挽回的玛拉潸然离开，独自来到两人最初相遇的地点——滑铁卢桥上…\n                        ",
    ],
    language: ["英语", "法语"],
    link: {
      "1905电影网":
        "https://www.douban.com/link2/?url=http%3A%2F%2Fvip.1905.com%2Fplay%2F1344262.shtml%3F__hz%3D6e0721b2c6977135%26api_source%3Ddouban_vodadd&subtype=13&type=online-video",
      哔哩哔哩:
        "https://www.douban.com/link2/?url=https%3A%2F%2Fwww.bilibili.com%2Fbangumi%2Fplay%2Fss32837%3Fbsource%3Ddouban&subtype=8&type=online-video&link2key=483c91a7f6",
      爱奇艺视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fwww.iqiyi.com%2Fv_19rrll6i1w.html%3Fvfm%3Dm_331_dbdy%26fv%3D4904d94982104144a1548dd9040df241&subtype=9&type=online-video",
      腾讯视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fv.qq.com%2Fx%2Fcover%2Fdatmg11j1flxgiw.html%3Fptag%3Ddouban.movie&subtype=1&type=online-video",
    },
    majors: [
      "费雯·丽",
      "罗伯特·泰勒",
      "露塞尔·沃特森",
      "弗吉尼亚·菲尔德",
      "玛丽亚·彭斯卡娅",
      "C.奥布雷·史密斯",
      "Janet Shaw",
      "Janet Waldo",
      "Steffi Duna",
      "Virginia Carroll",
      "Eleanor Stewart",
      "Lowden Adams",
      "Harry Allen",
      "Jimmy Aubrey",
      "Phyllis Barry",
      "Colin Campbell",
      "丽塔·卡莱尔",
      "里奥.G.卡罗尔",
      "戴维·卡文迪什",
      "大卫·克莱德",
      "汤姆·康威",
      "Frank Dawson",
      "Connie Emerald",
      "Gilbert Emery",
      "赫伯特·埃文斯",
      "迪克·戈登",
      "Denis Green",
      "艾塞尔·格里菲斯",
      "Bobby Hale",
      "Winifred Harris",
      "哈利韦尔·霍布斯",
      "Harold Howard",
      "Charles Irwin",
      "George Kirby",
      "Walter Lawrence",
      "威尔弗雷德·卢卡斯",
      "Dan Maxwell",
      "James May",
      "Florine McKinney",
      "Charles McNaughton",
      "Frank Mitchell",
      "埃德蒙·莫蒂默",
      "伦纳德米迪",
      "坦普·皮戈特",
      "John Power",
      "Clara Reid",
      "Paul Scardon",
      "约翰·格雷厄姆·斯佩西",
      "Wyndham Standing",
      "哈里·斯塔布斯",
      "Cyril Thornton",
      "戴维·瑟斯比",
      "诺玛·威登",
      "帕特·威尔士",
      "玛莎·温特沃思",
      "Frank Whitbeck",
      "Eric Wilton",
      "罗伯特·温克勒",
      "道格拉斯·伍德",
    ],
    rank: 208,
    runtime: "108分钟",
    score: 8.8,
    title: "魂断蓝桥",
    type: ["剧情", "爱情", "战争"],
    view: 0,
  },
  {
    adaptation: "False",
    country: ["日本"],
    date: "1950-08-26",
    director: ["黑泽明"],
    image_url:
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1598883511.jpg",
    introduction: [
      "\n                                　　罗生门，日本京都的正南门。云游和尚、砍柴人和乞丐在城门底下避雨，三人闲聊，话题开始，故事的序幕拉开：一个武士和他妻子路过荒山，遭遇了不测。妻子被侮辱，而武士惨遭杀害。惨案如何酿成？凶手、妻子、借武士亡魂来做证的女巫，都各有说法。\n                                    ",
      "\n                                　　真相只得一个，但是各人提供证词的目的却各有不同。为了美化自己的道德，减轻自己的罪恶，掩饰自己的过失，人人都开始叙述一个美化自己的故事版本。荒山上的惨案，成了一团拨不开看不清的迷雾。\n                                    ",
      "\n                                　　谈论完毕，雨过天晴。砍柴人在罗生门旁发现一个哭泣的弃婴。他决定收养下来，抱着婴孩往夕阳深处走去。\n                        ",
    ],
    language: ["日语"],
    link: {
      "1905电影网":
        "https://www.douban.com/link2/?url=http%3A%2F%2Fvip.1905.com%2Fplay%2F1329074.shtml%3F__hz%3D6e0721b2c6977135%26api_source%3Ddouban_vodadd&subtype=13&type=online-video",
      哔哩哔哩:
        "https://www.douban.com/link2/?url=https%3A%2F%2Fwww.bilibili.com%2Fbangumi%2Fplay%2Fss28491%3Fbsource%3Ddouban&subtype=8&type=online-video&link2key=483c91a7f6",
      腾讯视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fv.qq.com%2Fx%2Fcover%2Fghavn75ulwpjsqr.html%3Fptag%3Ddouban.movie&subtype=1&type=online-video",
    },
    majors: [
      "三船敏郎",
      "京町子",
      "森雅之",
      "志村乔",
      "千秋实",
      "上田吉二郎",
      "本间文子",
      "加东大介",
    ],
    rank: 201,
    runtime: "88分钟",
    score: 8.8,
    title: "罗生门",
    type: ["剧情", "悬疑", "犯罪"],
    view: 0,
  },
  {
    adaptation: "False",
    country: ["美国"],
    date: "1952-04-11",
    director: ["斯坦利·多南", "吉恩·凯利"],
    image_url:
      "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1612355875.jpg",
    introduction: [
      "\n                                　　1927年，由唐·洛克伍德（吉恩·凯利 饰）和丽娜·雷蒙德（简·哈根 饰）主演的《皇家流氓》在好莱坞首映。由于丽娜刺耳的嗓音无法匹配其夺目的外貌，为了维护明星形象，宣传部只得安排唐一人讲话。首映后，由于钢琴师科斯莫·布朗（唐纳德·奥康纳 饰）的汽车爆胎，为了躲避疯狂的影迷，唐意外结识了能歌善舞的凯西·塞尔登（黛比·雷诺斯 饰），并被其深深吸引。数周后，首部有声电影《爵士歌手》爆红，唐与丽娜的新片《决斗骑士》不得不临时改变拍摄方式，而凯西也成为歌舞片演员。因预映口碑极差，科斯莫提议将《决斗骑士》改为歌舞片，由凯西为丽娜配音，凯西积极附议。与凯西吻别后，唐心花怒放，在雨中载歌载舞。科斯莫的计划能否奏效？幕后的凯西能否走到台前接受观众的掌声？\n                        ",
    ],
    language: ["英语"],
    link: {
      哔哩哔哩:
        "https://www.douban.com/link2/?url=https%3A%2F%2Fwww.bilibili.com%2Fbangumi%2Fplay%2Fss33933%3Fbsource%3Ddouban&subtype=8&type=online-video&link2key=483c91a7f6",
    },
    majors: [
      "吉恩·凯利",
      "唐纳德·奥康纳",
      "黛比·雷诺斯",
      "简·哈根",
      "米勒德·米切尔",
      "赛德·查里斯",
      "达格拉斯·福雷",
      "丽塔·莫雷诺",
      "道恩·艾达丝",
      "John Albright",
      "Betty Allen",
      "Bette Arlen",
      "David Bair",
      "玛格丽特·伯特",
      "Madge Blake",
      "Gail Bonney",
      "Chet Brandenburg",
      "梅·克拉克",
      "Harry Cody",
      "Chick Collins",
      "Pat Conway",
      "Jeanne Coyne",
      "Fred Datig Jr.",
      "Kay Deslys",
      "John Dodsworth",
      "金·多诺万",
      "Phil Dunham",
      "海伦·艾比罗克",
      "Richard Emory",
      "Tommy Farrell",
      "Ernie Flatt",
      "贝丝·弗劳尔斯",
      "罗伯特·福捷",
      "Dan Foster",
      "Robert Foulk",
      "Eric Freeman",
      "凯瑟琳·弗里曼",
      "兰斯·富勒",
      "杰克·乔治",
      "John George",
      "Inez Gorman",
      "A. Cameron Grant",
      "Beatrice Gray",
      "William Hamel",
      "山姆·哈里斯",
      "Timmy Hawkins",
      "Jean Heremans",
      "斯图尔特·霍姆斯",
      "肯纳G.肯普",
      "迈克·拉里",
      "乔伊·兰辛",
      "William F. Leicester",
      "Sylvia Lewis",
    ],
    rank: 198,
    runtime: "103分钟",
    score: 9,
    title: "雨中曲",
    type: ["喜剧", "爱情", "歌舞"],
    view: 0,
  },
  {
    adaptation: "False",
    country: ["美国"],
    date: "1953-08-20",
    director: ["威廉·惠勒"],
    image_url:
      "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2189265085.jpg",
    introduction: [
      "\n                                　　欧洲某国的安妮公主（奥黛丽·赫本 Audrey Hepburn 饰）到访罗马，国务烦身，但她又厌倦繁文缛节。一天晚上，身心俱疲的她偷偷来到民间欣赏夜景，巧遇报社记者乔（格里高利·派克 Gregory Peck 饰）。二人把手同游，相当快乐。公主更是到乔的家中作客并在那过夜。\n                                    ",
      "\n                                　　不料乔无意中发现了公主的真实身份，他决定炮制一个独家新闻，于是乔和朋友、摄影师欧文（埃迪·艾伯特 Eddie Albert 饰）一起带公主同游罗马，并且偷拍了公主的很多生活照。然而，在接下来与公主的相处中，乔不知不觉恋上了公主。为了保护公主的形象，乔只能忍痛抛弃功成名就的良机，将照片送予了公主。\n                                    ",
      "\n                                　　安妮公主在经历了罗马一日假期后，反而体验了自己对国家的责任，毅然返回了大使馆，为了本身的责任而果断抛弃了爱情。\n                        ",
    ],
    language: ["英语", "意大利语", "德语"],
    link: {
      "1905电影网":
        "https://www.douban.com/link2/?url=http%3A%2F%2Fvip.1905.com%2Fplay%2F1478563.shtml%3F__hz%3D6e0721b2c6977135%26api_source%3Ddouban_vodadd&subtype=13&type=online-video",
      优酷视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fv.youku.com%2Fv_show%2Fid_XNDMxNzY0ODE2.html%3Ftpa%3DdW5pb25faWQ9MzAwMDA4XzEwMDAwMl8wMl8wMQ%26refer%3Desfhz_operation.xuka.xj_00003036_000000_FNZfau_19010900&subtype=3&type=online-video",
      哔哩哔哩:
        "https://www.douban.com/link2/?url=https%3A%2F%2Fwww.bilibili.com%2Fbangumi%2Fplay%2Fss27504%3Fbsource%3Ddouban&subtype=8&type=online-video&link2key=483c91a7f6",
      爱奇艺视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fwww.iqiyi.com%2Fv_19rrk3rbyg.html%3Fvfm%3Dm_331_dbdy%26fv%3D4904d94982104144a1548dd9040df241&subtype=9&type=online-video",
      腾讯视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fv.qq.com%2Fx%2Fcover%2F4nxabytt44ngpry.html%3Fptag%3Ddouban.movie&subtype=1&type=online-video",
    },
    majors: [
      "奥黛丽·赫本",
      "格利高里·派克",
      "埃迪·艾伯特",
      "哈特利·鲍尔",
      "哈考特·威廉姆斯",
      "玛格丽特·罗林斯",
      "托里奥·卡米纳提",
      "保罗·卡利尼",
      "克劳迪奥·埃尔梅利",
      "保拉·布鲁布尼",
      "里佐·弗雷多里佐",
    ],
    rank: 44,
    runtime: "118分钟",
    score: 9,
    title: "罗马假日",
    type: ["剧情", "喜剧", "爱情"],
    view: 0,
  },
  {
    adaptation: "False",
    country: ["日本"],
    date: "1953-11-03",
    director: ["小津安二郎"],
    image_url:
      "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1925331564.jpg",
    introduction: [
      "\n                                　　儿女们都大了，各自成家。父亲周吉（笠智众饰）和老伴（东山千荣子饰）要去东京看望他们，老两口带着愉快心情上路。可另一边，还没等他们到大儿子家，孙子就因为爷爷奶奶到来腾地方哭闹不停。老人开始觉得尴尬，大儿子幸一（山村聪饰）在东京当医生，二女儿繁（杉村春子饰）在东京开美容店，二儿媳纪子（原节子饰），小女儿京子（香川京子饰）外，大阪还有三子敬三。\n                                    ",
      "\n                                　　东京让老人陌生，在儿女家也好不到哪去。大儿子工作繁忙，没时间带他们出去玩。搬到女儿家，依旧每日困守且有矛盾。老两口渐渐也明白儿女们的处境，他们在东京的老友也过得不好。只有守寡的儿媳纪子对老人很是孝顺。之后老人踏上回家的路，前后不过十天……\n                        ",
    ],
    language: ["日语"],
    link: {
      优酷视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fv.youku.com%2Fv_show%2Fid_XMzQ3NzAxMTcy.html%3Ftpa%3DdW5pb25faWQ9MTAzNTY1XzEwMDAwMV8wMV8wMQ&subtype=3&type=online-video",
      哔哩哔哩:
        "https://www.douban.com/link2/?url=https%3A%2F%2Fwww.bilibili.com%2Fbangumi%2Fplay%2Fss28513%3Fbsource%3Ddouban&subtype=8&type=online-video&link2key=483c91a7f6",
    },
    majors: [
      "笠智众",
      "原节子",
      "杉村春子",
      "东山千荣子",
      "山村聪",
      "香川京子",
    ],
    rank: 236,
    runtime: "136 分钟",
    score: 9.2,
    title: "东京物语",
    type: ["剧情", "家庭"],
    view: 0,
  },
  {
    adaptation: "False",
    country: ["日本"],
    date: "1954-04-26",
    director: ["黑泽明"],
    image_url:
      "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2215886505.jpg",
    introduction: [
      "\n                                　　日本战国时代，一小山村面临着山贼的威胁，为了保护秋天的收成，村中长老决定让去请武士来保护村子安全，但只能拿出的报酬是一天三顿的白米饭。在城里，他们遭到了武士白眼甚至被打。直到勘兵卫（志村乔饰）的出现，他现今已沦为浪人，几经考虑最后答应了。他对农民说至少需要七名武士，于是久藏（宫口精二饰）、胜四郎（木村功饰）、五郎（稻叶义男饰）、七郎（加东大介饰）、平八（千秋实饰）和菊千代（三船敏郎饰）等六人也加入了队伍，七个人肩负保卫村子的任务。\n                                    ",
      "\n                                　　整个防御准备的过程中，武士与农民间发生许多摩擦也闹出不少笑话。而在一次偷袭行动中，有武士为救农民被火枪打死，很快山贼的反扑随之而来，一场恶战即将开始。\n                        ",
    ],
    language: ["日语"],
    link: {
      "1905电影网":
        "https://www.douban.com/link2/?url=https%3A%2F%2Fwww.1905.com%2Fvod%2Fplay%2F1391172.shtml%3F__hz%3D6e0721b2c6977135%26api_source%3Ddouban_vodadd&subtype=13&type=online-video&link2key=483c91a7f6",
      优酷视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fv.youku.com%2Fv_show%2Fid_XMzQ3NzA5OTA0.html%3Ftpa%3DdW5pb25faWQ9MTAzNTY1XzEwMDAwMV8wMV8wMQ&subtype=3&type=online-video",
      咪咕视频:
        "https://www.douban.com/link2/?url=https%3A%2F%2Fm.miguvideo.com%2Fmgs%2Fmsite%2Fprd%2Fdetail.html%3Fcid%3D677511685%26pwId%3Dd01197d3076b4164af82983c408bb996&subtype=15&type=online-video&link2key=483c91a7f6",
      哔哩哔哩:
        "https://www.douban.com/link2/?url=https%3A%2F%2Fwww.bilibili.com%2Fbangumi%2Fplay%2Fss28594%3Fbsource%3Ddouban&subtype=8&type=online-video&link2key=483c91a7f6",
      爱奇艺视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fwww.iqiyi.com%2Fv_19rrj5yx0s.html%3Fvfm%3Dm_331_dbdy%26fv%3D4904d94982104144a1548dd9040df241&subtype=9&type=online-video",
      腾讯视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fv.qq.com%2Fx%2Fcover%2F3pivbj7bkp6zcr6.html%3Fptag%3Ddouban.movie&subtype=1&type=online-video",
    },
    majors: [
      "三船敏郎",
      "志村乔",
      "津岛惠子",
      "岛崎雪子",
      "藤原釜足",
      "加东大介",
      "木村功",
      "千秋实",
      "宫口精二",
      "小杉义男",
      "左卜全",
      "稻叶义男",
      "土屋嘉男",
      "高堂国典",
      "东野英治郎",
      "上田吉二郎",
      "多多良纯",
      "渡边笃",
      "小川虎之助",
      "山形勋",
      "上山草人",
      "清水元",
      "高木新平",
      "大友伸",
      "高原骏雄",
      "稻垣三郎",
      "堺左千夫",
      "千石规子",
      "本间文子",
      "大久保正信",
      "伊藤实",
      "大村千吉",
      "广濑正一",
      "宇野晃司",
      "谷晃",
      "中岛春雄",
      "清水美恵",
      "熊谷卓三",
      "夏木顺平",
      "岩本弘司",
      "堤康久",
      "马野都留子",
      "森今日子",
      "加藤武",
      "仲代达矢",
      "宇津井健",
      "山本廉",
    ],
    rank: 151,
    runtime: "207分钟",
    score: 9.3,
    title: "七武士",
    type: ["剧情", "动作", "冒险"],
    view: 0,
  },
  {
    adaptation: "False",
    country: ["美国"],
    date: "1957-04-13",
    director: ["西德尼·吕美特"],
    image_url:
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173577632.jpg",
    introduction: [
      "\n                                　　一个在贫民窟长大的18岁少年因为涉嫌杀害自己的父亲被告上法庭，证人言之凿凿，各方面的证据都对他极为不利。十二个不同职业的人组成了这个案件的陪审团，他们要在休息室达成一致的意见，裁定少年是否有罪，如果罪名成立，少年将会被判处死刑。\n                                    ",
      "\n                                　　十二个陪审团成员各有不同，除了8号陪审员（H enry Fonda 饰）之外，其他人对这个犯罪事实如此清晰的案子不屑一顾，还没有开始讨论就认定了少年有罪。8号陪审员提出了自己的“合理疑点”，耐心地说服其他的陪审员，在这个过程中，他们每个人不同的人生观也在冲突和较量……\n                        ",
    ],
    language: ["英语"],
    link: {
      优酷视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fv.youku.com%2Fv_show%2Fid_XMzgyMzc3Mjg0.html%3Ftpa%3DdW5pb25faWQ9MzAwMDA4XzEwMDAwMl8wMl8wMQ%26refer%3Desfhz_operation.xuka.xj_00003036_000000_FNZfau_19010900&subtype=3&type=online-video",
      哔哩哔哩:
        "https://www.douban.com/link2/?url=https%3A%2F%2Fwww.bilibili.com%2Fbangumi%2Fplay%2Fss34055%3Fbsource%3Ddouban&subtype=8&type=online-video&link2key=483c91a7f6",
      爱奇艺视频:
        "https://www.douban.com/link2/?url=http%3A%2F%2Fwww.iqiyi.com%2Fv_19rr7rgwgs.html%3Fvfm%3Dm_331_dbdy%26fv%3D4904d94982104144a1548dd9040df241&subtype=9&type=online-video",
      西瓜视频:
        "https://www.douban.com/link2/?url=https%3A%2F%2Fwww.ixigua.com%2Fcinema%2Falbum%2F7OK9bBRU6bl%3Futm_source%3Ddouban&subtype=17&type=online-video&link2key=483c91a7f6",
    },
    majors: [
      "亨利·方达",
      "马丁·鲍尔萨姆",
      "约翰·菲德勒",
      "李·科布",
      "E.G.马绍尔",
      "杰克·克卢格曼 ",
      "爱德华·宾斯",
      "杰克·瓦尔登",
      "约瑟夫·史威尼",
      "埃德·贝格利",
      "乔治·沃斯科维奇",
      "罗伯特·韦伯",
    ],
    rank: 37,
    runtime: "96 分钟",
    score: 9.4,
    title: "十二怒汉",
    type: ["剧情"],
    view: 0,
  },
];

export async function getMovies(_: GetMoviesParams) {
  try {
    // FIXME: ip
    // const resp = await axios.get<{ movies: MovieType[]; count: number }>(
    //   `${serverUrl}/movies`,
    //   {
    //     params,
    //   }
    // );
    // return resp.data;

    return { movies: mock, count: 10 };
  } catch (e) {
    console.error(e);
    return { movies: [], count: 0 };
  }
}

export async function getTypeList(type: keyof GetMoviesParams) {
  try {
    const resp = await axios.get<string[]>(`${serverUrl}/movies/type/${type}`);

    return resp.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}
