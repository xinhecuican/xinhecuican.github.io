/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","a1713ca060022bab2a6abe284bb79b84"],["/archives/2019/index.html","924848bec6c62a173d2b2d2cd5f3eb92"],["/archives/2020/01/index.html","4e1786df6e81162a05f7051cefc1be45"],["/archives/2020/01/page/2/index.html","d85e81ecbea99630313932d50b5ce18e"],["/archives/2020/01/page/3/index.html","15ea295a3de4847f76759fac3c0aaec7"],["/archives/2020/01/page/4/index.html","6eedfdd47eb9883e9fe91e685d290421"],["/archives/2020/01/page/5/index.html","2185076e222c7afbfbbb182d7325f608"],["/archives/2020/01/page/6/index.html","5eb89eaeb46fdff4632425b1b06c2603"],["/archives/2020/02/index.html","73ea80abc8c4147f2dc449055ec65938"],["/archives/2020/02/page/2/index.html","1a4ab74c85fb9f5f7899ddeb11b1a95e"],["/archives/2020/02/page/3/index.html","33f0fbb04e6f3647dcaa3513f1dbfb6b"],["/archives/2020/03/index.html","cc54c049066bd696015b9eced1de7e57"],["/archives/2020/03/page/2/index.html","098693ccc358ac5e8abcf474411bf15d"],["/archives/2020/04/index.html","7d88c654cf9e1abdcdebee348ee9d2ee"],["/archives/2020/04/page/2/index.html","2cf423ceb4b945258ac5f114907ad440"],["/archives/2020/05/index.html","62729229bbd6d6ae820a0674a26add8f"],["/archives/2020/05/page/2/index.html","daffe2e0d461606cc5dadd12ef754010"],["/archives/2020/06/index.html","579233dcf3a20c6aa881981595c59126"],["/archives/2020/07/index.html","acaf74b96e350567a7eead48319ba09f"],["/archives/2020/07/page/2/index.html","733b66cdffed3b1a734650032f0dcada"],["/archives/2020/08/index.html","96caeadc3ed7de8ed0d53255526c3711"],["/archives/2020/10/index.html","ec8056f83bc69684ed7ade449740ec7a"],["/archives/2020/11/index.html","fea95e57f00ccd04effaf037fb5ffc62"],["/archives/2020/12/index.html","f98d4fd9d5cca5a5db92392d257dc8bb"],["/archives/2020/index.html","0dfaa78ea765f8dd1289a501a914ffd8"],["/archives/2020/page/10/index.html","70cb69a2de521ada8a2bf5f27264b1e7"],["/archives/2020/page/11/index.html","da65902d9fb060eab9b81fc94d469b34"],["/archives/2020/page/12/index.html","c7ccff29c5de049663484e0c111d08ed"],["/archives/2020/page/13/index.html","1cb90d1c6ece31b4a671db42e5d8592a"],["/archives/2020/page/14/index.html","bf8262debdf5359874dc491ea388573e"],["/archives/2020/page/15/index.html","d414ce471405358c32331af1ca55a07f"],["/archives/2020/page/16/index.html","ce639b64212e3cb322a1de97e2355cea"],["/archives/2020/page/2/index.html","bb8ac043f37ce7b3998fea49d59310a0"],["/archives/2020/page/3/index.html","022c59916967ef0168985cc1d1980097"],["/archives/2020/page/4/index.html","14386fa55896dcb003b7dbdd0ce847e9"],["/archives/2020/page/5/index.html","4c3bab76923c907a6dc87b6f66fefc96"],["/archives/2020/page/6/index.html","fc22c3c1f673b412d90a5c66a4cd9fe4"],["/archives/2020/page/7/index.html","9e4f2b62c6858b399054117af21fbb61"],["/archives/2020/page/8/index.html","82231d4bd9f415ec23ebba84dbbbe19d"],["/archives/2020/page/9/index.html","158258cff1906daec909586f5e08b0d5"],["/archives/index.html","5ed77742a0ac26401d8578bb80eda259"],["/archives/page/10/index.html","23179687687359f442a630d51addab0d"],["/archives/page/11/index.html","020ce2223e0c1786fe327f2e960f6a59"],["/archives/page/12/index.html","5a92d772113d436f30662b0a7dfb928a"],["/archives/page/13/index.html","56fb1167fbb38a4ca07c51aa50db1cc4"],["/archives/page/14/index.html","5829b7879958215f87a0d2a610357fa9"],["/archives/page/15/index.html","c21ae28773cdfd34d1ba55645bc96977"],["/archives/page/16/index.html","3b4d19b0a4a610bc02c2ab06a016288d"],["/archives/page/2/index.html","bc7f716a49d83bee9f63e13a1e455ca7"],["/archives/page/3/index.html","d686a28ff3bd0361c474fa569186ebaa"],["/archives/page/4/index.html","766529e54df04a6ac0a1781cc75ed23d"],["/archives/page/5/index.html","6ae57747d12b9c03b7c13c434000f16f"],["/archives/page/6/index.html","10245ebf6900cf9ced61f3da353a00d1"],["/archives/page/7/index.html","565f8746d9ebed8881c860ca49992bac"],["/archives/page/8/index.html","c05a3874dc9927771cb4eca329400760"],["/archives/page/9/index.html","8c7a763f162d92b4347abac86944d781"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","e244039db7c10af038fc84aaaed280eb"],["/categories/Linux/page/2/index.html","842d8f367e08efdde4321f5cbf891f3a"],["/categories/MySQL/index.html","c47a0e684ff216d59781aae6dd8f13de"],["/categories/Python/index.html","67b57e9d2268e2b4853b93075a9ef42f"],["/categories/c/index.html","b287b7deca3c03c4ef5e159eaf964868"],["/categories/index.html","848287db66b89a70f95d2838cf71a881"],["/categories/java/index.html","89e9e680ae6824e850f01a98e9abaaf9"],["/categories/java/page/2/index.html","16b6d889d47c7626ec7922fcf74bfd84"],["/categories/java/page/3/index.html","7ba64526e6520f22f82256237badb97b"],["/categories/next/index.html","421e91087b497894e12a730dc1425486"],["/categories/stl/index.html","3b8cf452f54f7c763ec49a7c06bdf406"],["/categories/windows/index.html","f3314754954f5c461fd1efcee1bcb99d"],["/categories/基础/c/index.html","3afc1389b01f6f1254f80a1446ae741a"],["/categories/基础/index.html","ffa54e646911eb6a74194147c137a0b0"],["/categories/基础/page/2/index.html","513e28e52e142930d3edceed596af4bb"],["/categories/数学/index.html","a2b5ad80669ed657b62cd817ce3ebb61"],["/categories/数学/概率论/index.html","b465a1e8a50bfe0623cfd5413ef1d2fa"],["/categories/数据结构/index.html","d4a8ca89cd8ba8bfc62101c15c0eca72"],["/categories/数据结构/算法/index.html","dd7bf41625e1f7e97d017dd125d3360a"],["/categories/机器学习/index.html","739c4c2d1cc04cbb3f9fffc43c573ddd"],["/categories/杂项/index.html","2631cf6358b7633cc77ce5e7a95944d4"],["/categories/汇编/AT-T/index.html","9fd1953ffb4c425a3e2ef007c086fdac"],["/categories/汇编/index.html","69301850df408373c0b2e3f0b83d4f07"],["/categories/汇编/page/2/index.html","aee176a98e7ea0bcfd90f8089d4c098e"],["/categories/汇编/page/3/index.html","60714e826720b3850c85ce63c9ac2356"],["/categories/算法/index.html","6e8f2438f432adad553cee01816a3d8f"],["/categories/算法/page/2/index.html","b1ef5b64d5a6c4b12f25d4253bdbd75d"],["/categories/算法/page/3/index.html","535eab84876ff6d6e5c5028a691c362b"],["/categories/计算机系统基础/index.html","4f43e1a67abc9f9dfc7c8c9a2083f00b"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","1574985cbb03c69c7d15d56a4f65c899"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","2dc112243cb1ea5bf7b272aaa4f3945b"],["/page/11/index.html","b69313f12351db5395c43176379084d4"],["/page/12/index.html","a131d5a7af2e11e1da607ff17bb0c1f6"],["/page/13/index.html","7352358de35d9ee963c0355f61d3f45a"],["/page/14/index.html","ab7ba63e10399329200400a68c12f9b1"],["/page/15/index.html","93599c714e903ec4a84d10dd4563d27a"],["/page/16/index.html","a3212c78e081f9e974541c5534555c65"],["/page/2/index.html","babac3f8a417ce7f418197cd8e44ea37"],["/page/3/index.html","1d159df651f5bd5590e9f07c24499f5a"],["/page/4/index.html","b1b72088bc520448df6211e341778436"],["/page/5/index.html","2578e9f9f41ebcb28f11aa1b9596ef91"],["/page/6/index.html","ec8d81d4ca934ad9e03c658157151f36"],["/page/7/index.html","f6a4045bcdcc5cd7a9edc37f543ea09d"],["/page/8/index.html","5127cb0fbcc8f6022a815a242bea7863"],["/page/9/index.html","0aabfbcf4c44b9bd6e11c2ac983f0f5f"],["/post/10919.html","ce823832c384c29644e776b7c04787df"],["/post/11051.html","4ef8f3e4994871d3e88c6c50cecd784c"],["/post/11306.html","4de2be00bc3185e5e61b232acf9124b5"],["/post/11491.html","8884dfa6d997ed3208372cac659a7d56"],["/post/11799.html","50ef71e3bda1b3a0ff9e8b1d09535f8b"],["/post/12334.html","64c8cf4720c3e66eaca59e9d318e9ef0"],["/post/1326.html","fde0fdf79980a10bfa9844c096579485"],["/post/14379.html","9df21f6c1c1644bc37d2fdfa04aaa9dc"],["/post/14511.html","6495ee3acf09f61bdc3b7f3c7058a9b1"],["/post/15201.html","d165ed101d29da0e990615bab772166f"],["/post/15425.html","ce9046e196de08d917fa15be3e32a1cb"],["/post/16107.html","c3cf3ee52a5b81d67eed292a311bbbf2"],["/post/17862176.html","dc60190db22ef4f539a7df4ff2e0ea93"],["/post/18431.html","d1f626043fc93db8ba575665b6a92f44"],["/post/18912.html","45e51595f6b5d81e4cfb8bc501c08514"],["/post/1b9c8662.html","9877075a9c59b29d624a965f80cf4f0b"],["/post/20198.html","ba7b1b3a3810484c6bedf05e032e2558"],["/post/20ff5ccb.html","4c4710feeacf4dd59cb4fe323c940995"],["/post/21624.html","65f2a4152141110b1a74beb28c0ae296"],["/post/2170659a.html","e669ac26cd86ed845765678cb9190fc1"],["/post/22102.html","9227c5b0860a286bc57a214ccbc35670"],["/post/22493.html","f392a9df3948c9cab827fd4d0f33814a"],["/post/235252ea.html","0e8cc81e5c8b1a9b6b7fc6f266e1d231"],["/post/25699.html","15264f7cab21da949becfa67d2ae0b48"],["/post/2647.html","57048a71df5a015ea716361e1ff881ab"],["/post/26477.html","9b8d107e0c260f18f898f06602fa56a9"],["/post/26671.html","374d5a382beb332e51b66e3d64ec61fb"],["/post/26737.html","9130c20f75ae39460c850ac0fd3161db"],["/post/27045.html","edac599cee1635d6397769cc5d347d88"],["/post/27621.html","3603f9010836bbdcb71e2e34fb22a465"],["/post/27890.html","251ce21abcb0502081b83dc282c24d46"],["/post/27980.html","a7ff82dbd3fc53f41c6fc1fd2cb92c23"],["/post/280b588e.html","4b4cf172c02b477921f751fb1d8a91a3"],["/post/28579.html","20ed271921b35386a90da386128a6436"],["/post/28877bf.html","9a94916cda79bb3336579ac2a2727d03"],["/post/28954.html","fab7a7b61478e9328a5e6438e6c975d3"],["/post/29378.html","e3a920bb9ee347d8e8b540d86bdefb07"],["/post/29949.html","3c5bec0abf30e93acc8bc764734fb480"],["/post/2ae43b86.html","53506b98035517c32e6bffc2ff37f1be"],["/post/2ba82a45.html","dfeb1350e0b5b40eea3e67355f809384"],["/post/30072.html","20fea1da5a8817addb1355589da38c7e"],["/post/30479.html","fe0d4df39cad4d7769a35af59eb50617"],["/post/31a6b40.html","c161d4a860a6a7c6975d2c67a4c886ce"],["/post/325cdbf2.html","8b41d3c4b3e9b1ee9e1e75980f96d3e1"],["/post/3319ed9a.html","33108a61d01fd6fb95c23e7e471b9d74"],["/post/3320.html","5861142f1543bd3547af61a6a6328711"],["/post/33cb1151.html","c2d264b998fe30bd02422067fb2d2707"],["/post/34811d5f.html","80ef4fa288f1b54e25ec8bfc87b971f8"],["/post/348d4e04.html","4fe46f474b2560d205639f2d76719b05"],["/post/3526.html","e6da2587221d0a3e4ed9f349b1d469de"],["/post/35532.html","2788898370ea8c6ae9f44b4495d43541"],["/post/35848.html","dce70a3b415e77d804d681484aaf583c"],["/post/37318.html","9af073d7c063b8a6769fc6f961112868"],["/post/37663.html","0781b4a4f3ab9c4e5713913ce1113cbe"],["/post/38035.html","7db9ff7fba8e2ca43534d68f11743d26"],["/post/38072.html","bb6f0ef70f09850b8dccbfbabadf3355"],["/post/38145.html","4fed9f545dfaf623ab912505be5c5259"],["/post/39968.html","d1ab8c789973263cd46e7851c9c427f1"],["/post/3de4bc69.html","dd48bc88e8b72a32b76ff487343cb9e6"],["/post/40583.html","c8f4c2a842736c8124923f92630b3e6c"],["/post/40997091.html","75b5a814e85ef51579df2c6e2877a1b3"],["/post/41129.html","9e96e9378867e59ac01377d04977ab4a"],["/post/41763.html","ca8bf320450592a51d9b1f09d0e48a69"],["/post/41829.html","bbf77d50378820420e4b67bede372db8"],["/post/41840.html","bd4eeaf722531bc44edec32960ce2312"],["/post/43817.html","bb9a6dd58df88138b3a045ac67ff4d5a"],["/post/43878.html","2c347ea62108618d910acf2ae5692a8a"],["/post/44250.html","e107b6bc8824a8a24bf3d67fc5558b6c"],["/post/44336.html","42a200cc27f06d9beba404fecf1a736b"],["/post/44454.html","5d605c5d1719c5cce7696bc6d56b5276"],["/post/44487.html","55f042e871076fb5f35f54c541df545a"],["/post/44914.html","6af62f65d60297e44187252bfcb191b9"],["/post/4551c130.html","847955a7fd4e5606e2d3d3ab2b731fab"],["/post/455a4c92.html","88146b29bbdf0ca60ea6b2a1dd3642d6"],["/post/46466.html","6161e5c5989b2de4fc338603379268e3"],["/post/46925.html","914b3fc38b35e4a12ba30e8f4c5192c5"],["/post/47075.html","f83fcc87859359c6e3da6fc36ff63fdb"],["/post/48220.html","d72087ff0e7771beaecf68bb1ca6482f"],["/post/4b1879e3.html","bae3ca81f1133a0ecfbc38f5f781c46e"],["/post/4c720881.html","8dae492d854189e9910929075a13e3bf"],["/post/50daec4.html","640a7d1a18a059667d4a1c9445e566cb"],["/post/51491.html","4d4d9558620b61383ee0907a4a62e7bd"],["/post/51e63dcf.html","190deca0c9743670bb9c4f15b1f20695"],["/post/52078.html","fdefc35c4ce254bc527c379c93685767"],["/post/53677394.html","34028df0d47de257bf28d87507573c51"],["/post/54300.html","416d6efb612c53cf4973da2f8872c10e"],["/post/54612.html","d62d04ec07d490cf31ce17e47efd2354"],["/post/54613.html","5afc918d4346e798aaa9393bca119d6e"],["/post/54708.html","f1966ddd90c423f790e7984a41667f2d"],["/post/54778.html","f2cf47a14e4124a795de1bc1ca75406e"],["/post/5490.html","3886885d89e88463aa8aace31b3bcb69"],["/post/55046.html","68c4225ffb96e1c2f89d8316f0330b43"],["/post/56929.html","1a10fdad45f1ce84e92d2d05e70059b5"],["/post/57339.html","fd4e61ddca27745d93fe0eaf204a308b"],["/post/57449.html","07689ac6b43a6e00f596530831d107b4"],["/post/57453.html","d9f7f6344596d9e1179ace5b1ce122b0"],["/post/57671.html","4e19c4c4678cfda45a7ede2d7d80fe42"],["/post/58313.html","df4511ea99bcf0154561bfaf730083d2"],["/post/58481.html","43e64befd40e69bdf948e4d41208cd4c"],["/post/58986.html","fa56d9777a69e2a36b6d44438febdab6"],["/post/59431.html","ee8e029ff912dbf134d9552964d435d9"],["/post/5951da65.html","38bbb5a0df54981bc3ace5d0c46114c1"],["/post/5be7e977.html","89fc90b27e1ccf65b56178ab65153cbf"],["/post/5f9e4eff.html","fd07b72a6b70cc2643946391e9d1f6e8"],["/post/604b49d0.html","6cacd3d58a7abb4f5cb3ab38a54913a6"],["/post/61312.html","6b4f77b38ac163c2e97cfc1de20efdee"],["/post/61738.html","169f2d930661ef6730b2e6ca317db86f"],["/post/61809.html","640c16d1ef193a0ae4261e3f08175bdf"],["/post/61eaf19a.html","d8fcd24b5b763b561c1cee7ad14f82f0"],["/post/63002.html","fba3377244518a8818d7bee40df6f56f"],["/post/63711.html","9042232b1efd3e9723a3074dc2b2cd3c"],["/post/6587.html","659c4823a52c53d78549fcb62b666f9f"],["/post/6589.html","dccbc3b795feb056cc679b1613471e0c"],["/post/6880.html","7bc7421f56fbbee621b16efa9513e76a"],["/post/70263071.html","484ab7c87bd1ce11ed65ecc24d388a89"],["/post/71038564.html","2bf4f48f8e8c84277fb75efcfc7c8cfe"],["/post/7119.html","c4cdf8cfde65e28977f1e346093c4afe"],["/post/74e7fdff.html","20559e6cd4b7b8cc77c735a751912611"],["/post/7502.html","956392d2d47bced84ece5fbe6337f3a7"],["/post/7564.html","ddd8f0d1499e5e27bd951c10f388e84c"],["/post/766f9b60.html","d0d4bca0b43bf089bbc7138008bc0ede"],["/post/7ca31f7.html","87902fab174783679c33320b5f27dd7b"],["/post/7d1c86da.html","257c63b8bd3c0f6254fa073a71938775"],["/post/7f3bcd7f.html","b899e537c5c3e4ef137f60eccd2a28ac"],["/post/8039.html","dcebcb65e04dfa5200827268975ee146"],["/post/8050.html","e9bc02f352d6013973dfcb8c122595e0"],["/post/8072.html","2997d28c02befb8aab7c5d7c73e7af0d"],["/post/8274.html","dfbbdc90e39cd549256ec6c57f865b83"],["/post/8372.html","c182221a3382db24061ddd4f916159f4"],["/post/8498.html","ac2a90fa08c9cb7fae894d31d9e76f2a"],["/post/85b4e13b.html","d6823392104f75188d299753ca5b52d4"],["/post/912b2566.html","e1a4bf10d793cd7fcc775c2bbdc4fb2e"],["/post/9187.html","1347d212e0c593246442c1bc810ebe4b"],["/post/9197.html","988c67a06ea4ee182ea25befac1e6aad"],["/post/94ceb2fd.html","da26b02e3e04a5d91f42a93e30f464f0"],["/post/95495db.html","c7930fd3f6274f8e8042c30b73edee30"],["/post/97246020.html","cbe46e59a8fbbb957fb0ac0149ff84aa"],["/post/a3a786d6.html","6b58cfadde0a3c534b747ae15576ff30"],["/post/a444b428.html","c2a7b0881e77e308087b93c626a48b7b"],["/post/a50b8908.html","22f150ceac315c8a7e99058c71b10c49"],["/post/aa1eade8.html","c9e712e2c1094e40a6739a83e78d01af"],["/post/ade8c6d6.html","17ab74aa91457dbf79d2f28b3fe0a489"],["/post/ae8362df.html","83f0687613dca4bb87295812d2434ed3"],["/post/b4c1d206.html","bcac1f72ddbfc53fad2b756fa7c8afef"],["/post/d213fc7f.html","eafc1bf20b9da875d76303dcf769ff54"],["/post/d431fab4.html","5feac4183ee9f75e93c1e45b7bb7a3c9"],["/post/d5381517.html","8d0b45665a2ca71c283dce837f677545"],["/post/e058ffd8.html","ffa4481e49a5e91f68065837b4a80592"],["/post/e0f8cb74.html","14d86cbe8b17cb0a1960a7dce32b6653"],["/post/eefe591f.html","69961400c31d0f96632dbab77d5e183b"],["/post/ef296a07.html","13a85de0ccf5b4c9f6a30342b7c72513"],["/post/f201f9fd.html","bee98290621bc19aa5687959a5935d6f"],["/post/f79e4123.html","7c385b316142e7e86fe221cb173d1621"],["/post/f8648a1d.html","01884cd818179c1c85f86aded762f8e4"],["/post/f89cb603.html","c7559b7a5da6f9207af6971158d67903"],["/post/fa288682.html","11f9b5075d3a896004f2b193bbb86855"],["/post/fb98053e.html","95815302b81c02bf33bd5b567070b4fb"],["/sw-register.js","bb05c99e0674288f088469b60a5540bf"],["/tags/AT-T/index.html","52da9bd71790c87ea83c733c4268e687"],["/tags/index.html","e14ad36f75d7992f094dd81f773beb67"],["/tags/动态规划/index.html","1a76f761f1884dfc37a981b9dcf706c7"],["/tags/字符串/index.html","c0ba053cc69078c6f16171a0eb6678ea"],["/tags/字符常量/index.html","720dda6c4f08ce707b967e64c6496149"],["/tags/快排/index.html","f0fa563f9aad1a89daf3361dd62a228a"],["/tags/排序/index.html","7b380c4378de78aac9602c03ec85c1a1"]];
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
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcdn.net"});





/* eslint-enable */
