/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","3bfb3768d6e1aa9ac7f62c2d8b4c1c9e"],["/archives/2019/index.html","f7d755b4f6bce4db667ea8b61f80a555"],["/archives/2020/01/index.html","8d0e043bf9d0545f66b2d41ebdfbf015"],["/archives/2020/01/page/2/index.html","067724cac18573be12a7822c82a7f459"],["/archives/2020/01/page/3/index.html","fd4a4f0a225c498ec4d4c17a35ddc952"],["/archives/2020/01/page/4/index.html","a9814a9f1292dc8d02b691306c888eea"],["/archives/2020/01/page/5/index.html","485526dd3e25357b91182a564bec70a7"],["/archives/2020/01/page/6/index.html","606c454b6a7588cf842c3eceb1c73aaf"],["/archives/2020/02/index.html","e73e2fb656cbaf71495bd9a705cb1078"],["/archives/2020/02/page/2/index.html","2e08c7039a329c35b4635252dce8da6f"],["/archives/2020/02/page/3/index.html","ed6a31f009101c8035cc18e6c4f8a422"],["/archives/2020/03/index.html","932935ef9525444158c2862a853e71f4"],["/archives/2020/03/page/2/index.html","069a99463d831a98293d8793a30f1e22"],["/archives/2020/04/index.html","ed2bb85da0910ddf4c83db41cf7458fa"],["/archives/2020/04/page/2/index.html","0f6f2e317f03a332c168af93a07f011a"],["/archives/2020/05/index.html","6381ba2d4a05f0b018f8ecc321f752b0"],["/archives/2020/05/page/2/index.html","1812516877bf9d87320bb32d61f3d80e"],["/archives/2020/06/index.html","ed3669d467fdc0e5dfcbde8ce805a616"],["/archives/2020/07/index.html","7ce635f13c12db2be043d1cc81c1156a"],["/archives/2020/07/page/2/index.html","54010277451381383ab290dc8c53d989"],["/archives/2020/08/index.html","660aae1c233cd06ddce32731c2807a28"],["/archives/2020/10/index.html","000142a9c3d011f36d1b873d6341cf06"],["/archives/2020/11/index.html","7f5b394b11a98409f9e2a384b4ce2c37"],["/archives/2020/12/index.html","5a03bd5d7ba92ada2bcd6d7ec66fd1d5"],["/archives/2020/index.html","a5b318325434b78a66d81dd0d46f6afb"],["/archives/2020/page/10/index.html","dc309a4b779367babd7aa46ced55c1e1"],["/archives/2020/page/11/index.html","3aef37a8faf72c145ae9c545ad24dd48"],["/archives/2020/page/12/index.html","e699ecaf67ff2d1bf05b0a5cb599d932"],["/archives/2020/page/13/index.html","e44eb4d00f6ad7631d27c31cb9b08e5e"],["/archives/2020/page/14/index.html","06e6dcfb4dba2ecdfa858d383f691113"],["/archives/2020/page/15/index.html","19adc70184d7fd9f62c2c1c94f23a276"],["/archives/2020/page/16/index.html","fd89f921d6f8d420dd8e0b43a7d47393"],["/archives/2020/page/2/index.html","f7fa0efb2a30ed202d529b32c5997171"],["/archives/2020/page/3/index.html","9ee68237b7a5d44ad53ce0b49b94da98"],["/archives/2020/page/4/index.html","1ed2e5451cbd35d8912ddac6e910340b"],["/archives/2020/page/5/index.html","e872a296090edbac5198fc9a2d88a152"],["/archives/2020/page/6/index.html","e12d9837113fb5acb7ed6a299568afa8"],["/archives/2020/page/7/index.html","1ade907b213126525338f5e4a6295dee"],["/archives/2020/page/8/index.html","5c38749afa950b67bc6d68df40905115"],["/archives/2020/page/9/index.html","4635be8cef804d77d1ca37b763a88419"],["/archives/index.html","bf7ca9dbb22de791326f3dc64456f5b4"],["/archives/page/10/index.html","963a7ccfb6ed73730808b6aa2f5357e3"],["/archives/page/11/index.html","7bd15fa4a5492723abf374760b6a9aae"],["/archives/page/12/index.html","1dfe235ce01b6a193a930cfd5065ad91"],["/archives/page/13/index.html","ec2e04490a7c73b392f2711f3ccce60a"],["/archives/page/14/index.html","de3857a96c6e6985606105e1f975a8a8"],["/archives/page/15/index.html","11d08dfcd18750821520d7b13159933c"],["/archives/page/16/index.html","ad00f65e65c42ed038ba181429d4c0eb"],["/archives/page/2/index.html","8b8aeff197a2d6cd77f665116214f67f"],["/archives/page/3/index.html","0ea1e6ea5d1537aad2c708a6161b8b68"],["/archives/page/4/index.html","86d0ac3ed083ce62f571cc9dc7855ed1"],["/archives/page/5/index.html","c01360977ca8f5ed12a3e895c978f804"],["/archives/page/6/index.html","15f8e80f853aecf8dc3c163e06f6dfc9"],["/archives/page/7/index.html","b0510e82ebd6d842d7d5126a4bb3322b"],["/archives/page/8/index.html","8db369da1736fcfa17804bf0764a026c"],["/archives/page/9/index.html","b66eb4fc93554762b1ee28187a18ab00"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","f68ad9bea7008d270d5e1dd816992dd4"],["/categories/Linux/page/2/index.html","f514059cb292ee27288828be9963b7c6"],["/categories/Python/index.html","02fcafaf8c5a4dfc1cbb11f15c2d8b88"],["/categories/c/index.html","c6e96ed6fc10c0cd73e5ff26f7290f11"],["/categories/index.html","a62c50f5a3d9675ed624cebc33d3c37c"],["/categories/java/index.html","9bf17b081ce5bb8492cda2a7446be3b5"],["/categories/java/page/2/index.html","9cc48829a6808821e6698da8d0e3f8d1"],["/categories/java/page/3/index.html","f3bec9b1fe534c0dca950a5ae046d65c"],["/categories/next/index.html","04cf5cc80ea3494d22662fce2454a7d9"],["/categories/stl/index.html","7b452b13d7fcb3ece8a563a3049e3784"],["/categories/windows/index.html","0e273d28b2b584bd8947c538df7fce9c"],["/categories/基础/c/index.html","1c1ecf080622696981d10b774baa3610"],["/categories/基础/index.html","ddee0a14d3f2e2267f3747f0f7216555"],["/categories/基础/page/2/index.html","fee7697b720fdcd507a68ae3bb330e2c"],["/categories/数学/index.html","5d998cb24e4d475a78c69b165df23552"],["/categories/数学/概率论/index.html","51141b41dba8efd2b9a25363214b8828"],["/categories/数据结构/index.html","3b49ac0c0cac48672aaa1617b8bef646"],["/categories/数据结构/算法/index.html","45aa048b48b043838670ddff64977e06"],["/categories/机器学习/index.html","c7086b9c0089ea83725cabdd977d74d0"],["/categories/杂项/index.html","e163c00172df6f07cc433b2412ff76a2"],["/categories/汇编/AT-T/index.html","a8c615baf44ffaf7c5fd92dd41f293c7"],["/categories/汇编/index.html","4746122eb9bff535905823a0acce66ae"],["/categories/汇编/page/2/index.html","9a9d3030267b92597ed8c32b8b06cdfe"],["/categories/汇编/page/3/index.html","9a288d6c2acb50f6826fe394d5c2f758"],["/categories/算法/index.html","b96845581aa624fccb039756d40c9201"],["/categories/算法/page/2/index.html","e52356afa1d614a4f37a82faf939c566"],["/categories/算法/page/3/index.html","e6bd1a70595f8547ab773b02d5f2c428"],["/categories/计算机系统基础/index.html","dc6f0b8c62a3c74481e60bf8145cc624"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","48910b0199add34678d41b6aa43a834d"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","9792cbec3f89e1791d90af434123eb9e"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","2654deda2fc5ab09ace9d8019eba17aa"],["/page/11/index.html","755dc38ee8fb1cca004649fe9dcb3f32"],["/page/12/index.html","89cd661bf9a6fd6ab62f1c2063094973"],["/page/13/index.html","aee183bccf277121afc1de98aedf1024"],["/page/14/index.html","e82a3471639d53dff2de8bf9b534a774"],["/page/15/index.html","2dc641f14866528aee281917798b57e6"],["/page/16/index.html","ae8be873ef9c8f141fa990d8954f5698"],["/page/2/index.html","240f1f2eedbba69468585374980c9aac"],["/page/3/index.html","e6eb6e031bf736a3425515dfaa5af768"],["/page/4/index.html","89d5ae024dae5431ca86752645dd0faa"],["/page/5/index.html","cceebd5222ac40ea8646dff829a1082c"],["/page/6/index.html","cc8e77899e8f261135d35bff1600fe48"],["/page/7/index.html","c8e4c3cfd494b75106f73492b0393003"],["/page/8/index.html","2399be38680740ebe920d0aa32eb5c60"],["/page/9/index.html","eb940e83b4ebc652fc1b6dbe7f15710e"],["/post/10919.html","29ef813f31bd16e207c7691dc1340746"],["/post/11051.html","15c70846d765d822053cf35cfc1c4b78"],["/post/11306.html","b8fe3a6e5974ff330fbaa8996d0ca97c"],["/post/11491.html","6bdbfa17bde741cfbc10572246f14219"],["/post/11799.html","4da357b2c6eaa484924177e86cff4912"],["/post/12334.html","68e900c1941e08c0b34212270044825b"],["/post/1326.html","b481e5100a37601bb16d7c00578eaabe"],["/post/14379.html","fd87ea5642821ab13d275313abd932b4"],["/post/14511.html","b62a571d44fdc47545727b53552af1d3"],["/post/15201.html","46f4f3bc48c904f7fc1dd52e9e865f08"],["/post/15425.html","e5b09a79fe3ffe1686b909dbf248b65e"],["/post/16107.html","d0a9b9170195c6c262f7dd6229e512bd"],["/post/17862176.html","fb6a6ed29ee96627c3518005717b9085"],["/post/18431.html","e365580ff8d1989e574ba77783c7fbb5"],["/post/18912.html","4b1fd9ec67160067aa92a7e674add47b"],["/post/1b9c8662.html","c1c07eaa70233490dd9e14764a6f2789"],["/post/20198.html","82c510ebcdf154e1a013f22fb903f11d"],["/post/20ff5ccb.html","e239685a8b814b5014c5bc15aeef2bd1"],["/post/21624.html","43962cdbbe689358f6226d3153b2f557"],["/post/2170659a.html","743db031b94afce03aa8c6361737a808"],["/post/22102.html","50df0375c35c7703e05c3658928c672b"],["/post/22493.html","4104deaae5d6fa70bef662a65c555276"],["/post/235252ea.html","e52c0fa1f73ed112eb6f94df29629a4e"],["/post/25699.html","90f8bc46d8c309d4e4e42c366e4ede9a"],["/post/2647.html","58ace1f2cc12d7faecbb96b1d8fc32f8"],["/post/26477.html","3f18c779028c55262fe35bfd96927c93"],["/post/26671.html","e190290d8df04b55518cfc663a0026d6"],["/post/26737.html","fe22056e763b0eefac1d56335a3b7229"],["/post/27045.html","bdbd539969db24928390536fa64955d8"],["/post/27621.html","9ac5ee5bf1911d2048d331fb309dceb5"],["/post/27890.html","078cb39885742f2034c6cc1ed9befe99"],["/post/27980.html","2d1d478ab657a8283b12be3d4339f7ab"],["/post/280b588e.html","40d09b76d8ac2a65caabd68a293197dc"],["/post/28579.html","71fe7c445052054e333b0888aafc29ec"],["/post/28877bf.html","4a3ce5c4f612f6651ec8deffcdbabb9e"],["/post/28954.html","58db04ed8b59c8416776358c5c3450e7"],["/post/29378.html","e30c3975253c93421ea1a28aaa4c3ebd"],["/post/29949.html","1ab9dfd6b0aa557576352deb87d86e3f"],["/post/2ae43b86.html","374e69f1d306a06bb77cfeaa0bae9230"],["/post/2ba82a45.html","9e883fec9561440aadae0f55e1cb32d1"],["/post/30072.html","6c86d541c38db52bd7ad3af01a999ee5"],["/post/30479.html","02e16bac71589ebe4a9c7b0aa85d21da"],["/post/31a6b40.html","10305fb3ebccd8617907fecdb79b0fc1"],["/post/325cdbf2.html","a05c1f9ff95fe04e81fc58101630e056"],["/post/3319ed9a.html","2ff1455ebd1f531dbbc8ad0a16aef3cf"],["/post/3320.html","2f45ba3b198972deb1a9f46a9f018b96"],["/post/33cb1151.html","562abea9530cf5bb75afef18d7968828"],["/post/34811d5f.html","889a22a5125cfb0442fe0a937f3fbd2c"],["/post/348d4e04.html","a79df57da40eaffbf23295e238c01930"],["/post/3526.html","6bb009a06c9a8c7e590dedd94dd134de"],["/post/35532.html","5a46db7d42446d76da519cedffae1cac"],["/post/35848.html","043f4883d0d15acaf1ce79113be38aa3"],["/post/37318.html","058a72a952a780486711b8f0bf2ec9d1"],["/post/37663.html","a3459a51bc927c0c732e17f792972601"],["/post/38035.html","fd5bb1687168a917cc9aefcea25a5d03"],["/post/38072.html","30071d5f72bf761c42018c6ab8b5e56e"],["/post/38145.html","f9cc2dea17354674ac3a7b387914b769"],["/post/39968.html","4dd11711cb9b471c9be232a622b6339b"],["/post/3de4bc69.html","420aa42312f2eeb796fb9287d0c76c92"],["/post/40583.html","6e9db55f0897b32fa52a97b8c64fb421"],["/post/40997091.html","208e791d8931d967d712b9b6f7319dfc"],["/post/41129.html","2f8d9eb68361d1b340c5df70ad64c6e1"],["/post/41763.html","1156b760054c218905a42389820a379c"],["/post/41829.html","2cb8a84acb73a3984c29c2d3daae0aef"],["/post/41840.html","c69a1acfc74b6fe6a8781ed40ee0dc15"],["/post/43817.html","010a0da8546f111b4a034e05cfbb84bd"],["/post/43878.html","8a44a648e586e538bfaa1e3560b93ea5"],["/post/44250.html","327120af4409556399572056d92a94e8"],["/post/44336.html","bd4337415e9ddba189871607f8251a50"],["/post/44454.html","ec93126f0707fcab74e46a8496d16bd4"],["/post/44487.html","ae9c666646a228a17ca415300ec1c9c4"],["/post/44914.html","a0b2b50b733153660ecd666f2291becf"],["/post/4551c130.html","e2b06219f99aecdb887117e37f7049ec"],["/post/455a4c92.html","bbb8cc85063b7a05b5a6c224b6531add"],["/post/46466.html","c61202a3fd72dd40970e051ddc35e1fb"],["/post/46925.html","ab838a8aa1c89a77428e94d1ac9f9933"],["/post/47075.html","9de1b12d59fba2f4de45f01fb57a9982"],["/post/48220.html","e1469f468a80479d2fa000c83278dd4b"],["/post/4b1879e3.html","0c3b020dcdaf3fcdd23bf577082d9f4f"],["/post/4c720881.html","52c3dd9e513df0e0259042ae830837ba"],["/post/50daec4.html","9568f0b29ba622f05bef86583b3fa1ee"],["/post/51491.html","edf4151ca63b2cffe1381564a66e2903"],["/post/51e63dcf.html","79b17bb18a1a5b830adcd3ef32ece897"],["/post/52078.html","24f700a93bfb12a30ba71793079872cb"],["/post/53677394.html","640b84e03e9d109318bb30060c354859"],["/post/54300.html","637c989105e9d56501ce1b4148734c36"],["/post/54612.html","7b91d55bc2c8e8b89d0a825d8f2939bb"],["/post/54613.html","049b8e36381581a7446be5c6c12aee73"],["/post/54708.html","98d855f244cb0431d51eab143f64390d"],["/post/54778.html","b5c8c7aa2fe4b7a7580b8c87a3b05625"],["/post/5490.html","f5f0336a1a61438ea98b7decc78bdd96"],["/post/55046.html","8e2c563540a96b61955764235869f2ae"],["/post/56929.html","80e02999c77bf4d8d10747080bcdae78"],["/post/57339.html","a4bb94e69910a98c1cc5c67350811508"],["/post/57449.html","0775e114ce5f138472f34898ffe22511"],["/post/57453.html","51e2e7c57c9ec4bbb368fbe1c7dec685"],["/post/57671.html","930464d713fab490c90176508b56201a"],["/post/58313.html","99996709b9e264d172d25b08b423b6ef"],["/post/58481.html","38e9e95c7804c21316fee72cbcaf6ed5"],["/post/58986.html","65e4d658ab47c7935d1708687fb0ab9e"],["/post/59431.html","83d74f438675d742c8204e086f7d594a"],["/post/5951da65.html","9674c6f5150e94a88c4591a932a45aa6"],["/post/5be7e977.html","9965d2f5b40707abf702ee76af44f298"],["/post/5f9e4eff.html","86961f852201e6ec50a8b7892c48861c"],["/post/604b49d0.html","cf42d4818e5d0846c858b13749c5d4d4"],["/post/61312.html","b79002644a592828a99872144241caf7"],["/post/61738.html","b382cbdaa1e393fdb625105ad87e7a03"],["/post/61809.html","ddda8dad8e72a7c92bad9a825ae708a2"],["/post/61eaf19a.html","280d7d5d5579c077b0614772e2175437"],["/post/63002.html","85c51bc844bd078bf63ed440c6507767"],["/post/63711.html","d0c20db4767df07b922529b872df250c"],["/post/6587.html","9e8e3cc6ca973599bfb215baf5756781"],["/post/6589.html","a8bccd2f383862e6fc70d963f335c9ea"],["/post/6880.html","4b89dbcdd91d7b6ec12a660b118a3b0e"],["/post/70263071.html","f6ad7c28405b58febe91e0bdfa0d9426"],["/post/71038564.html","92c730a4b35fa7bb192e45c507bcc432"],["/post/7119.html","0c4c513015af4ac4f07230c5d60090d4"],["/post/74e7fdff.html","10e0e8f744fe098d5183432dc11e6d58"],["/post/7502.html","3ed454cc5d5c6e5197ab63a66f86c71c"],["/post/7564.html","440ba38ba6108f4e042b1a2e98440397"],["/post/766f9b60.html","268f48af0f961ebd327c7e2fd7ea5f9a"],["/post/7ca31f7.html","264bce642ede8467fe969c0886eccd67"],["/post/7d1c86da.html","58a3ec32d1fbe4c62dbb134151fb1b41"],["/post/7f3bcd7f.html","fe9d7a3985bff499af636900639eb8b4"],["/post/8039.html","75a7b16f0222237b536ccb996820d003"],["/post/8050.html","c7c7cca80b8f1ded1e4c10357f70daef"],["/post/8072.html","403f6dc9fc7178d3a889b4710f00d3c6"],["/post/8274.html","428482643dbf664093af4e1fd9954c2a"],["/post/8372.html","351fb7aad501b5d6ccd6e67d0c4941c7"],["/post/8498.html","b1c7a3af7d0c9383300e448ba01bbf30"],["/post/85b4e13b.html","6a421b8589918136fab9db701210d552"],["/post/912b2566.html","4a264f74d0056379e7719abc8c4c0121"],["/post/9187.html","d92fedc4c2ff8ce95e6da03b2a50456c"],["/post/9197.html","f2bed5f40476b0e17c03fdbd7ae19214"],["/post/94ceb2fd.html","a47afe67c48b95f848d9cd9f3275bf64"],["/post/95495db.html","9c78fc506ab344340bdafe4c2b827bf9"],["/post/97246020.html","2250f9ed39050d760566126c4aa30f6f"],["/post/a3a786d6.html","aaeae766d17203ab6299225941fa3eb5"],["/post/a444b428.html","39733301a231f8197991c053aa36d7d6"],["/post/a50b8908.html","136baef74334ec409b0179a2867b2a6d"],["/post/aa1eade8.html","d4c03a21b75ad50450f61aadab8866fc"],["/post/ade8c6d6.html","502e018305b1cd335de1f74e6ebdff76"],["/post/ae8362df.html","5103dc0a5a4ce21e2e39d6a730aff4b4"],["/post/b4c1d206.html","4c5b81b69230bb768a57982303bed6fd"],["/post/d431fab4.html","baae8f62baa0058619a9dfebb53c26e7"],["/post/d5381517.html","54fa6453063301f42cd8d336028bf481"],["/post/e058ffd8.html","80f2a529dea790d608383a5404ea7a76"],["/post/e0f8cb74.html","e1bfa22aa801c8f50043cf2a78c946f4"],["/post/eefe591f.html","371254028d05ed1dbfd011d0c096ee9e"],["/post/ef296a07.html","a314df59978974aab7bc1f41155a4a87"],["/post/f201f9fd.html","ed7130611a43e1085b7fc5d2432b0e3c"],["/post/f79e4123.html","8993ac951acaeb065fd9a2ab1c1eee77"],["/post/f8648a1d.html","0cd130220b6b1418495449bcd813f18c"],["/post/f89cb603.html","2e27e8ff9aaa507f2bdf57a70e6b146a"],["/post/fa288682.html","316dc46f14b9810235d2254ef2de10bc"],["/post/fb98053e.html","1ce212b5ffd25cb230d659d5656e6082"],["/sw-register.js","ed167da7df9bbeab7ae9d7075f3133bf"],["/tags/AT-T/index.html","bc4f45f600b11822dff7c2dc0232203d"],["/tags/index.html","9c6249715fba63752b2df6fa2c8c8bf6"],["/tags/动态规划/index.html","de22210ae5489e311ee9187d15329023"],["/tags/字符串/index.html","6c2f3426d3a201d824298e93f1192a9c"],["/tags/字符常量/index.html","86bd97da2594026cf6c403d29174187e"],["/tags/快排/index.html","9fb8c425be817af321a427b825cb555f"],["/tags/排序/index.html","c1518c789825dbf87f1bb7b3796620db"]];
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
