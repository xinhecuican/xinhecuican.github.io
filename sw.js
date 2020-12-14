/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","1d039a0d3ce66ba02ade9aee2441dd97"],["/archives/2019/index.html","48d2563c15ebd284e3dbfed846d83594"],["/archives/2020/01/index.html","344df4697aafe5a9879f6966919a01fe"],["/archives/2020/01/page/2/index.html","83ea6f535e9b8e5690d64a8748b4f6d8"],["/archives/2020/01/page/3/index.html","1524c380b7bc93d50cca8427e8e5e56e"],["/archives/2020/01/page/4/index.html","3e7c95856ac048a157793f7113c84d24"],["/archives/2020/01/page/5/index.html","af054d4a592cb3aaa10d1d90dd93db73"],["/archives/2020/01/page/6/index.html","7f2b04b63726f9951e048f6550bbb389"],["/archives/2020/02/index.html","bdb4054d03072288be92cc2b0bf5eb2d"],["/archives/2020/02/page/2/index.html","7f0a81e529b47a69fffe881088ca4252"],["/archives/2020/02/page/3/index.html","1512a77648da224367fef5ac8b022f35"],["/archives/2020/03/index.html","56769f14208349e5277a047af3fa19be"],["/archives/2020/03/page/2/index.html","a952d070576c774b43524b94a495b0dc"],["/archives/2020/04/index.html","b1351619f24d5444d6b2123eb254f7c0"],["/archives/2020/04/page/2/index.html","3632ecfc4ea14b8f3f8846754c70da7a"],["/archives/2020/05/index.html","7ad8254d1e4236cda00602442e807245"],["/archives/2020/05/page/2/index.html","8b9ba4d1ccfd89b55d1ca3f143e52bfd"],["/archives/2020/06/index.html","6554c433570e46230e6f0c8019a3ac96"],["/archives/2020/07/index.html","61a189de58a2ea25a490b4cae3d4be91"],["/archives/2020/07/page/2/index.html","d8a4902f8b45d77bf7341233a35e198c"],["/archives/2020/08/index.html","910721ef67eb5d9eb8c7ee34af0e019c"],["/archives/2020/10/index.html","ec3fb73f71e96da2fa047e91517bcf39"],["/archives/2020/11/index.html","9648420e8d1c18c82dc24c65112f1891"],["/archives/2020/12/index.html","21f352501442ebc1756990bc7a845d16"],["/archives/2020/index.html","5584f650dc10fb25443cf67317df589f"],["/archives/2020/page/10/index.html","83fd606757ca1595af5bd1e7e3cc888b"],["/archives/2020/page/11/index.html","221b95cac397f3beef966d89a33bdcc1"],["/archives/2020/page/12/index.html","71570069a6a645411fdc794ae409520b"],["/archives/2020/page/13/index.html","9aad445bac7727424a6a5c9131c38f02"],["/archives/2020/page/14/index.html","b02424275899d3a5e9e96113c4278266"],["/archives/2020/page/15/index.html","5cf6324f0f02539efe216c128633fa71"],["/archives/2020/page/16/index.html","cbb8e610560363503a7f0be2b2a97e3e"],["/archives/2020/page/2/index.html","3efbe70485bdc9667d7a74a5826097d4"],["/archives/2020/page/3/index.html","06fc86a532b080034a959c147302db84"],["/archives/2020/page/4/index.html","b3ec1bda584721dd4902c5bbeeb818e0"],["/archives/2020/page/5/index.html","2d64b0476b3b929019228646507fbdce"],["/archives/2020/page/6/index.html","5e6f7e1325c5ecec54e1ab21273ec3cb"],["/archives/2020/page/7/index.html","bd2f39b3aaeb6b5da7b02f2f363dd6a5"],["/archives/2020/page/8/index.html","6d3c3f4b2c855b014215674d53fd397e"],["/archives/2020/page/9/index.html","c5ece0989ad0c90d3c1127a52cec9058"],["/archives/index.html","d08cc620efe2be03a7fc4ae5e2ce135a"],["/archives/page/10/index.html","4b9602e6eb136a0f39f91626ca49c91b"],["/archives/page/11/index.html","659b1c08abd8dd34521ea719a8d8a738"],["/archives/page/12/index.html","8844a6acccbcc9e449b8a33704b527b5"],["/archives/page/13/index.html","e59759910d4a369c69c1dc83a77cb439"],["/archives/page/14/index.html","6f9c8ee14259b07bc60d4dc55ae463c9"],["/archives/page/15/index.html","bcb77924f78b2d33f0510c2b72173b8e"],["/archives/page/16/index.html","912856ec5727b62db5bd430423552cdc"],["/archives/page/2/index.html","7ad8f7eadb8f7ad4d9664d246cd25942"],["/archives/page/3/index.html","cd3cc36545ad40e8493243c8b41c5153"],["/archives/page/4/index.html","4506795502bc5e745bd5f9ca3b7a4f72"],["/archives/page/5/index.html","4370e0034ecc2c8dd57152117681ed4f"],["/archives/page/6/index.html","c9cad48bd6c82264cd1e646c6a4191fd"],["/archives/page/7/index.html","eb71415779a5315f469cc98d1e6f03db"],["/archives/page/8/index.html","f35f639316b59bbd0888665a43c74124"],["/archives/page/9/index.html","83b3da99e8ce473ce715a221383e3d9f"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","d7573d21409e69ffddb73fe36ffb4d73"],["/categories/Linux/page/2/index.html","8cac76fdd4a48096403c678b4e01a6de"],["/categories/Python/index.html","40d908b83345892b0b265ac1b6e170c0"],["/categories/c/index.html","680b6ef039944d4808dd390b4439567a"],["/categories/index.html","b8731294db11b0c57ce76773d0ec5d22"],["/categories/java/index.html","a7707f18e56fc0e1c4d098b74ec02ebd"],["/categories/java/page/2/index.html","d317d9ce3d4b6d4f0b04c963d0848ad0"],["/categories/java/page/3/index.html","e132de1e81bcc6d64785897baee1ff0c"],["/categories/next/index.html","1d73e194b901fed854c846cb81bde005"],["/categories/stl/index.html","9f72237c8e63071c95d87a2c872bb311"],["/categories/windows/index.html","53616eeb051a9a7cd039c6577e5fa696"],["/categories/基础/c/index.html","887ad02f38f01688880a03ff2dffd256"],["/categories/基础/index.html","ed7cd7dd6c96e72d586abf81c6443905"],["/categories/基础/page/2/index.html","8c3167cad0e99a9f133625a56406e7cf"],["/categories/数学/index.html","12ad4243b8fb657ce56baf51a1eb7463"],["/categories/数学/概率论/index.html","91925141237f504e7f2e93132328be11"],["/categories/数据结构/index.html","cf6d1c956162fac2d92298a13c15de2a"],["/categories/数据结构/算法/index.html","2fa35b62b4bb79c14ba938569055a2bf"],["/categories/机器学习/index.html","b48e37e58b588fa30170fcf914b95239"],["/categories/汇编/AT-T/index.html","61cbce4ceda57cb31f53c6c8640c030d"],["/categories/汇编/index.html","be5213bd9f555bdbe1b9be1de7440501"],["/categories/汇编/page/2/index.html","5cf5ff158dcbc99ea85a9959171b910f"],["/categories/汇编/page/3/index.html","e60cb1919173423d9322c1c58ab55de7"],["/categories/算法/index.html","b73512b195420faa8851356099fc9887"],["/categories/算法/page/2/index.html","296bbbbf16d3b0ed14f5940a232f88d5"],["/categories/算法/page/3/index.html","d349163e35f8cd8884960af795ed5fc5"],["/categories/计算机系统基础/index.html","518b647f6b493d8308d0382071b871b0"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","c5e184f6ef3e1d529083c65ecb2ce826"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","26b4cf560520d541a57884183b45ade1"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","f3cc338815f4532e20cf514cb066d978"],["/page/11/index.html","b09d27d0147d5dc5fa440c0abd7c33f7"],["/page/12/index.html","21ad4665d64b15b49d585998ca2bc521"],["/page/13/index.html","a26751b80bc84ea669af50d6e6d69cb9"],["/page/14/index.html","378a870ecb7acca590b7062cbba22acf"],["/page/15/index.html","6fe2a0eba65fa92adb0ce871a5409e4b"],["/page/16/index.html","9c98d2d086c54859ee17a53d47ae6474"],["/page/2/index.html","92daf798b22798db97a7921096cac1aa"],["/page/3/index.html","c3a7b203ddcb0cc7d724c1db4f408441"],["/page/4/index.html","b0de6eccce552ca23e837708f42bff47"],["/page/5/index.html","866a50d26d30e01a076c159ac25e2810"],["/page/6/index.html","67445846ac72ad7a8fb3d0bf7109680c"],["/page/7/index.html","d6d918ae42df1d65b31d1688a14bca2e"],["/page/8/index.html","c091957b4cd56fdbeaa4f692d8097da7"],["/page/9/index.html","2f4bb006b23df1cba3537d280f5632a1"],["/post/10919.html","5ffafb79db1cd96d5eb2a3d8e1eec3ab"],["/post/11051.html","9193291e2d5f11a4207880810bd35558"],["/post/11306.html","d7635c66c30e460f6f3765c1b13fd807"],["/post/11491.html","19166db38dab1f17d3cb2b6acbc46ad7"],["/post/11799.html","acea37b14abc27ed9f06ff6ead85c500"],["/post/12334.html","730d8cf4e8ef8279761e27fe1262680a"],["/post/1326.html","e04d8faf3dd288a25196c63a936ae38c"],["/post/14379.html","24c073bad29d4a6c1142f58a3f2cb2af"],["/post/14511.html","35079613a77f8f1554202d0362595212"],["/post/15201.html","414c72a424b20f1839e175bcdbbc6bca"],["/post/15425.html","0ba7a46ea4fa7fbbd3afe4a10e1dba69"],["/post/16107.html","36201b6d29b08d6c6ea2df6ff9bb419c"],["/post/17862176.html","ab3911fe22664538a2cb87484ac54abd"],["/post/18431.html","4185a107190ea93886df362c77adf708"],["/post/18912.html","e32bff4d1f8c2e1604751019d7d3f2f0"],["/post/1b9c8662.html","befff5813f33a01162d03e0a8200940f"],["/post/20198.html","ad091c9d54facdb94b5f4671c6802c40"],["/post/20ff5ccb.html","b27549573ae7daa2262ee7bca427f499"],["/post/21624.html","846de49de99453fc4b41f2308bf7a216"],["/post/2170659a.html","bc5c5cfd9ee5f88b4fb45aa24c5daba7"],["/post/22102.html","2855c71e8ee53a05eccb519a58eb56e4"],["/post/22493.html","3fa9e45b6e62a21b8f74dad1d22277d7"],["/post/235252ea.html","c25dd30cababe82e69788fd19e630153"],["/post/25699.html","43a82ced0fefdb17ff72f29cd25f1ca8"],["/post/2647.html","bb5af339a728b20b009e9fa01b4835da"],["/post/26477.html","2b424dfd4ab1c6f391b00acc5fe70dad"],["/post/26671.html","05786e70b65f7e80d577aec0701db572"],["/post/26737.html","b936481d54767570d140d79c1a8bfc85"],["/post/27045.html","a7f48ecfde2978dee7f95f65522b9a95"],["/post/27621.html","d2e7fa8865c0fbf1f9bae79d633c0d7d"],["/post/27890.html","aae82a4720513af7d8faf7ffc69f8980"],["/post/27980.html","eea59fdafd0d204a283b67fd67bcc042"],["/post/280b588e.html","0817b88f926a47859b717c1f0e3ec480"],["/post/28579.html","49851c61d31bea10401c1f97cf5c6a40"],["/post/28877bf.html","2a95a46ea885b6bf55238ae761cabd08"],["/post/28954.html","128ce75cc0c1b18618121a06f0b7c687"],["/post/29378.html","a3dd9c2e7d7bf54e2d2ed646fcac83fa"],["/post/29949.html","8f17fa89846339c33e922bd5f84ef195"],["/post/2ae43b86.html","94d35b828235d24366ce0b34f373d33c"],["/post/2ba82a45.html","699a2c66e956e4d6bc0170c786b1d389"],["/post/30072.html","cf59885696963c9f652c65364b26fd5c"],["/post/30479.html","527f68ee70952644cc7a084c62c33565"],["/post/31a6b40.html","4315066d47973070c04bd89921ea1a87"],["/post/325cdbf2.html","7b6d83dcae8760001a07ae7f250c1d51"],["/post/3319ed9a.html","2905c7e3eabc34a4dea705b8dc02e66f"],["/post/3320.html","aec350c0d44385d782eb10943791ed49"],["/post/33cb1151.html","15493c6b0a9464dde75c1da292ab2546"],["/post/34811d5f.html","f35fc4ec3734b78223d2e434b6ca942e"],["/post/348d4e04.html","07ff0be8a56f40dc4a127368407edd58"],["/post/3526.html","e3074db740f7ded7296a5b76426cfdd9"],["/post/35532.html","38b615074ab155bc51dc9ea01f447667"],["/post/35848.html","1e8bc5163030c03a09a97a0258229097"],["/post/37318.html","2206f80566817ebc47502bea42f4babf"],["/post/37663.html","5676ed9be3e4bab8aaec604aeb228c4a"],["/post/38035.html","b41e2110e784b9e635db0cc4f1362856"],["/post/38072.html","f3e36e0362901633a283ffadb8d6be59"],["/post/38145.html","8769ac9c7af297035a1420fe8ddb9d6c"],["/post/39968.html","6a0184e9faec6a10d50d25fe8555530a"],["/post/3de4bc69.html","2815fd8653f094e2ed2dbac5636262f9"],["/post/40583.html","89407d0358ef82b654cf2734aa81a86f"],["/post/40997091.html","669a86b5de03439f22b874d63993fa78"],["/post/41129.html","fc130d9cf98ff7409b71bb229e9b8ca2"],["/post/41763.html","b263f82f25ad20482ffeb6753431eedb"],["/post/41829.html","f454762f26de2b3d806afe1e52d5319d"],["/post/41840.html","cb34d967415f56a6ef1a7ac91348d836"],["/post/43817.html","085725c75f45689aa6912a8425da10d8"],["/post/43878.html","64b990572a99650d83b8c2784e4b260a"],["/post/44250.html","4d0e2a2bdd016ec319d1660b750e8418"],["/post/44336.html","55a81b133690334e7f42dfe13363bb9b"],["/post/44454.html","7a91d4892b6580a22f0afad4025e79a7"],["/post/44487.html","dd68aa77e1637d6162d221de630f7f31"],["/post/44914.html","3f5c7b0e03ef054070d6add5b350566f"],["/post/4551c130.html","e897baa529c125254accf62b46be1ba0"],["/post/455a4c92.html","ffb6d9c2398c8d16f5bdad92d3cc8aa1"],["/post/46466.html","41b72b0bdf334b58a579bc3e17c10c35"],["/post/46925.html","aac217241a0cadaeb224e87c213fc399"],["/post/47075.html","56c42ce5ab945168f4eea6eddc9586d1"],["/post/48220.html","d0bc6809cbeb181dcd05c818e79ec42e"],["/post/4b1879e3.html","10dc40a20f9dcbfedd73fe88596b0b15"],["/post/4c720881.html","948c2beb5b0f4e6e38533cf2b83474b9"],["/post/50daec4.html","eec28e334c98b2eee92c8b7e09157b66"],["/post/51491.html","7862546d658c69670de484cca8a2405c"],["/post/51e63dcf.html","4333dc318454dfc46e4f70e4af96c8c6"],["/post/52078.html","064a3c0daf8bf5a1646f18d29a35712d"],["/post/53677394.html","047aeb1ef90333f41bb905bda8f73c37"],["/post/54300.html","1eef40c50a3bda45e0bef990de4dfff1"],["/post/54612.html","99d445cec5db6c55b210f8145225ab4c"],["/post/54613.html","40362b866b286d4b2058a96a0ff7cf90"],["/post/54708.html","86ae1de0e50d6eee579a08d6b6bf2039"],["/post/54778.html","f1d3f4d37c6081e5975ef49c293f05b7"],["/post/5490.html","e68b2e9e7a13d21ca11fda8890228c6f"],["/post/55046.html","2de281c2b2feac84845117c056fb9905"],["/post/56929.html","a278ce26fd27e0d7fd4d29094a6d1b98"],["/post/57339.html","32a0faa22aa749610fba9de54523f2de"],["/post/57449.html","351402bc085d057f63b40eec9c8ce373"],["/post/57453.html","205f1b30cd300ca6d11c40d318747301"],["/post/57671.html","dd173dcc652cfd52477bcad0a4c0623e"],["/post/58313.html","9c9621782e7de90c9e342f25d8cd3fc3"],["/post/58481.html","310570486b2737985a3694cc6653a20b"],["/post/58986.html","bde4873c69fb9dee35a1b0f9826a84c3"],["/post/59431.html","c71097478161e8839a7e7112b177ce1c"],["/post/5951da65.html","faf9681c7b1d4fc56057c85f8412f722"],["/post/5be7e977.html","746db85d8eb16b5d047c755ba7475d63"],["/post/5f9e4eff.html","52b7529af9d0b93075c7946e1a4577ba"],["/post/604b49d0.html","70eaf9dac4c19714568306615a13ff58"],["/post/61312.html","0c6b2b170bc3c12c4cb84775d03a8c57"],["/post/61738.html","97f56afd1bab90b58b54b016f521abaa"],["/post/61809.html","617707b6afe51a372bd9a94bebf33d22"],["/post/61eaf19a.html","1252907e976daa4d0eac27efa3430377"],["/post/63002.html","88f90ef95d82b7ddb60d9210f9ae3e99"],["/post/63711.html","22658946bf2a2c453e74aab49dbd2902"],["/post/6587.html","c923244f53c05573491f97fff89b6f09"],["/post/6589.html","1f5e9062437297a43805b52764d737a7"],["/post/6880.html","9470a850a1cfe17e79351254ea03e63f"],["/post/70263071.html","c09cd2ce85c6db9cb9b855d62290a7c9"],["/post/71038564.html","fa22191dd22cb754bde6539e3b534c0e"],["/post/7119.html","82092eba0e0ce2d1d122d831c5508592"],["/post/74e7fdff.html","09b74adaf8c8e1b6eb02daefe4d09313"],["/post/7502.html","3a9886d307450a13c0213ff7273ece51"],["/post/7564.html","0dbbd5e48dfa5f69f9b38462cff085e8"],["/post/766f9b60.html","9d51b398c6e65fd641b8bb9076980a5c"],["/post/7ca31f7.html","bacb4d6af061f885e0ff92a62c1a02b0"],["/post/7d1c86da.html","bf445767e5b0ef5d323dc8f3d125f1ae"],["/post/7f3bcd7f.html","c92a8b8aeeca08e581dc933ee8269cf6"],["/post/8039.html","ee50496ac9305f6e7e06605d58a701e2"],["/post/8050.html","2ac849c732a90af4ef9fe6958adb17cd"],["/post/8072.html","61a32107bbd591535d0552789280a215"],["/post/8274.html","19f4bba6f1ffd7b1637cac56aa1eedc8"],["/post/8372.html","c8aee724790dc46537b420f2b5fdd37f"],["/post/8498.html","6c202acced68a5ba87a52155b6f21ecb"],["/post/85b4e13b.html","7ad63c3517787cdffe120d874c6878ba"],["/post/912b2566.html","d8738b820ac6b94be668070f96226206"],["/post/9187.html","55a8321e32bd9cda4aae5efa3ef47663"],["/post/9197.html","14cc611749b711f0bd71b8ee76529107"],["/post/94ceb2fd.html","f9c33166923b8cde9327ce9aae17466c"],["/post/95495db.html","74b6abf6fdda366f6ff144fae72f7b0c"],["/post/97246020.html","ef8949686fba01e83f2726178e6cf7ba"],["/post/a3a786d6.html","63c7f53c282767353ec47fd63567dfd3"],["/post/a444b428.html","c558b8387b6627fc104abcedafebad9f"],["/post/a50b8908.html","3e9b1b9e89f9ef65eab1995872d5f544"],["/post/aa1eade8.html","84f15f237f51f8e9ca1a9a566c7d3d44"],["/post/ade8c6d6.html","1fb6f8750d3d45a6933cfa18236a9469"],["/post/ae8362df.html","20d3336da8111f99285431b2bb580ffd"],["/post/b4c1d206.html","2f40f418ae6708ab2f1e528017bf8347"],["/post/d431fab4.html","4a62b45864e0b6484d6d4c0c1b646c1d"],["/post/d5381517.html","438f1c9777b63cb87147e0ecb269e8e9"],["/post/e058ffd8.html","ac29ac73a2d39a82b0e4d55b99daf229"],["/post/e0f8cb74.html","cdf4311783f0ead095fcb963f08398d3"],["/post/eefe591f.html","1b180b9d79db3a810ac5d1eeb7f5047e"],["/post/ef296a07.html","7822329164007c35b81ecc768f93617f"],["/post/f201f9fd.html","51c050eae8023b02ad2ab561495cb450"],["/post/f79e4123.html","3e8a0ab0534a0cf1565898cc9cbb493e"],["/post/f8648a1d.html","ca41a85ff3c9869df1c9d4b5bfa3c690"],["/post/f89cb603.html","1ab0645021ee1eb15c22272c1d80e2d0"],["/post/fa288682.html","3b3e507bb460fb78818b429a0a2b3fb2"],["/sw-register.js","8d7fa2475134667e6884659c29e8262a"],["/tags/AT-T/index.html","fb2666677763c6b108af04cc9ab85137"],["/tags/index.html","0d90ac068aaec628d9d76f5c323a22c9"],["/tags/动态规划/index.html","5db0d47e49418626635a443fc69e8c31"],["/tags/字符串/index.html","7035c9b741786fc0c173128139bdc487"],["/tags/字符常量/index.html","9f5d6693fbac0acb11f348484f467ee5"],["/tags/快排/index.html","8dc51b693e10efc00e6c20d29bff0f92"],["/tags/排序/index.html","36dde81896c6cb59f8737ac669051472"]];
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
