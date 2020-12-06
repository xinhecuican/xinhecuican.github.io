/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","4db02c3a2d7eed9e8001e26123095359"],["/archives/2019/index.html","fb316e4f18ebcd2fa967a595b62bc0b0"],["/archives/2020/01/index.html","f1aa66f99c1281d49dd150fadaadedf3"],["/archives/2020/01/page/2/index.html","29c500a2c5185d751c7ecdeed0ac02ae"],["/archives/2020/01/page/3/index.html","72fcec059b4a2eb0f5459cfa54264575"],["/archives/2020/01/page/4/index.html","25ec5ecaf671ac47fee65a034d52a982"],["/archives/2020/01/page/5/index.html","f1b21cc1d0d18441321ddebca61a476b"],["/archives/2020/01/page/6/index.html","cfed51f2f2ec1778e8705b9cf4af01e5"],["/archives/2020/02/index.html","5873ce9c5f0229cf2c1aa377d735404f"],["/archives/2020/02/page/2/index.html","fce17da6b5f17b568548d2d38e250d8d"],["/archives/2020/02/page/3/index.html","0c0cfa460a84b9de9f91172d6f898fcd"],["/archives/2020/03/index.html","32f53a28541c973cca9251c1c73e2c2d"],["/archives/2020/03/page/2/index.html","99ffdc48f2d3bd671c5ac82450c31fe6"],["/archives/2020/04/index.html","2928666a55667233f54621b70e67304f"],["/archives/2020/04/page/2/index.html","3b91081f526908cdf12979bb644086cb"],["/archives/2020/05/index.html","8a2a5f46813c55d10b93c266808f2ae6"],["/archives/2020/05/page/2/index.html","e647d8ccac32038aecdbde9caa84f145"],["/archives/2020/06/index.html","f3891837c30d1bdcf03c3036a615c2ef"],["/archives/2020/07/index.html","7edab97191a08342195234520f6a1302"],["/archives/2020/07/page/2/index.html","fe0d06d03259381689f1a1e1e856f364"],["/archives/2020/08/index.html","ab3e1b6b94bb4e9f4c5eca54785c8a27"],["/archives/2020/10/index.html","1826f6dc2fc6687ad31d61239ba9a24a"],["/archives/2020/11/index.html","0616cd6aa5522d3e1aadf5e33129a6f2"],["/archives/2020/12/index.html","9f84c002c236ebf80c86291927d0977b"],["/archives/2020/index.html","b0ac3d01ec463dc1d56c9186417ff093"],["/archives/2020/page/10/index.html","c1a6f3a52c60b8eefed7c416689849b9"],["/archives/2020/page/11/index.html","9c854b48934805842f170aa9b4e9c6a8"],["/archives/2020/page/12/index.html","63a464190fbd8e0fb689fad16a41df03"],["/archives/2020/page/13/index.html","269de4756f6a5620ae63a0f30b09bfd9"],["/archives/2020/page/14/index.html","ee37d67ef295baec65f9a7875d20799b"],["/archives/2020/page/15/index.html","574b68305799a1a7e7064befa18003e2"],["/archives/2020/page/16/index.html","194ada72a8604226610c1d4560b3fb0a"],["/archives/2020/page/2/index.html","e3a372582a34411faaa7949962e993bd"],["/archives/2020/page/3/index.html","2b0b64b7efadf8d0a07f45c201385dc5"],["/archives/2020/page/4/index.html","d1506e73ca1a3f445af0b0d7911218d1"],["/archives/2020/page/5/index.html","8d1a705dd106f48a0e63b5f17bf72068"],["/archives/2020/page/6/index.html","f6cec715a45b03674fd410e709aa7165"],["/archives/2020/page/7/index.html","49228b116632c18711ef7b9688ad7f6a"],["/archives/2020/page/8/index.html","f1e3309c30b66c569fe5fbfdabec3fc4"],["/archives/2020/page/9/index.html","65f1c93e6c51dfe1a8be3b36f9ed7e76"],["/archives/index.html","e34aff59bf2bd1ca2ec40b08b823f818"],["/archives/page/10/index.html","da1eefe6a9d4d564a6365db9859d75d8"],["/archives/page/11/index.html","0dcffc7ad3d349c7c9130643aae7d5ac"],["/archives/page/12/index.html","7473294653f452c84eefa65cca0f4030"],["/archives/page/13/index.html","452ba433e4e8ac004253b34ed8ae5850"],["/archives/page/14/index.html","a6059f17fa4ce8c30da5a97a8508c883"],["/archives/page/15/index.html","0c9c558745fcbfb9dc198c1b2133e2e2"],["/archives/page/16/index.html","ee37c37605b4d86f5b6e75a774629e10"],["/archives/page/2/index.html","2c9be3843268cd14da579b1bffa85549"],["/archives/page/3/index.html","89cc03bb593525470d1c8b6901e7b450"],["/archives/page/4/index.html","c49909090a218575e167ffb53a624611"],["/archives/page/5/index.html","08222260cc7c133a045b99ad502ae47e"],["/archives/page/6/index.html","8280d265201df619048350fb6100d96b"],["/archives/page/7/index.html","7a6e4b0b25139cd53fab55f06c15161c"],["/archives/page/8/index.html","1750b31f4db9a2e42dbf39edb52150d9"],["/archives/page/9/index.html","6f83f4ba620c817ac0892ad2c964e74b"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","f0c5d99e59d3236efab9dc4483a84325"],["/categories/Linux/page/2/index.html","dbe85e9bbde090b317581087e9ca3185"],["/categories/Python/index.html","6ea79da756cb5126f84a7892805c0e8f"],["/categories/c/index.html","9d277bba627ce6da8bef66fe0c33dbf0"],["/categories/index.html","cbeb705c067a6584629c16b9f2a85cac"],["/categories/java/index.html","3d54f09181bb551ac6cdbe37474389c4"],["/categories/java/page/2/index.html","e672d1bb94e983c702e597da2cee7ca9"],["/categories/java/page/3/index.html","01bdabfa13757fc3d15a270a3b5eaec3"],["/categories/next/index.html","f696212b8daa8a98ebe7fe4dbeaf78aa"],["/categories/stl/index.html","079e0b966e5daa5b386237e74218f634"],["/categories/windows/index.html","e2966e0f36b8346f668a8865d524f1cb"],["/categories/基础/c/index.html","39af18ca3b0a788f0bf20efcd59c3ddb"],["/categories/基础/index.html","96b3c81bb48a05da7e762d44cec48c0f"],["/categories/基础/page/2/index.html","d61ec4bb015503d0524b94d55576d8e2"],["/categories/数学/index.html","d464bbcd8f6a365f0e458ef81e02405d"],["/categories/数学/概率论/index.html","5462f4b3fd5e5a2eca46a9d3de860c8e"],["/categories/数据结构/index.html","4075c532b8c4e104a59a92211847bd20"],["/categories/数据结构/算法/index.html","eea86bf4121e559a8169512a19559123"],["/categories/机器学习/index.html","87a3bbfe5b470c15df984b3ac5051027"],["/categories/汇编/AT-T/index.html","43e37049e7ece4be292a1c30c88fc9f8"],["/categories/汇编/index.html","c373aa8123b569751e2e884c6bfb8d04"],["/categories/汇编/page/2/index.html","5bd22e9f6f5bf7a01904d1c755c445b1"],["/categories/汇编/page/3/index.html","5ff1d3b81d461451c07b23598ce826e3"],["/categories/算法/index.html","3af265b11703db7378f420c425f7aea0"],["/categories/算法/page/2/index.html","bd5d2449b4ce7e7a8360b9b6cd4f92d1"],["/categories/计算机系统基础/index.html","35fa15624e3ccb961bbf7c2b29b728fd"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","304619129d03dcc3eefa5b4c990cb799"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","7845c4084f35b5fd0aeb2072ac5ad614"],["/page/11/index.html","edfefc8597be2c1972ea18a10699c234"],["/page/12/index.html","c11843983c2c90e8a3151e96a78eb0ab"],["/page/13/index.html","4514f3d4ae91ee45c97c6ec39fe75fc0"],["/page/14/index.html","980dd2a6b18016b6bbe65da8943239ff"],["/page/15/index.html","3de1260fae289891586d0dd1a8983d26"],["/page/16/index.html","28876ba488a58261404044fccc59e645"],["/page/2/index.html","2776c593fb6829803d78d722c7634832"],["/page/3/index.html","28d430c2933f314359788201126d52a2"],["/page/4/index.html","079eefe541bbaa7ad37309c0c1d9a25e"],["/page/5/index.html","37999f1a45a8c2fce6e4ad80c2ebdd8f"],["/page/6/index.html","6e02d28359e82e65a625e683dc0630a8"],["/page/7/index.html","d544c38f45f0c5415888edb72215a9dc"],["/page/8/index.html","aa879faa53c06889fbe453a01e72697f"],["/page/9/index.html","c9a212ff88a77d58699df6de4df9fb76"],["/post/10919.html","a64a8ca50cb32dbb9d55ebb54adf044c"],["/post/11051.html","2da0a7ad56e91b4384b763e950582b14"],["/post/11306.html","29c2e17547c25746ce3bace1e8411d21"],["/post/11491.html","4f318967c1a895c1bdf543dd611165ff"],["/post/11799.html","c91792835e1865166cf29c37c46e2302"],["/post/12334.html","696682c63caaec80234b908a1058b22f"],["/post/1326.html","c5c207af1211cda248d5c02fcc63ae8d"],["/post/14379.html","ca3fca5085259e15a8e523046429f03c"],["/post/14511.html","cf74198eb1060a9ee7ecd45cfcada5ba"],["/post/15201.html","ff14333b69b9c45c1992164380bbeef8"],["/post/15425.html","f97ffda61c8ca80516216acaba2a95fe"],["/post/16107.html","51820e34c38dd73034e7b447742d3f01"],["/post/17862176.html","1a3b9dc705299bc4270778e3b707d256"],["/post/18431.html","2ae1fb2a829a65a1438bf31edc476db6"],["/post/18912.html","2ccfdc84dda7fc227f78bc8c60a5eb0a"],["/post/1b9c8662.html","46954665dcad126613e5ef069e6f2aff"],["/post/20198.html","4362d9ce3213d0cee5d702df82386369"],["/post/20ff5ccb.html","6bee034db271d0e84c56d8c5ff1e630d"],["/post/21624.html","0f9d4affecde1f6100b91f0c114feb47"],["/post/2170659a.html","f40577c84d8ce60bc4f91d25997fe9fc"],["/post/22102.html","64f09d7894eb565d2aecc36971a3a440"],["/post/22493.html","e4f0f71263ec269d55fe61b50af68656"],["/post/235252ea.html","831c4ccbb7c14d2ff54500514a48e36b"],["/post/25699.html","8a06a4af213e0bf1861a70ad3b750572"],["/post/2647.html","c907fc1c152c553754a1646fc3cbcc78"],["/post/26477.html","6909d6867bcb77088ab9191a3313afe7"],["/post/26671.html","289ffa04669c91b094eb2b96de720b9c"],["/post/26737.html","3b2b89903fb33478ff0d949588018ecf"],["/post/27045.html","df0101de61eeddad722c2af317c4077d"],["/post/27621.html","c24adcb0c5377cad68bd93a4a4761357"],["/post/27890.html","89484527e81a10b2dfa19f33db9f3005"],["/post/27980.html","7c0b244ece3f462f7a223378e58e1603"],["/post/280b588e.html","2d39637cc094e9789225e511a29d4787"],["/post/28579.html","46fcdf0d66f2c83079015b8278ced96d"],["/post/28877bf.html","589f2a7cfbd93e905658504244dcf6ba"],["/post/28954.html","7a8b69adb48e4c4239b6e85c49178360"],["/post/29378.html","e7947f4e6afb0b0f6681c2a890a3caae"],["/post/29949.html","5bf5300cf58352164e1e19780f917612"],["/post/2ae43b86.html","31ed364b9a1cf1fe94da49eb38e50fa1"],["/post/2ba82a45.html","28c2306e9755f5092a70f198e22d362c"],["/post/30072.html","0e636107377aba30cbae4c28cec55642"],["/post/30479.html","f55ae58105a6b416e25f3eddbc7aa5de"],["/post/31a6b40.html","29f94df1286d9723e7f67a58fdecfea7"],["/post/325cdbf2.html","297a8c5a961ef49dbad7350b1cf6a8ae"],["/post/3319ed9a.html","5dc322c6dcfb9e3a814d591616786f62"],["/post/3320.html","f1935febf67b8814244f41a507a5456e"],["/post/33cb1151.html","6c801bb0d774ba5e530749eec3524ea8"],["/post/348d4e04.html","9fa5689a00ee00a085d0a1d4b9be2b4c"],["/post/3526.html","d31d5eda81507cc66b4c30bf92487b52"],["/post/35532.html","3af0decd6d9897651aded686ff4be40e"],["/post/35848.html","f1ea7713f09adc2ced0fbda68e16a3f1"],["/post/37318.html","f7cec297e903e9042fde1fba0a0f3714"],["/post/37663.html","deaf91537dfc3ea3185f51c7ef9373c2"],["/post/38035.html","4a8feca44119bdf6670ab6a8b41a3c26"],["/post/38072.html","312f30add44a37c6a8fcf152bad2b33a"],["/post/38145.html","abbbeac001298f991cff3be58659eef9"],["/post/39968.html","5e5df441399218f90b7c8118e3136b1c"],["/post/3de4bc69.html","e217016615741a4a489679e9e0f84ced"],["/post/40583.html","45cb22ced00e14927176ad1ac0fb4bb0"],["/post/40997091.html","13aa36dcd73df048be3f067fd931863d"],["/post/41129.html","0544233708e3bc750354b7ecf50d3d5a"],["/post/41763.html","2580d903f08eaa968aafa6bd92258c78"],["/post/41829.html","7d33b9f449875615ffaa9832311681f8"],["/post/41840.html","94df17e13b0adc8dc3ba0431aacd479a"],["/post/43817.html","36cea124570c6ec51198d623a763d094"],["/post/43878.html","8a29574eff0ded4bf59decbcd1e1f67a"],["/post/44250.html","af77d2200923edb2c0ea52d6b0aa44fe"],["/post/44336.html","d678a7389a914209abd5d05a5e9feb94"],["/post/44454.html","8719fa2fbb04704f63731f0e2ee04cb6"],["/post/44487.html","f24c4854e976a06fe7f0da6197e65d0e"],["/post/44914.html","53ac30b783d648420a26f6dda947593a"],["/post/4551c130.html","0a57740cae59e098488c9acc3ef5d52d"],["/post/455a4c92.html","f1c4e3b3b2dbd0f91d418a5615308235"],["/post/46466.html","677799398ecc4255650cc2d7ddd2b304"],["/post/46925.html","f58d8d94d8e6f9354fdcf5e4286777bd"],["/post/47075.html","bdeca959390fedac7e270d8d25f986d7"],["/post/48220.html","7da8543302b38ff6bf36938c82488ecf"],["/post/4b1879e3.html","471046090efb7d239758222c9c0bc2cc"],["/post/4c720881.html","fcbe7760a2e4752b06ab57b793626164"],["/post/50daec4.html","cc644f908416dd9f6b8fb33e1027d3f3"],["/post/51491.html","3d07b047b9467e3589756941dd7f7017"],["/post/51e63dcf.html","3fcbc56da5ffe53a027edc291abc3063"],["/post/52078.html","3c7438379e07957e5922a0f204083150"],["/post/53677394.html","94d52d84021b1db2cfbf57b5990ff45d"],["/post/54300.html","dbc6c46d41279c89ca0d9393d767b907"],["/post/54612.html","be9dce3c578f0aa57fdca6457ad1e188"],["/post/54613.html","40f9648aa49539ffb3296261d90bee44"],["/post/54708.html","c701f816aa14feb485edab0b348ba8f2"],["/post/54778.html","a78386877555fc4d92e4e297e91c4835"],["/post/5490.html","8f66e694d0b1466bf77b53f654d700f1"],["/post/55046.html","2fc2fd2386b9de252e4d3df085bdf9e6"],["/post/56929.html","a7d25baa097b9bbe9706baab585db7e1"],["/post/57339.html","2ae317ee6253f7833535080af9fac178"],["/post/57449.html","e89f75dc57870b86ce19c81621094cad"],["/post/57453.html","97100087b31f9fca45a2d467c9458582"],["/post/57671.html","bd44d5998bf3ff9f409232b52cc59c66"],["/post/58313.html","f94a47fb8b07658e6639c2b78bb246be"],["/post/58481.html","ceab25f4c4e954eb313ef8b17bf3091d"],["/post/58986.html","da08d05af6d3e8eabfd8eb5f6c643ef8"],["/post/59431.html","0d3add439ac83396ef918eca8337d1ff"],["/post/5951da65.html","600e8ab37472181608a25e53d2f683fb"],["/post/5be7e977.html","6a4616721b971224a20735534d5713c2"],["/post/5f9e4eff.html","9fe1ca8915b2fdfdb0035b4d847cf98d"],["/post/604b49d0.html","9924e7d4b927d90e9a5175a724aaca0b"],["/post/61312.html","82f6ce89c59bef616b6cb29ab8748a47"],["/post/61738.html","22784ffb2283de67cbe27419823b43aa"],["/post/61809.html","6c08b8f9a3daf75067dc4f25a2bcbfd0"],["/post/61eaf19a.html","a19a09bc750ee65bb73eef7567fd4824"],["/post/63002.html","9e7b5bc637a96815d6e410ba9c35176a"],["/post/63711.html","51f5353ad8c6c2919a1b5c8b07df6da2"],["/post/6587.html","7d6bcfc2228fc7ade078f2c7ac11cdbf"],["/post/6589.html","1faeeb6917422c9babe6a0830d5840f2"],["/post/6880.html","069f4114242812ca04e4dca403a021c4"],["/post/70263071.html","44ca236e11edb6c26b84ecfd2d7320e9"],["/post/71038564.html","fe4340400c813e0a92f1af08ca0cdd5d"],["/post/7119.html","a44679b0c05bfb9567f8f28169013d52"],["/post/74e7fdff.html","31f747973d7b4d4e121bea8c80d198db"],["/post/7502.html","5f47ae75aea9031ba0c486dedac4c465"],["/post/7564.html","40fe825272d02531d87ca92a514346fb"],["/post/766f9b60.html","a5566e2261b959dd53e7169b5c95c145"],["/post/7ca31f7.html","e43ef6479213aca4840915a9fb0af8ba"],["/post/7d1c86da.html","ebbdd86968e81f81f08e65b11bc441a0"],["/post/7f3bcd7f.html","5606ecb265f70635893d7b410b6b819f"],["/post/8039.html","223a8f0ac426b7fee4fafdd9dad1692f"],["/post/8050.html","bb7b4188bfa7c3f71bbce852f52741ec"],["/post/8072.html","dda093085bcc5ef037c85c032ce224de"],["/post/8274.html","c4bbc62f85e235e376345d5f57d3a737"],["/post/8372.html","1e5e99d17b0cdfe8513cb94a8c4e565d"],["/post/8498.html","fcc364e9d640de23c38fd1397fdf1c86"],["/post/85b4e13b.html","5f8d49e2d1b35cb00b8a45017cf39fc6"],["/post/912b2566.html","704895537f24f07a6d9ac53d1d1868d2"],["/post/9187.html","1c0f78f2a21cafa582427340306a3dde"],["/post/9197.html","810760f223b2d4ff8e1d4df8f121bb5d"],["/post/94ceb2fd.html","5028cb216bffc3e8e890e02601082625"],["/post/95495db.html","d16106c6325f4858b67f9cfe33cfff1e"],["/post/97246020.html","6b028e7af2c8bf7954248ca12a338dfc"],["/post/a3a786d6.html","ff3746644a2363a83ac420659ee86de2"],["/post/a444b428.html","1fa61dbdcdd093644e9b30940819d6d0"],["/post/a50b8908.html","9d67ab8ae14bfd28d9a0b710d9837dc0"],["/post/aa1eade8.html","56d7d958323c04bee2b34037a275a394"],["/post/ade8c6d6.html","b342edd0123db4d73cc72e8527be890c"],["/post/ae8362df.html","5268ee1506a8229a9cb89fbf7e3407fc"],["/post/b4c1d206.html","3b76c383fe9a4e47a598ec8c89f04d55"],["/post/d431fab4.html","5a23c58fbb49dbf2fd726d00e082733f"],["/post/d5381517.html","ee321b4e95c38d2409513d5ffe57947b"],["/post/e058ffd8.html","352bf19341e996a22d81ae2eeb34291e"],["/post/e0f8cb74.html","e001ea43ec2c0f603ccae870941876fd"],["/post/eefe591f.html","b13c6d678739fe3f93f5d340104e5953"],["/post/ef296a07.html","8a32c88548d5055537c27810620b7438"],["/post/f201f9fd.html","538504a96c2b33296fd28470c7bb9ccb"],["/post/f79e4123.html","fe4d565e52529b9599e3cd0fe816d6a5"],["/post/f8648a1d.html","ae212ba169e67e20f9ee3867076c42c3"],["/post/f89cb603.html","27d51f2c074e4593a18074960df31f65"],["/post/fa288682.html","6157918762c27772414dff2d4c2f5822"],["/sw-register.js","6c0ec7a84ae27e6d628fc337de87ccef"],["/tags/AT-T/index.html","389d323096bf60cbf9b62cf530f0801f"],["/tags/index.html","e473b6d44b07f867dc4929245f6835ec"],["/tags/动态规划/index.html","b3d8cf4bef74758d7c807cd2408cd1a0"],["/tags/字符串/index.html","88756f04f107406586daa9ab9c903fd3"],["/tags/字符常量/index.html","8bc9e59b4784e717295636dc67bc3281"],["/tags/快排/index.html","ee61cc95fbb80586cfee3aabf8319461"],["/tags/排序/index.html","36905d4dd46a842b580e795511272676"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
