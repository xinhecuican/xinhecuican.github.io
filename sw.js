/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","38d432b1d9c4cc8c50c9c6bb452d70d6"],["/archives/2019/index.html","8ffe942693f44ccf6dad65f7ddc256b5"],["/archives/2020/01/index.html","d59493658276d16656f95d5d701b1049"],["/archives/2020/01/page/2/index.html","1a8376f638326a0b4902a3a0ab872153"],["/archives/2020/01/page/3/index.html","003a4ca4d443a73a8eff2d8edcbe4499"],["/archives/2020/01/page/4/index.html","563bb6df95229bf8350b638e2c08be50"],["/archives/2020/01/page/5/index.html","496659ff79af8ed15e1f0d380a12b585"],["/archives/2020/01/page/6/index.html","835a7b8ca64cae9ce730eceea6022c12"],["/archives/2020/02/index.html","68e2f74a17aa856b91e6d82f64b4a588"],["/archives/2020/02/page/2/index.html","e88065a0dd8e727a235d59a6149401fa"],["/archives/2020/02/page/3/index.html","3c2310d093e3dc041ddbe611bf3ee2b9"],["/archives/2020/03/index.html","3340dab6999fdc3df974570b9f65c7fe"],["/archives/2020/03/page/2/index.html","263a5790ff8d656e009831b8ea57018f"],["/archives/2020/04/index.html","cb00740b42ef40315f3cb8b1e41d380f"],["/archives/2020/04/page/2/index.html","21d45e3029185648c51a552ef01fb457"],["/archives/2020/05/index.html","3ff383fe3bb32895e9f43bb4f6c666db"],["/archives/2020/05/page/2/index.html","495ddf383e6c4c1e155d1b690c07823f"],["/archives/2020/06/index.html","805587e7da36959f6d5fea1605b15665"],["/archives/2020/07/index.html","d97590b3986d99d9b82bbc94e070afdc"],["/archives/2020/07/page/2/index.html","610d99ea36927d903d6c3abbdc32c868"],["/archives/2020/08/index.html","7ddf2186837f9e88388c3ee7d835cf11"],["/archives/2020/10/index.html","e60d3be1984d25f0fe61bfd60d5e28e3"],["/archives/2020/11/index.html","fd6d0a4cb3987f42e1a38c0501950e7e"],["/archives/2020/12/index.html","bd2af0f1ad2729aeb3cf39a7bfd76f74"],["/archives/2020/index.html","b0f303820bb4ed3e75e95a5b216821fc"],["/archives/2020/page/10/index.html","817570687e3a916e9303e3b4c2adda83"],["/archives/2020/page/11/index.html","8c5e60ba02d3f40a0985774599d9e47a"],["/archives/2020/page/12/index.html","6294acee1148fb3def201074f3765561"],["/archives/2020/page/13/index.html","720d6f5b1bf2eb1dfe18d91b902e099f"],["/archives/2020/page/14/index.html","472d142186e4989ec2cbfcd2f4422db3"],["/archives/2020/page/15/index.html","4b16c4cfd61e4eb2b7bc3cfe8ac20929"],["/archives/2020/page/16/index.html","b875527bb73b760a1525b04c1c3379ff"],["/archives/2020/page/2/index.html","b616c68eb1b0d28fa125dddc2fc2d693"],["/archives/2020/page/3/index.html","277ca0c5ce74fd6dcbcf14c235fb552a"],["/archives/2020/page/4/index.html","e3bfe40c063e6702d33250b6fc47170f"],["/archives/2020/page/5/index.html","80506c01ebdd81198452a4e8c40ba154"],["/archives/2020/page/6/index.html","f2607ba89aa2207024725c5cf4b9776e"],["/archives/2020/page/7/index.html","09706719b22c33ef614385ef37350103"],["/archives/2020/page/8/index.html","04d2cd1c2da838650e0639273c00acad"],["/archives/2020/page/9/index.html","7368e8ad0b8d63b2aa133abcb444533f"],["/archives/index.html","ba6411fe9e7c40a5906bec3ab6f9e008"],["/archives/page/10/index.html","42150bf58cb8f5743808c68610635bb4"],["/archives/page/11/index.html","8422b4f5cc9e070308fb270a7fb6746b"],["/archives/page/12/index.html","31739eba4c5a610b62d5b565c8f8d8c3"],["/archives/page/13/index.html","5fdfcbc5f3274179353694f9f7d04258"],["/archives/page/14/index.html","efd9319aeea74d043b5af9e786658712"],["/archives/page/15/index.html","18dbd9dff690f9869b77720b201aadba"],["/archives/page/16/index.html","5d53ea7c0c714a7fe1dac3ba342a5c66"],["/archives/page/2/index.html","40a17ccfda7ae50395321ab46ca6dc7d"],["/archives/page/3/index.html","a8d4f065f0ad74c7f7f111798390f8a4"],["/archives/page/4/index.html","742b84f469c5ada2a0e997980df7b57b"],["/archives/page/5/index.html","e4f320b360bea781dcf380e588493d12"],["/archives/page/6/index.html","c2bb8f095ac3ba351907dd0a3db31828"],["/archives/page/7/index.html","70a6ce0d4be54c2d69552a0728bf76ff"],["/archives/page/8/index.html","8b910da537f2109788d6fa3f4fdac749"],["/archives/page/9/index.html","4d6e2ff9d6c0146f07a04228a25f08b1"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","f2219f36202e6fd0cbbfeee99345aa49"],["/categories/Linux/page/2/index.html","cf23ba5bca1e72efb84157a379f59152"],["/categories/Python/index.html","ea6c3f21aa49320c56e8193b2f2261fc"],["/categories/c/index.html","fd46e0d7a412fd38619d112d0706c193"],["/categories/index.html","b29d9f28457b2ded0cbf7b3bf8bb0afa"],["/categories/java/index.html","c9ee4040cb191cddaffb7104e462a821"],["/categories/java/page/2/index.html","012f152a9741731cec1552d591a111c0"],["/categories/java/page/3/index.html","0c336f10f6a4189c2d8b9d99caca3add"],["/categories/next/index.html","9949aa5e2dcbb53f774f0b1d5fa7d05c"],["/categories/stl/index.html","6ed54da8a4214e08c8548b178d56ee4d"],["/categories/windows/index.html","892b282f052f59fd620f6e05e294c53d"],["/categories/基础/c/index.html","2bc8da8eaadcee891fda06dde31bba90"],["/categories/基础/index.html","326b6305bc5267c50080868cbf37a6e0"],["/categories/基础/page/2/index.html","65481c58029ff8b079bb589c1ed6f7ad"],["/categories/数学/index.html","e5fb2fcf864697ce3054e4431835c6da"],["/categories/数学/概率论/index.html","bcbf9df238ce0e21e6bb73219178d759"],["/categories/数据结构/index.html","160b1dd4d4c1bae015a4e8066275b76f"],["/categories/数据结构/算法/index.html","1b255f53c12c78f4597550832e8fe32d"],["/categories/机器学习/index.html","5abd17debfc4e834dd4028fea3ef843e"],["/categories/汇编/AT-T/index.html","41a59203a52712617555c2a0453001c9"],["/categories/汇编/index.html","760ea7fb22c6e1faabf12c1b4b51ab96"],["/categories/汇编/page/2/index.html","2f6abfd0cf03aaa415cc1474b7c32ff9"],["/categories/汇编/page/3/index.html","c25f2075a6d254db854f4d70bc6ef0a0"],["/categories/算法/index.html","4039b06ce8567a886276ebe3eb634738"],["/categories/算法/page/2/index.html","bd1ede5f2a0e1c64a4ef0372aa087457"],["/categories/算法/page/3/index.html","1b217799bef72ef6d587efd6db11f78d"],["/categories/计算机系统基础/index.html","cd9825ad610471194addd064a06fb542"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","81540c084fb756b1a9f1bb2b6a0e134b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","0769cafb121c2d9ee68616839899d604"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","09ab7fd9bc2e8e89365c7c4ebe71472b"],["/page/11/index.html","93b38552f5e032db90e9fedb6ee71a54"],["/page/12/index.html","bbce9b3edc40499c77708558cae6b288"],["/page/13/index.html","dbc512eb586a90b7fe36f6bef2cc25bd"],["/page/14/index.html","2f0d87142b32727b09cf8ff2ccda3fde"],["/page/15/index.html","2e9dae627df826f4d45f1dbd7e55564f"],["/page/16/index.html","f404fa27090feff3d9175a956fadfed6"],["/page/2/index.html","7371821fb18f0796d1596f03f047aa01"],["/page/3/index.html","6d266e36356e7e1dfbed8e53978eca74"],["/page/4/index.html","c737196d24a5ed4635bef7cc018eb105"],["/page/5/index.html","43c8cca412943c3758d86d6b88770d55"],["/page/6/index.html","2940b628f7ee0361ca961fa60ec569ed"],["/page/7/index.html","559a115f9e5a8e23a89d9250bd14cc9d"],["/page/8/index.html","ecf3459ed02418ab32a810168fe31d5e"],["/page/9/index.html","d227c1918a9b9f769e01e904b18079b0"],["/post/10919.html","b4ae68a2a33e80556996b5798ef74ce1"],["/post/11051.html","0bcedee55071fbbedc82720e27ad1d4e"],["/post/11306.html","5006725e2bad54d5d26d9592fe86b085"],["/post/11491.html","7c633e7ec29ce98d8d20a7b3708d90e7"],["/post/11799.html","b88662d0733b7bdb9982172b8e367aae"],["/post/12334.html","23c66267111c47f73aadf8f5bcbace4a"],["/post/1326.html","838e633026d50f134e2c828a7e0d5277"],["/post/14379.html","6187d945dbd13e9191ed051acbf11a7e"],["/post/14511.html","14c7f357d9ea50d7e91727cbcbf0ebed"],["/post/15201.html","9cc7daa11887fce0ccca9a13d810b1cf"],["/post/15425.html","4c176c0eb05cb675f73699aab66df0da"],["/post/16107.html","8e6b2a23af6b3ee07ba26dd31fe6e69d"],["/post/17862176.html","0f018029032e19bbfa1efd516a8b5bf9"],["/post/18431.html","41fd766d9cd10c9cdb9d7ebc04885d41"],["/post/18912.html","7b8b09da750e4641d314db2e9c679076"],["/post/1b9c8662.html","a8375339f7caec83e1acef4f086daf68"],["/post/20198.html","46b17e86070df8fee9fd80ae06d74ba1"],["/post/20ff5ccb.html","5e5954cf728b67865569502fb2dea079"],["/post/21624.html","b20e98e6248daff4f3d040679a3f88b5"],["/post/2170659a.html","d9e4ee7579c6d2bff0515fcff3ea73bc"],["/post/22102.html","de7b5a3c10d3649bcce2d4e2cd67cad1"],["/post/22493.html","63d390c6d82cae53eb7281d810508cad"],["/post/235252ea.html","3e22d2b15eac1ce7ecfb5fccb5be8c4e"],["/post/25699.html","f12f0871aeae1ffa0e79eb82ac02f1a9"],["/post/2647.html","d50b9c2bca8fa7fd73bc55ac4ecc815d"],["/post/26477.html","7ac557ea97fa3e238bd05c101a17457c"],["/post/26671.html","79af588052db12f4eee358e2aa29021e"],["/post/26737.html","da31dcc2dbe9e67e61ed93c3ff114923"],["/post/27045.html","1d46a56e733525d6f854a4a4ab3bfc75"],["/post/27621.html","50ba677a98476f375dc136849306ea20"],["/post/27890.html","207b7553c80667788002fb1b53134ea4"],["/post/27980.html","06d8a8dc859f99dc994fcaf6523e0d43"],["/post/280b588e.html","6b13b0fe610a09c6e4e3b88c67e9558c"],["/post/28579.html","4801299cbc9554609e42f8f399392c63"],["/post/28877bf.html","489e6115ac1f8dc713c5ea7e2f3aabdc"],["/post/28954.html","0190e38d728edd70cf4fc9248ef1df8b"],["/post/29378.html","005c3889ac1142d2153fa5106b2fbe7e"],["/post/29949.html","1ea8802fb4f9c2f2601a42690afc7ed7"],["/post/2ae43b86.html","6d9a14e694ad763d447b49db611845ae"],["/post/2ba82a45.html","c076666e050282aabc597d931a0decd3"],["/post/30072.html","6ecaf09d4c0abee01762dc1d3007adbb"],["/post/30479.html","85d0936ed9c0762fb9a0e824eda298e8"],["/post/31a6b40.html","1fb3ab2875320f91f53275c36ddd8d23"],["/post/325cdbf2.html","1c6bac6b25254aad7da7dcf54fff8245"],["/post/3319ed9a.html","8f578164a0953aca7916a9b16a67193b"],["/post/3320.html","f93970fc157d9b523c87f91dd35102dd"],["/post/33cb1151.html","d7f922b9a38658a7995cb8e1665c4227"],["/post/34811d5f.html","135171076ca8e312df9abf0f3b766a8d"],["/post/348d4e04.html","0d2a7ed4fb698011bc0b90cdf506898f"],["/post/3526.html","7ffb91ef17819a5eab8e54712fb423c1"],["/post/35532.html","034fbfacf148d894b3cb66991c1ae100"],["/post/35848.html","c5250c8611a333c6728b009fd65e854f"],["/post/37318.html","92a3d70774c5037dabdfbd1936312475"],["/post/37663.html","f23efdaeb1678b4536d6433c5ff1931d"],["/post/38035.html","dd4f6d3ee8cd38e1fa0bff4d987d89fa"],["/post/38072.html","27661dc17be675d343c52f96dd7e53f0"],["/post/38145.html","7bda027b76990edb55579512eb2c4f9c"],["/post/39968.html","c9a6feee18f56a30d3089ea964acd5d2"],["/post/3de4bc69.html","c3af41798f2ab8271958340deab62a01"],["/post/40583.html","b47edee779949bc46c747747bec603b2"],["/post/40997091.html","4a005c4e98c4ec96653cb80ffdd1ee8c"],["/post/41129.html","9bb3bfc592b89723c13148c7f88dfec2"],["/post/41763.html","b86202b44812af0b55d56d7f405cec74"],["/post/41829.html","a4e74caecddc49edf323b0b318a2e148"],["/post/41840.html","b6af2af2e773133d7819d73ea030583d"],["/post/43817.html","8a38f6b8523b25d3dbb4823443f1110b"],["/post/43878.html","af155201924be1dd9b0195ebdd2e67ac"],["/post/44250.html","11f85bcb1090ce2e96dfb6c23e4f05e1"],["/post/44336.html","511adf73883476998f2308ade9c6138d"],["/post/44454.html","88b3ff090528c440af9dadf5f4dbac0a"],["/post/44487.html","2021ecd3f9c4d1499408c60b555c1aa2"],["/post/44914.html","e6091e275e4871a5e1a1820b675ed6d4"],["/post/4551c130.html","d16ec099cae49e40ee17fa3785e4686f"],["/post/455a4c92.html","cce8023a2bb59b76664eb308fabb280c"],["/post/46466.html","ce1bd167ae63750c9a66bf3e38fe842c"],["/post/46925.html","155565c8004456a017df6fe5696119a2"],["/post/47075.html","a56c6a527be49459f29fb809506032cf"],["/post/48220.html","771858ebf607755f880416af51dc072c"],["/post/4b1879e3.html","28d1180613833eeae18305716f0fc293"],["/post/4c720881.html","7004141b37fce20982c26b26db06ebcf"],["/post/50daec4.html","a6527404c32d4a3abee77f256cb11ea3"],["/post/51491.html","57f32c3bfb0d1c58a6c06ffee75af1f0"],["/post/51e63dcf.html","52015229e3be0d0e934ee7857836abba"],["/post/52078.html","e9a461ad87f7fb8dcfd1acf8c06f7fb6"],["/post/53677394.html","88c1ac5cd52451c6ab5e5aeec37530e8"],["/post/54300.html","e692dc5de83f7196efe92854e64ddabe"],["/post/54612.html","9f3477b7a22cc441d8a786e64974dcf0"],["/post/54613.html","2dbeff0d1df69ff97e5a3cf1a97dccc6"],["/post/54708.html","21bc8e198ef75a49e13a52f92d9a1267"],["/post/54778.html","5e96e7aaad6f933b7c2c458f31e199cd"],["/post/5490.html","f135454c976bfa6542bcd5472d5186c9"],["/post/55046.html","5d543012e5ec7b9573fe81c89de5b07b"],["/post/56929.html","ba0e23c8a4be94b7f78f51f9ff6ff38a"],["/post/57339.html","9cbe38001971a13dc413a65369767fd9"],["/post/57449.html","8482cf5e50ea174509781f8f0d694ef6"],["/post/57453.html","d6268a3a2ea7294d5dd54cb41c746a46"],["/post/57671.html","6b37c0825e5223641be711f413f86318"],["/post/58313.html","b8c90a7dd1369e82f3ab84767a4723ef"],["/post/58481.html","c4ae7eeaad5b383564019dc3a6d47246"],["/post/58986.html","d534714c7d62de39fbd7c51579e5ec5e"],["/post/59431.html","63800ad65a25e84ca7ade0862941aae9"],["/post/5951da65.html","ebd757ccc0262991dadfa870dc3f569b"],["/post/5be7e977.html","832e77e9c621b53e3d0e565571345027"],["/post/5f9e4eff.html","69aa910567b6128dffbce02a17e37e53"],["/post/604b49d0.html","90c187e9614159fa0df8c11badef2c4e"],["/post/61312.html","e9e2054b764d5150728827a01a7804bc"],["/post/61738.html","54d2c657d8353c6b7c1d0c5576961ba3"],["/post/61809.html","deb832c07db9da783b07ea388397e83e"],["/post/61eaf19a.html","5c8da7f7ad4ba2d4ca43ffd05bf90c36"],["/post/63002.html","1375aee5e189fb9f164ac4bd8f02f20f"],["/post/63711.html","c61a80fda285aa2f5af9a2b693d102f0"],["/post/6587.html","4209f819bb5fb9bebcca999fad31df7a"],["/post/6589.html","fb2285f202ab6164d0e4115fbc33d70d"],["/post/6880.html","37d8b975cd8208baf5dda1cb710a4b3e"],["/post/70263071.html","723595519e091ab399cd291ffd50e4df"],["/post/71038564.html","7a4e186aa7b7eb260e2d9e8ff4ebac9a"],["/post/7119.html","c5a7c3a8c3ab6f708a739fc49707ae8d"],["/post/74e7fdff.html","b70d1e2e1700ac172b4c9369bc36f380"],["/post/7502.html","30d17e8495930a042a458c94c6b050b4"],["/post/7564.html","f06c941902850479c3332270d8bbc13d"],["/post/766f9b60.html","28f44ba1932129c2e8193dd4640f39ae"],["/post/7ca31f7.html","2444b0fe1eff083263596a507dc0f61a"],["/post/7d1c86da.html","4da5cba6b733195dea28afb48114afec"],["/post/7f3bcd7f.html","09ceb22837a3ebf25ed429f944cbc13a"],["/post/8039.html","d39023266166de9809a10372b2bdbdeb"],["/post/8050.html","368c3f51d60a57fd6b3e2ba53e3c8612"],["/post/8072.html","e90e27aa27d9163e1c874dd9fd2845e9"],["/post/8274.html","ac551c755c39f9cd05448fd51f7165c8"],["/post/8372.html","b63dcf792412037bf5486525909797c9"],["/post/8498.html","8d49c8f73b861cb88bd0d03df509ed5d"],["/post/85b4e13b.html","e02d42465943090170f0f38e9615e2d9"],["/post/912b2566.html","5555a0839392a6a4a9c4379b12cd3d98"],["/post/9187.html","110ce2fd9a93134bf7ecb35494c2479c"],["/post/9197.html","14ab06341bcc6f6c3f8aa3d970fafb4d"],["/post/94ceb2fd.html","6bbea8e0a98607e8ae8ef67deb7f835e"],["/post/95495db.html","f2afbd14499ba19cf534cb7e4d73fffa"],["/post/97246020.html","dc765c65f0f5d4c6ea9a3a9642934617"],["/post/a3a786d6.html","7e05a6d3e00996fea876bf8c78115106"],["/post/a444b428.html","41cadc57f694bfcadf5389ada1cb0173"],["/post/a50b8908.html","02b6fea3a9fa4f57849252902f260b85"],["/post/aa1eade8.html","ab15b614bce3fb5abbd87d9f24f31c98"],["/post/ade8c6d6.html","7bb1ffbfc8cf011e2557a94159542a4b"],["/post/ae8362df.html","306835f8e7b96845ef412028c5758f9d"],["/post/b4c1d206.html","ce0aa4396d8d79b7b34a69e4e2903a8e"],["/post/d431fab4.html","4d4fb60ef395e5cc38ea58c044e975c7"],["/post/d5381517.html","eab1c38fc2a3d87100b9eb73cb5ebd8b"],["/post/e058ffd8.html","979e8ae499c46c05fba4a25d044a1a4c"],["/post/e0f8cb74.html","7357785c8a0c61fd4bf4b3f0b0d5cbb3"],["/post/eefe591f.html","53a0461733588acbb4a1d9b84fbbe89d"],["/post/ef296a07.html","355063818e44337dd905ebdc92cd6ca3"],["/post/f201f9fd.html","fd8184eeb70b5d4f92f37f9e4127ba29"],["/post/f79e4123.html","ef4bc8b764592baa277529fe2029076d"],["/post/f8648a1d.html","235c5174b4cf39f630fbc1ed767aa157"],["/post/f89cb603.html","ab84bf7e079e05739ae3d8ddcfb94d5b"],["/post/fa288682.html","3f9a1ed787a6e0aa29312ebd667cc3f3"],["/sw-register.js","c52bf191d65fbfd0713f6228f8a280f4"],["/tags/AT-T/index.html","4df6fd6d366de21c9a97ed5f406a1658"],["/tags/index.html","b87215b8f44789c9e1d3d49319a824b1"],["/tags/动态规划/index.html","b5a1c413b3f24d054c5f838b680ba8c8"],["/tags/字符串/index.html","010bf5b640145d42483856527d67647a"],["/tags/字符常量/index.html","3efa7a63c5cff55430527ba4e22e2d5d"],["/tags/快排/index.html","803c1503bab5fce87db4aa1d399dee63"],["/tags/排序/index.html","5ae990a40cf949737b97f063ddac86c9"]];
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
