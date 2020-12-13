/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","3a6b53335df6eaff7d933e171d7c27c8"],["/archives/2019/index.html","0b6ad6c36dab1619796fe7820c271171"],["/archives/2020/01/index.html","522f61b0178f3b256bc4fd5b037071b1"],["/archives/2020/01/page/2/index.html","e86a185481ef2e4d77ca00fb3e880253"],["/archives/2020/01/page/3/index.html","531d9d6dde6e8949e643f02cf6a68945"],["/archives/2020/01/page/4/index.html","b9ef4c07609e2d31f8f6d76890229223"],["/archives/2020/01/page/5/index.html","fe70e0e7358ce08cba5c96a7dca33a3a"],["/archives/2020/01/page/6/index.html","6ea7434b731c5d783f354911dc326ed2"],["/archives/2020/02/index.html","850501efe8ee040d7fe8bf34f3367485"],["/archives/2020/02/page/2/index.html","48846ea6fe6fd172dbcd80f320fba804"],["/archives/2020/02/page/3/index.html","5cda233cd098486e72f2b7ff981ade54"],["/archives/2020/03/index.html","baf73f174d55cfc65884bd0b424c26f1"],["/archives/2020/03/page/2/index.html","e434975c766f82d532359f4082553691"],["/archives/2020/04/index.html","0adfa440f811085817980a3ccc3f56f3"],["/archives/2020/04/page/2/index.html","ad0e4b1f68f2e1fd42cb74ee9f65d191"],["/archives/2020/05/index.html","bc204a9632b54c9af8e97cec50eb4e4b"],["/archives/2020/05/page/2/index.html","ddb6746077ccea1388601dfb2262ae46"],["/archives/2020/06/index.html","5f5b30f47d4e340b4fcd28dc90d5de04"],["/archives/2020/07/index.html","27cc99c1d0476f6aa30cf89eb2bf267d"],["/archives/2020/07/page/2/index.html","98394d645f5dd9021a613d6ab46676ca"],["/archives/2020/08/index.html","1a20ad8a3fe1bb1878e11d51bffa6315"],["/archives/2020/10/index.html","0546042dc6d8d6ed79de664dee38cdca"],["/archives/2020/11/index.html","f1c101f31700eec4b8682312b3b28577"],["/archives/2020/12/index.html","801fefa97e507367110c6a3d01cd4c36"],["/archives/2020/index.html","bafd04c0005eea8b7c8c91a402c4f953"],["/archives/2020/page/10/index.html","50958e570997f5ee8af8827b119694e1"],["/archives/2020/page/11/index.html","3726dc62995701a2c4fd3e9cb780a778"],["/archives/2020/page/12/index.html","382d63717a9ea9ebbb029d4747548437"],["/archives/2020/page/13/index.html","774ff66f33d356c3772ddfe5212b306a"],["/archives/2020/page/14/index.html","d2d3398952921b0d0960f2bf23291a5e"],["/archives/2020/page/15/index.html","c80c3781756dd2c6e3580493d877f0fe"],["/archives/2020/page/16/index.html","ef708b9819d3a1a3805605d37ec433fd"],["/archives/2020/page/2/index.html","421b639aa4695bdadfc7bb20377c0440"],["/archives/2020/page/3/index.html","b023680efb93549c73f20fd4cde3b9a5"],["/archives/2020/page/4/index.html","7c6c0d2effae7d1d6bc18ff0e8151906"],["/archives/2020/page/5/index.html","5da3bcecdb4f9f04d65e4945693fda81"],["/archives/2020/page/6/index.html","03efdfe3b84cf60648430b5652dd494f"],["/archives/2020/page/7/index.html","b5ef36ac22e0675762a5568f6e5c4b78"],["/archives/2020/page/8/index.html","bef268b9dd826916500c1e03dd0237ba"],["/archives/2020/page/9/index.html","8ed3f936e57a8bfd7cdd9ab870764020"],["/archives/index.html","7a84b513c2be53750defe23027726afe"],["/archives/page/10/index.html","0b151db7a00cda77241f16393a5f2b9e"],["/archives/page/11/index.html","b971027943458e6f7636b1089141a4c8"],["/archives/page/12/index.html","3934f92f495e4c2de5db11ded1709f68"],["/archives/page/13/index.html","ee943a6b6fc89297b296c100495a87a8"],["/archives/page/14/index.html","f3f2cd9f32906774352b263a04309ef9"],["/archives/page/15/index.html","5b08b60092cb65ef06f39151e163cef1"],["/archives/page/16/index.html","fd4644e0a07603ab47baeb15a2b35ae3"],["/archives/page/2/index.html","ed250dae51be40a22199c5339eb78298"],["/archives/page/3/index.html","a931149d837beb2fa0735f8daf368434"],["/archives/page/4/index.html","2028be04dda3c4a7892f8491df1dab0a"],["/archives/page/5/index.html","6d7c87e85ba05d2569cea6391afa2d24"],["/archives/page/6/index.html","8ec73308d62765ab0ff21b3354eadd0e"],["/archives/page/7/index.html","606159f9cff67c4f9a3d70220a806dc3"],["/archives/page/8/index.html","4d56f592b663094394b18e490885f5b2"],["/archives/page/9/index.html","460f73f95fb813c8d66dfd87ff980f97"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","21fa524edab2a8f4aefc149864ede54a"],["/categories/Linux/page/2/index.html","195897d5e8daf52a0629d45427ca8ead"],["/categories/Python/index.html","8e9bd351a541fb7b2baa6707b4fcbdbe"],["/categories/c/index.html","3b899b6f683dd058e13b2c3a00943038"],["/categories/index.html","0f6158bcc7fffb9d4b19206f091658c5"],["/categories/java/index.html","27bea8484d2afc1cc732cdcc219baa68"],["/categories/java/page/2/index.html","1a28cf8d8bb61faab4ad00581ef0b4f2"],["/categories/java/page/3/index.html","76681ca9bac841699b7536b4cb45c1ac"],["/categories/next/index.html","e19a2c9e81cb85d27cd7644045c6f98d"],["/categories/stl/index.html","0e36f1ad97b175e0f2b77f790e33f241"],["/categories/windows/index.html","3b071f2c5cb241b1614c248ab46a23b2"],["/categories/基础/c/index.html","e169a5915866fca265d24a0a7e6779cb"],["/categories/基础/index.html","2cab86f36949662738e2e5a4fe23a82f"],["/categories/基础/page/2/index.html","fa9c211a4c8486ec6baf3c81ab310448"],["/categories/数学/index.html","e5373b49966a5b6d33b8377a3b999802"],["/categories/数学/概率论/index.html","56fef671cd2dfe374f240f2d36b7198c"],["/categories/数据结构/index.html","44b5c129623da31b66e22893e81afde5"],["/categories/数据结构/算法/index.html","f41a6f93427a6c0fa9a20bca8c28a7e2"],["/categories/机器学习/index.html","eda64aa0919df3330eb651955a532f2c"],["/categories/汇编/AT-T/index.html","b3655eac3fb528dafc9f5ccc8b2398f4"],["/categories/汇编/index.html","12a89c731c0f3fdcfbf559fc48e9170a"],["/categories/汇编/page/2/index.html","82acaa0850b6197abc5bf17454990830"],["/categories/汇编/page/3/index.html","f6451dc132b10bd36fef19f5ead76af5"],["/categories/算法/index.html","8955b688355f4becd9f349a6e0a84bf6"],["/categories/算法/page/2/index.html","60e19d5c81f374446d8b2e1ac5f03772"],["/categories/算法/page/3/index.html","83f67d21a000e83296c56e32dfb36682"],["/categories/计算机系统基础/index.html","5eeda8ecce413fc2b5ae042b9b59db4a"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","81540c084fb756b1a9f1bb2b6a0e134b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","3bba05173f5438e9a79babc1a63aa597"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","b86944122ca3856cca8c2e65580efddd"],["/page/11/index.html","8982954f6e2a469c4d19f9deb4714521"],["/page/12/index.html","7936e5922c0cdb6f31cfb01384790319"],["/page/13/index.html","c0dd7210bb62350a9e6f797e5581fbed"],["/page/14/index.html","fd573cae2d9e6d7d2454d71205c747d8"],["/page/15/index.html","55216707e68abcdfcc0c353ecf1c32f0"],["/page/16/index.html","5fd8ec37b535bc12199987da9114ea4a"],["/page/2/index.html","081303aea65885898a0f46809a455a6e"],["/page/3/index.html","dc209b394b13522c7745e0b55120ccf7"],["/page/4/index.html","f7a4d7751d750c5f4e83915e1af9db92"],["/page/5/index.html","dd3ce494e39fc7f8c67ffd2588b89534"],["/page/6/index.html","1bfb6a388291f38576423445882186da"],["/page/7/index.html","acac25340e341817b5b59c1dd83ebf6b"],["/page/8/index.html","a20ec9575abbcec89933a09c33c7c49b"],["/page/9/index.html","c0d0efb59cf13dc27809b030e0d4a10c"],["/post/10919.html","f44bc5ed576d32a20922035145bb041f"],["/post/11051.html","05ad7632f2b7659412b135e1aec6f003"],["/post/11306.html","758212fccbbcec367d04f969b0fac938"],["/post/11491.html","e4ca4f339122e1c484b5efa446b4f48d"],["/post/11799.html","c056d2e6befdad055e9c50b2de61caa7"],["/post/12334.html","799595968004b934d27894ecf8741d8b"],["/post/1326.html","96e235ce57ade8babe2801e7cc9801be"],["/post/14379.html","000d359020a306f562c16a5f57dd911a"],["/post/14511.html","1d8ccb692e153bdbc74c6ec2e4cdbea0"],["/post/15201.html","3a3721f926eb08e1b00e49cd291a16a3"],["/post/15425.html","d52b9451914b95d4ecffd8f4fd0733cc"],["/post/16107.html","3b0b5072a62ff079f54518f09abf64bd"],["/post/17862176.html","c8a36b6d6be3e946310a30b1047a5535"],["/post/18431.html","b2adede77b03071a6c3091e9cd440678"],["/post/18912.html","29e5b6a6bf64529b426017df11cf976f"],["/post/1b9c8662.html","2fcf03a58b3f5e8b6fb2a23856104179"],["/post/20198.html","f49ae14a1ab82e7ce3b6432813adf32f"],["/post/20ff5ccb.html","56f1fb013034a1a9a506cdca5109c735"],["/post/21624.html","e4b19289e6a99e15f28fff3fd150f503"],["/post/2170659a.html","d115c6f8bdc55038b96ed8860fcf87e7"],["/post/22102.html","1e36d5c4d75f99d40f33852de6a8494b"],["/post/22493.html","f4f553c635c8f5bffa47e43d4edc3ffa"],["/post/235252ea.html","ed1bc308eea6cadfe6032c20b8e52c30"],["/post/25699.html","61e6b9641b7e457baf277d5008915906"],["/post/2647.html","2fd9bcc16f8b59a14a690780b9345a07"],["/post/26477.html","0a9451b92a0f764fbbd35c830eaee23a"],["/post/26671.html","70078d2171cef4f1d938808e5862b12e"],["/post/26737.html","b1eed037cc528125ccc4b4ed0d1f1a1a"],["/post/27045.html","096c9e99528011a5d3c0f24c95ab787e"],["/post/27621.html","6d89496c4e160a92593430780487d0b0"],["/post/27890.html","ffc4e70aa5ba30c09e3f4f18fed0ce35"],["/post/27980.html","3627292ebc35c9a4b8550d9cb5d24a33"],["/post/280b588e.html","5fa6ec5d0c3d66dc5e856016abeda959"],["/post/28579.html","af47f963ee4fa2fd60d1f248c3f2f4b7"],["/post/28877bf.html","99635bea69f51a3d7c6ceee059f17adf"],["/post/28954.html","b9e6220bd72537d93f7ad85cdb704f81"],["/post/29378.html","9f4db8563ee5fee878bc6ef49f586dfa"],["/post/29949.html","9788f206f436ac12e92155a20cd20d19"],["/post/2ae43b86.html","d8e1adc77870120b1e5d54bae698d02e"],["/post/2ba82a45.html","b01702d27703000bd5349b45a26fc5d7"],["/post/30072.html","b6e50d373a9600413b2187ef559b046a"],["/post/30479.html","9a64751cee35f049e21caed6932069eb"],["/post/31a6b40.html","c0a8e939728d82768fc5d89c858660d8"],["/post/325cdbf2.html","02e4d5456e6ea68c947411fa1abe86c3"],["/post/3319ed9a.html","aebcaf795cc5c0c2bc09a685157ffbaa"],["/post/3320.html","c9cc244b095b7fd5a4027fd97673f24a"],["/post/33cb1151.html","1cd688db84970f9334082a40dfe8cea2"],["/post/34811d5f.html","b57ab86881e1902595abd95e533e7c4b"],["/post/348d4e04.html","2f41a3c33cc03d4bbc33800b23c99a95"],["/post/3526.html","4a6240838f73eb09d83720184e7df6a7"],["/post/35532.html","c0ef0fb6c0bec50f4626e8f78ef456d8"],["/post/35848.html","54b129cd2d219b8c229efc4fc3cbb001"],["/post/37318.html","bf66303baed499fcbc5cc6bf30092125"],["/post/37663.html","cbefa45f05e7a0029133401e936d384c"],["/post/38035.html","c11ee9bdb7eafcd326b1447760c50eec"],["/post/38072.html","9c59740e0bef931f37c62fdffc9fa303"],["/post/38145.html","03c9d1c741a7689afc4a768acdc94faa"],["/post/39968.html","ea549dd0562477bc5dd0f5362276c62c"],["/post/3de4bc69.html","24c51097267f0e78b797f4cf8f91d917"],["/post/40583.html","318705f6436e3377e8bd04b51f361c23"],["/post/40997091.html","911447eb4081a5cadf04143bc5cd99ac"],["/post/41129.html","8315eea0d6a95aa60252f5a2c856ed0e"],["/post/41763.html","3407f87fba96db9bad4cdb299f2400f3"],["/post/41829.html","54cd103727710d00c67e681b05be462c"],["/post/41840.html","b815d1300f5585f18f9847da091a5ed1"],["/post/43817.html","f12506674e689dca23c142537df88192"],["/post/43878.html","6f60e584aa4a568016fc668243104a64"],["/post/44250.html","541284b97f611eccd60e121f8310a85d"],["/post/44336.html","d71207b78ef06cb0c0f203bfff164874"],["/post/44454.html","995539065f3b642c56ce3c2315a89411"],["/post/44487.html","c1ad54c20145063338576ee1a66fe53f"],["/post/44914.html","2d4c0b2660425c604c869d81b81b133f"],["/post/4551c130.html","eca13098cc864e74d1fa4ad93c97dc45"],["/post/455a4c92.html","6a1257f513496f40d541e85fb1645510"],["/post/46466.html","225304ff9475db922a51c8455f5ce35f"],["/post/46925.html","50999275c30cf8bccaa21708f7ed5181"],["/post/47075.html","55e9bc7336afa441f4370d99cd4ea202"],["/post/48220.html","e206ac1764a90fa13f43522723dce2de"],["/post/4b1879e3.html","f9e611a8aa866d174266795ee5a93347"],["/post/4c720881.html","3ef9606890e71ada8beb743bff438e2a"],["/post/50daec4.html","1d80c138971c3366daadb8b75c2a8473"],["/post/51491.html","cbd72a7d9f33b8a4c677a0f3a6687304"],["/post/51e63dcf.html","42c579b01e41179ba48e048ae8240cc1"],["/post/52078.html","983a04a294afbdc31bf290a37b6c7cd6"],["/post/53677394.html","e1aaf00be40276b43c55db65cc873715"],["/post/54300.html","78dad67b14473bce8707f06e273ddf8a"],["/post/54612.html","c554dfa0348f2e6ec4bae984c38baf03"],["/post/54613.html","bfe0bebcac2fc91f243bf970baae8f4f"],["/post/54708.html","2ae0242200913ebde1eb891218e3e9c5"],["/post/54778.html","1b16271a581746a350273b9ba7980149"],["/post/5490.html","53641c3e8ea5bff868c845127b5b9a05"],["/post/55046.html","8f844716abb6d140dfdece7cc2a1f382"],["/post/56929.html","1cb53061ecc37454bc68c0306e6f5f2b"],["/post/57339.html","59b30713825994f7746da2c813fad494"],["/post/57449.html","9399790e4458406ea6413530cb4c1891"],["/post/57453.html","24b06dfa4b84e21cd3a47accc1becaf3"],["/post/57671.html","78d6cd008cd0a42279f555f0c1c67a20"],["/post/58313.html","e8989666b33af6a767d69a2c717c5332"],["/post/58481.html","26b87b24d73e0f19feddf22b1d16dcbc"],["/post/58986.html","6842d60403915653f516646cfae79505"],["/post/59431.html","59be2d951ad722eb60f9f85c8f1c5ef6"],["/post/5951da65.html","56a7938e0d01c2dfd4c076af1bd03a12"],["/post/5be7e977.html","e81ee7cd799b422b0e177b4f64ef3586"],["/post/5f9e4eff.html","8ed0f683e43d7603ac8be5f6e2cc3c9a"],["/post/604b49d0.html","41265075964a955a41673a508166bbe3"],["/post/61312.html","b6db7d0c529d8545ab7f943db9d01628"],["/post/61738.html","5b928a627f13259608d133fb7db2ae7a"],["/post/61809.html","6a8f9050dab8009a61373f7335f181be"],["/post/61eaf19a.html","51619915a8d8075e973e2927ba5117b9"],["/post/63002.html","64f0d79feeff4d2084b3ed368c29b9ba"],["/post/63711.html","8d57b58f441b8a7b7e8ef88d5bbb392c"],["/post/6587.html","5a66009b05356918d4d0006c90e07f2e"],["/post/6589.html","8822a16625a1194e51b9e18c356297e9"],["/post/6880.html","2ed08fb0ddae7f43a455a8269679e30b"],["/post/70263071.html","128a7385349e44915b349e568ee047f7"],["/post/71038564.html","16d5132941b4b54cd95462fbce5df391"],["/post/7119.html","d98454f0c725f3e568a98e258748270e"],["/post/74e7fdff.html","f3f3a13e4b66086e809bcbd51dcb13ea"],["/post/7502.html","84b1f3aa355b2327b126b52864f0419c"],["/post/7564.html","cede8ad80b7625d9b2d719db24c7ad11"],["/post/766f9b60.html","fb2045c37ad187f942404fb72004de44"],["/post/7ca31f7.html","5e47f18a0429dfda9b830f71336cd07b"],["/post/7d1c86da.html","5920f894424dad09e66f5559f994a8e2"],["/post/7f3bcd7f.html","854fe3d13591472fa24b8e49421f14d7"],["/post/8039.html","a901564bd974ce3dfbbf2180a30dc5df"],["/post/8050.html","dc16fa001a65a20f4ed11118123cc74d"],["/post/8072.html","043a7b024a8c5792cf187a9c26a9963e"],["/post/8274.html","5e69d750e7e9402fe713e0790810b137"],["/post/8372.html","e2633c70720114f20f808cff7e27c4b4"],["/post/8498.html","be0ad9002120e92c531decfce84fb5dc"],["/post/85b4e13b.html","254701b7ce6fc3bffd2abe2bfa9e2227"],["/post/912b2566.html","70e411f08ac529897fca7011eb80fcb5"],["/post/9187.html","339d6d9ae12f5ad6bc1427ebc8fa1e56"],["/post/9197.html","37a34257e2e9de29dfed322b849c4ea8"],["/post/94ceb2fd.html","afabb1a45f27b388e5685847076dd404"],["/post/95495db.html","a7e5541adc47307a587854a5a60f18f9"],["/post/97246020.html","ff33df47ba4489dfe3ed9bf5efba6552"],["/post/a3a786d6.html","98c1f5ff720d8fac18041ddefa19b5eb"],["/post/a444b428.html","0fa6d1e390084031430ed26ba3238a84"],["/post/a50b8908.html","6c1e6b08deb2164663324fc0bd3522fc"],["/post/aa1eade8.html","80920d0aeb173afd90ae9bb33dce21fc"],["/post/ade8c6d6.html","0231c4d8bf7c4769a0d1cf49dd5bbe3b"],["/post/ae8362df.html","60d557533700b02682ef263feafc88cf"],["/post/b4c1d206.html","1bc288c9580f724744dcb55ff9936da3"],["/post/d431fab4.html","b12725c86bb9d5ceaee414d590e7d672"],["/post/d5381517.html","6f0e2a642ee8e8acfe55a6b4addc4387"],["/post/e058ffd8.html","e2a4d8a893e9e74e2b75d09721b9cbe9"],["/post/e0f8cb74.html","06c2323f4c4f2398b0eb996840d2f7f3"],["/post/eefe591f.html","afaa241d9ea2d5349f3e0d89710b40c7"],["/post/ef296a07.html","7dfde63b16a8bff9f2b50baf07bf4388"],["/post/f201f9fd.html","28578b0c636d3d6d63be613455e3f08d"],["/post/f79e4123.html","1f37423f2716fd8662a7051b41a03683"],["/post/f8648a1d.html","25a61617d562113adc35dc33ea89ecd1"],["/post/f89cb603.html","42eef0cdc40a2e9089a8f13ba6fd5cf6"],["/post/fa288682.html","254f2a993984650fc2403ff49b43866c"],["/sw-register.js","39f7dba72a8117a13b9088bda98ee111"],["/tags/AT-T/index.html","2ebec8a17362b93ac604705aefac4693"],["/tags/index.html","66582b91d94fe5102ee0787979b3830e"],["/tags/动态规划/index.html","14c6562e6ae98b48f6dada73e653adbf"],["/tags/字符串/index.html","327c4791dde0a647f9d16b61ad42a6fb"],["/tags/字符常量/index.html","d705f3a5444d25badecdc3dbc32d697d"],["/tags/快排/index.html","c7a2faf75e5d6a024e06640a43627f7f"],["/tags/排序/index.html","557149af2f9ce11dc31192e879e0b5e9"]];
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
