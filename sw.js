/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","000a4e019c4ff1356b4f038528237c00"],["/archives/2019/index.html","027948a06a9403c4131f48755dcd5e1e"],["/archives/2020/01/index.html","781ae30fbcf2fcf8c94dc3a906942fca"],["/archives/2020/01/page/2/index.html","a385efa9ccb0c3d8bd00ccb1d21b00db"],["/archives/2020/01/page/3/index.html","c3343ce94ce26e28d815dacab6a54266"],["/archives/2020/01/page/4/index.html","b5402b02a6f9054942dfcc77d204b626"],["/archives/2020/01/page/5/index.html","b6c442765dd01946270d7eae3ee571d8"],["/archives/2020/01/page/6/index.html","967c6e8a9c18b9f1fbe7494cb1e93b33"],["/archives/2020/02/index.html","19b0c0bb2bbb143861e4d92bd95f1d1a"],["/archives/2020/02/page/2/index.html","92dbb0851b20d03d40df8214bfc443f6"],["/archives/2020/02/page/3/index.html","70668733ee72fe565aa59af3bda34402"],["/archives/2020/03/index.html","5ff88875bba2ed95e047372e1f5d6aad"],["/archives/2020/03/page/2/index.html","296b9a20885330389b0920bce1a2f057"],["/archives/2020/04/index.html","f5f8ceaf38362535db4fe68afcdaa8b8"],["/archives/2020/04/page/2/index.html","9b8fc273844e83264f4639f44ffc4be4"],["/archives/2020/05/index.html","eaf5a8e790eeefcde2c26fb78095486a"],["/archives/2020/05/page/2/index.html","00d63680d56e660b53dae0e4ab66d722"],["/archives/2020/06/index.html","64836340f0127e66a0c1ed7d903bd6fd"],["/archives/2020/07/index.html","3b048d490afe20afd7d33e54ed349fdd"],["/archives/2020/07/page/2/index.html","207e39de1a1cd26d31ef5a95a9d2e810"],["/archives/2020/08/index.html","bbb371111bd11b2919a106ae53a97e88"],["/archives/2020/10/index.html","593d1982f0f876c1d6cf7fbb102a37ec"],["/archives/2020/11/index.html","db3fec8c14da2287078d709881888d2c"],["/archives/2020/index.html","08229b52111258842c1e018bc27cad25"],["/archives/2020/page/10/index.html","34c47a09a05bdce276f72052c5eab385"],["/archives/2020/page/11/index.html","6349a152ae9be4a20ce73a1ea82d440b"],["/archives/2020/page/12/index.html","ab65c6385488a88f70514b07c548edab"],["/archives/2020/page/13/index.html","aa2353363b23c99d4edf24a389f15667"],["/archives/2020/page/14/index.html","5066a74b4ce7170c784b8e4470229e34"],["/archives/2020/page/15/index.html","364e33aaf2546831eca5933791c82ace"],["/archives/2020/page/2/index.html","73f1b4f6d37a3c0c80f7445ae3d032ef"],["/archives/2020/page/3/index.html","ca05ba6bd6e5b1229b5229f3fe032e8c"],["/archives/2020/page/4/index.html","5ca04e95ab5a9678194dec9f7cc27755"],["/archives/2020/page/5/index.html","e730abfabdcfad27d0840e0c657e486b"],["/archives/2020/page/6/index.html","14a3fb4f0a5422bb4953b6a05c228155"],["/archives/2020/page/7/index.html","d621b2444612bc7e73fe3b69ddcc6ec3"],["/archives/2020/page/8/index.html","805fb780a86c3fd737368fb22ee6671e"],["/archives/2020/page/9/index.html","c02b272ffa7903075fcadd2ea4b9e0e6"],["/archives/index.html","33c4b0e631d728b41a77cbd77488e04a"],["/archives/page/10/index.html","7f2e70dbb6e7360254c559959eebce3c"],["/archives/page/11/index.html","359d2ffc036c91c15fa37ecbeaf7c9e4"],["/archives/page/12/index.html","7e4d0a17aaa653aed342ef39ac1047ff"],["/archives/page/13/index.html","9dcdc01ca4e6ee325a59c5821a6117d3"],["/archives/page/14/index.html","8808c1bcc172984d2a8f4295d5a79251"],["/archives/page/15/index.html","97c349290c838bac830f196437939606"],["/archives/page/16/index.html","e3dcdaea4d8ff2e28af49415c3ad838a"],["/archives/page/2/index.html","6b9e69267a8ebf710dc42fed83bd2602"],["/archives/page/3/index.html","3342bb21ed7414a1b432d4ee45ebec78"],["/archives/page/4/index.html","019c0314b27a5292e292a5c33c11592f"],["/archives/page/5/index.html","87651e8595b76b2d5edca5e8e7dd1cc9"],["/archives/page/6/index.html","310980b20cc4f9b0f7b05d5b50d90af1"],["/archives/page/7/index.html","f8a077a89dff7a3511e9df0c7a1a99a8"],["/archives/page/8/index.html","51a1192b2154ca52db7a8f1018347574"],["/archives/page/9/index.html","273c69a84febe0c68c816b377ef78bc2"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","166d7f82f39da0b26132dd1f0b9c0e42"],["/categories/Linux/page/2/index.html","069f77242bb3e7d3a645d5183de5b967"],["/categories/Python/index.html","6754f6626478a47cc801318bc99d7a38"],["/categories/c/index.html","0ed3790e0dc736996f0e4c3b41930ec9"],["/categories/index.html","26cb72d14a85ddd3ad313ec8e7b67b4e"],["/categories/java/index.html","b8b318be2ce3afa0d84ff83c8c6fce88"],["/categories/java/page/2/index.html","86bdedae2cecbb92ea39d0bd92bcfa97"],["/categories/java/page/3/index.html","6b6dcc00c45e31191ebfc91819ebcc06"],["/categories/next/index.html","d8753fe26148a244427082f60e10fb81"],["/categories/stl/index.html","e7bf64bfe980cd229e953f573429be52"],["/categories/windows/index.html","b14116eb953173e7a3292f2e8f6d9aa2"],["/categories/基础/c/index.html","11347da1a49563868d615ff5374b0002"],["/categories/基础/index.html","167e0291fd3c9bddba0c2b46ededaad7"],["/categories/基础/page/2/index.html","eedb9940c54a109b306286e27b5731bb"],["/categories/数学/index.html","a0b7643a561cf12678d24520af889aea"],["/categories/数学/概率论/index.html","7b05d3f3500f7e14739572243e7ffcc9"],["/categories/数据结构/index.html","00ac40b72be5bfc5ea4909a93a025ac7"],["/categories/数据结构/算法/index.html","e5bcd8f22ac661778bacfcb23fc8d1ae"],["/categories/机器学习/index.html","d864ec3aa657da5024b23c31fcac8f88"],["/categories/汇编/AT-T/index.html","03d26dde5cb1df452d3837b29d0bb349"],["/categories/汇编/index.html","6b46e777c2ffc97cc1a76afd9341f5da"],["/categories/汇编/page/2/index.html","ec18b0bd3609d7cfaba0f1f8ace92574"],["/categories/汇编/page/3/index.html","a7c23f0c9b7bb10cf5e13df24b69f6ef"],["/categories/算法/index.html","7559ec3c01b244a7315cd8c96dfe4875"],["/categories/算法/page/2/index.html","102b3a08038d699b9fddede2f034a6e4"],["/categories/计算机系统基础/index.html","d557908b89c920b82496ae97b07003b8"],["/css/background.css","5c6178c8ff0af1605937030256334d33"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","7766197dcaf82864871b6c98b8606635"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","868c61c886cac67475edc8e80081b825"],["/page/11/index.html","3bfb8c1efa483cde463c131c699377cb"],["/page/12/index.html","46593ec8b0d812b3e2e43e1250098d73"],["/page/13/index.html","bb2fe03c620e3fd99e4d4dd45b4d71df"],["/page/14/index.html","a8f69a40aed3f468990a19f7e705bc71"],["/page/15/index.html","ad78f2f92883f6320a1effeb368d50c9"],["/page/16/index.html","3818caa02a622ec32d1cbde12efc60f7"],["/page/2/index.html","4bbd9b6fc9aa2a7fb8960a6c8a6e240b"],["/page/3/index.html","d9349c6d4941f479e757a48b00f16665"],["/page/4/index.html","52d380aea20b033c4cdd29661a05ecba"],["/page/5/index.html","61f9dca143e676482be0b6bc7a15eb4f"],["/page/6/index.html","1e0781fc549d9e2c5a9ad3d83701b7c7"],["/page/7/index.html","8a905508f3156330004a8f87a4f53e0f"],["/page/8/index.html","39facb4f24b34b79e29e978b295e249e"],["/page/9/index.html","0dc46af357e6c5ff18dc310de18b8538"],["/post/10919.html","5313b3ce6f1dd3b93e4aa2d92a2f5797"],["/post/11051.html","dc685a49576aed6e85993815639fb69c"],["/post/11306.html","d5af1ac512d694fd7fdd9bd3603a5eef"],["/post/11491.html","d4f7725c3b871a51df251c0d957262d9"],["/post/11799.html","91d82b5ec48b4732f660f9361cc082fc"],["/post/12334.html","2bf20689c9bd5ca2651b514f3a50b76e"],["/post/1326.html","32951c366690a7a535cf4733be6e0fe5"],["/post/14379.html","cd78e7937b6e15f383ea11dcbe79364a"],["/post/14511.html","ea735f3177144246b43eb5c0151ae001"],["/post/15201.html","e4a2840e76b2d9f382cfd8637d85f034"],["/post/15425.html","cd96d798d277e3a53010d5b6cd7f180d"],["/post/16107.html","dbf9589e829d601db735c273f4412373"],["/post/17862176.html","d6fd7c511a3aeea15224fca2a6fd9f5f"],["/post/18431.html","2e0c8bb6c969cc1e3846f7fb1507c578"],["/post/18912.html","74fc1894d206f95addeeaf5b7b618e5a"],["/post/20198.html","5a13ef80fcf46069c1f5bc784685e597"],["/post/20ff5ccb.html","b48c128ae35158035e940436faaadbf4"],["/post/21624.html","bfae4c7460384ac9cd8f0d5250d64b07"],["/post/2170659a.html","e8e3c15e54a146b92aaa353977a2f605"],["/post/22102.html","c9852154fa1d4b998cafe92dbde9c3f2"],["/post/22493.html","fb17f5e576af9a26754a26e4d3469522"],["/post/235252ea.html","2cd43dd72fc6c214baa977dd3e9c5553"],["/post/25699.html","f9f751c8c0b10c302f20f446c5c49c25"],["/post/2647.html","fb41e62ce65921743e7405315188c5e2"],["/post/26477.html","14d6e3f6708ebc19cf5e551f9ef9eefa"],["/post/26671.html","054b9127f90aa1a5349c0e1053922095"],["/post/26737.html","82757c5aef37d671cf8d23c7b15414aa"],["/post/27045.html","2bddd9b4f7a0d5b5d4fd0ffba5eb2ba1"],["/post/27621.html","95a145133feb239acd5e54552239cdf9"],["/post/27890.html","932105c8e0cdebf72cc4022feeee9de7"],["/post/27980.html","b6a0695d046c7d966f265f6ddaf9931a"],["/post/280b588e.html","a75f3a5fbdf9447ff6bab6049391e692"],["/post/28579.html","60fe447313cf5ba8ff67dcd0123022b8"],["/post/28877bf.html","1d91bbf31e46aac81d81dcbc54b0d7ef"],["/post/28954.html","5e8cebc41300b9dcbaad6d39455ce786"],["/post/29378.html","1525030c90b0d0977cd51268256dbcc7"],["/post/29949.html","9503c48fbd358bfbd87ec7071facd346"],["/post/2ae43b86.html","fb5809ae29b590ebd8e67dab4b845ea2"],["/post/2ba82a45.html","10d631b9da4d3c4967494d1ebf9a15ef"],["/post/30072.html","aa7a9948a1dc1857ae39cf31dbc0bdd2"],["/post/30479.html","75036d99a1a6e0f6fb62430f5721a40f"],["/post/31a6b40.html","fb42b65b419452b7ddef6f9c1d11da56"],["/post/325cdbf2.html","b5ae05c8734a6a51205e17b7e8e99727"],["/post/3319ed9a.html","ee42269e73f6203878dd62c010e0e9f3"],["/post/3320.html","94df8c35f118fa2bbb41a06143b9cd52"],["/post/33cb1151.html","dc3235d7a92c9bacbf92f9744b2dcd65"],["/post/348d4e04.html","d9a61a919f134018b5b4bd9623ad7887"],["/post/3526.html","af196588e9a7b41b201ba75ad9bf91f2"],["/post/35532.html","4da99fc6ccd96df36da19b861f170606"],["/post/35848.html","ba7f6bdc7afc4dcff4afa479486ef6b5"],["/post/37318.html","9c9432a493eec56b4058a52a3559546b"],["/post/37663.html","f582a90d3796ad782c401bc49cfe2243"],["/post/38035.html","88491fdd52e33a26ffe2dd02479d170c"],["/post/38072.html","9aedabc3457850690279e4010231f398"],["/post/38145.html","41ce6372730e64a73a0768be01cb0089"],["/post/39968.html","1c424bf19d24e61fd61418bc4df6e633"],["/post/3de4bc69.html","05ff87597a00168ee8f8529e4fbe3667"],["/post/40583.html","8a9d209b2f145bc2190b041fa287bb07"],["/post/40997091.html","274b243a4b255733f054cb1896c56b19"],["/post/41129.html","45c04a3f713182cf685b0d33a0450076"],["/post/41763.html","a431cd5ea692ee32fe03f5a7f36c9fd8"],["/post/41829.html","a0d467ab2106b42f7f00da05621a508d"],["/post/41840.html","4b6152944ceff2976711b5532c6f07b4"],["/post/43817.html","7049e3ae1e9daf07de5bab342c201d83"],["/post/43878.html","f537e748603d1e26520ab3381b046ab7"],["/post/44250.html","57c271fdbeb6140339aebca801accfe4"],["/post/44336.html","0966710f08d8b0a07ce44e78696cec17"],["/post/44454.html","353dfecadc5a686d05808f39c283c710"],["/post/44487.html","9f41aea9f90188f2a9001ce5ee6ad578"],["/post/44914.html","13e01758ea7c3420c8f4f18a117b2984"],["/post/4551c130.html","977fc0d96cf297d4d70896910fd9130f"],["/post/455a4c92.html","56615ac8a8d0a6535f1325a9349f4729"],["/post/46466.html","b6670399d8f277fb0722ab4cbc22df9e"],["/post/46925.html","de032ae81dfcb8b6e21b07479adf7a23"],["/post/47075.html","af97862820963ec2c70285b7e6e3330c"],["/post/48220.html","5339017bf55e684b315c24f421cbb8dc"],["/post/4b1879e3.html","a7a3715444ebc1fa3ca75dc450d7f0bf"],["/post/4c720881.html","6d2f5434fb8a00e2c4728e746b984ddb"],["/post/50daec4.html","c35bfb4520526c7b19048a7dfbb2db94"],["/post/51491.html","b2df0d333a3f74225408650770da1c97"],["/post/52078.html","2fed93f245f8aa3257354943101b4f20"],["/post/53677394.html","2314a4c276143d135949566f22ffa8c9"],["/post/54300.html","9945a1136cdb060787f99e647820c520"],["/post/54612.html","eef12b1d0b445840ab91ae0711e55c8d"],["/post/54613.html","619ccc29485acf7e14e3e69621dc9bd8"],["/post/54708.html","df168f53490d42cafc281937076bce8a"],["/post/54778.html","0e3e3ad5416140ed631237abf4e55ab2"],["/post/5490.html","d8c5365ea514d8dca75462410ca6c549"],["/post/55046.html","b49044d6acf6c076b29e7473c6310a6d"],["/post/56929.html","b1a7d9eb7b98ad24b59eb4fabbca4dd6"],["/post/57339.html","54cd988ffb4154b8990e0500e342d956"],["/post/57449.html","121bef598ee57db78f426f227c1cb10d"],["/post/57453.html","811a6913b2c8d0e0975100067173cb36"],["/post/57671.html","f783e19b849953705a665fbc9ae10749"],["/post/58313.html","ae11448f3f411d51c9ef81d7676eb8a2"],["/post/58481.html","10ff28380d71db44206665eeda8b6aa2"],["/post/58986.html","5cc654cd6e4091c1b8305c87ea38d36f"],["/post/59431.html","bc1c8af3c520e1738485ef68124bb84e"],["/post/5951da65.html","3f00f1a3ced328bed52561a57a123950"],["/post/5be7e977.html","9b96e0e957a6ff5705a0791691a318d9"],["/post/5f9e4eff.html","0637eab971bf404c30fe9059d72cbe35"],["/post/604b49d0.html","7ede96213bba56e58d5ee6ee70d90f26"],["/post/61312.html","01a847fcb5467a070a832a9fa22ef80c"],["/post/61738.html","bab11ef3f6c01e1abe4bb08d358b563f"],["/post/61809.html","7ee435f9d9002f550fd08140061a7c79"],["/post/61eaf19a.html","1b74fc457da27585d7990ecb6d23d4a6"],["/post/63002.html","41e6756c669b9725f380ab9a2511c720"],["/post/63711.html","a32c1ee57ec08da4b04cf2f5cf18574d"],["/post/6587.html","3d0aab865347e43b9b4d1f9348d73695"],["/post/6589.html","0b66358d3056d3d171d0d3dee968571d"],["/post/6880.html","20554978f69ee1b8e021e3b7114e7990"],["/post/70263071.html","0f720c556d84a3bb09ee4993fda4b99c"],["/post/71038564.html","0be43f2e1d2dbd2c5ed06493a259394b"],["/post/7119.html","1e7592f4e07ffd728bf23fc912066aee"],["/post/74e7fdff.html","081ed7d1b8e7f26a5497fd8a22b9a942"],["/post/7502.html","106621a508ef267be6325bcef2b8d22b"],["/post/7564.html","3ed7d0a0ff8b9c621b6264afa9264cf4"],["/post/766f9b60.html","aced077e69305d888b306588f0ad794e"],["/post/7ca31f7.html","7b1b7cb76c8ebcafcad21d68d4c4a00f"],["/post/7d1c86da.html","a0510f85d5061964e2a1dd41d10e3821"],["/post/7f3bcd7f.html","96dbc0af7890007c238ad8d9d552520d"],["/post/8039.html","22b983d08d6bb753235295cc6b6669eb"],["/post/8050.html","128599267e0d6a72839e26afaf77840a"],["/post/8072.html","3f2028c38cbdbbc64dc1b69fab60902a"],["/post/8274.html","5e2f950c02e7e5a749e0f84795589818"],["/post/8372.html","5a7d54a9802a40feccc45dd70707ba02"],["/post/8498.html","ae0e1de3732d8dbc6b3e0fd72644ecbc"],["/post/85b4e13b.html","ef9abd3a38daae5cbbe04a2ddf7b767f"],["/post/912b2566.html","aff0af8d03f25cd6bdc6e76708811dfc"],["/post/9187.html","e73c5d6456a2dc0d322e2d54f3ea8a39"],["/post/9197.html","d3df8218ab22bee4cc29b30b9986a9c9"],["/post/94ceb2fd.html","739df09586770b8dde17c90f2d3cd4ef"],["/post/95495db.html","bf42b872f65907e098bd2140bb2f08bc"],["/post/97246020.html","baed42186a94a5a6a53b591ab1a4eb68"],["/post/a3a786d6.html","be26c881e55c8f5b394559afc1420cbc"],["/post/a444b428.html","2fb59b996025f9a06c2c39d1eaaf63f8"],["/post/a50b8908.html","7d5eaaa75d50857f389821c603109aaf"],["/post/aa1eade8.html","1f94849bb63e206a483a05120bbccec5"],["/post/ade8c6d6.html","108a3fe31683c538c9c57aaf1082ccbc"],["/post/ae8362df.html","e346d27ca3966c1f019dd17069b619dd"],["/post/b4c1d206.html","358d4d991bf6d506de3486cd3e841d31"],["/post/d431fab4.html","d74ec184a001d3dc11cb5cae8bc699cd"],["/post/d5381517.html","06b98bf2049e86c3c2b96a0503d7e778"],["/post/e058ffd8.html","e31bb80d254dab747461a49a4ff62d6b"],["/post/e0f8cb74.html","1a95c4e3075f3a6953529e7bb9359da9"],["/post/eefe591f.html","66fe407193aa364cd634aeee13ace3a5"],["/post/ef296a07.html","5beaa2a799403418854cea98c3dccafa"],["/post/f201f9fd.html","f96fe5e0a18ad4f7958d52398ef6f4c8"],["/post/f79e4123.html","6b556c198ed4e8bb67026fdfe6619950"],["/post/f8648a1d.html","44fa393d742e7dd68881993f0027f3b9"],["/post/f89cb603.html","1bba8a95a8143f17ab818ddd4501086f"],["/post/fa288682.html","6bf674b8b8528ae94713bd968f59ab67"],["/sw-register.js","6ba19d82743fb9539b83801295f57016"],["/tags/AT-T/index.html","80408d2929d4fe70b44eede94bdf4318"],["/tags/index.html","2fbd7a8d3c5c918387b61e648991b666"],["/tags/动态规划/index.html","ba16f41343ada608362f96aa15d634ae"],["/tags/字符串/index.html","1234e4be86247a5b9ef1f35568955f68"],["/tags/字符常量/index.html","3a6116976ffd5ad5a3358a3d670e0fc2"],["/tags/快排/index.html","51de13464cc1392bdc8f664f9df1a2ad"],["/tags/排序/index.html","e0c7e594b6928479d608188bc813929d"]];
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
