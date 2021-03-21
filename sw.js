/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","1203720fbb30eb6167f6b7717d612481"],["/archives/2019/index.html","2f136e4be38c904221b5e01e1dd6186c"],["/archives/2020/01/index.html","d42500d271adfc23a697102fd5face2f"],["/archives/2020/01/page/2/index.html","c1fa6695c7f0d74a6f17adce7a04fdb9"],["/archives/2020/01/page/3/index.html","ae09c3a08a81663140b4aa88ad2df9d5"],["/archives/2020/01/page/4/index.html","77d838e1dad936239e8b241d201d5742"],["/archives/2020/01/page/5/index.html","d1481f34e6254a8faa5373faf77fdf04"],["/archives/2020/01/page/6/index.html","50ea630530331bbbfb642b07115007b3"],["/archives/2020/02/index.html","988ae659ecc7ae1694e57a81790ffdc4"],["/archives/2020/02/page/2/index.html","03f11d7dd200703e579869a25251e861"],["/archives/2020/02/page/3/index.html","c06169979bed7b42198d544592bca143"],["/archives/2020/03/index.html","222f8af6e8f36fca1ecdacabadc08736"],["/archives/2020/03/page/2/index.html","9c42f39f5f8581b27832ec12a628d5df"],["/archives/2020/04/index.html","447f717e35d7e12e2b3c64821a49f995"],["/archives/2020/04/page/2/index.html","2380f80cdcf41a3df1516b5b568a4091"],["/archives/2020/05/index.html","6b115d75550c5a4b8d4e6d0b97c36a42"],["/archives/2020/05/page/2/index.html","447363533b9cb0b124070dd3f9ed4095"],["/archives/2020/06/index.html","b00ecca1e17d5a221b95ca39b5ab9771"],["/archives/2020/07/index.html","eb1a0d804be8552682952f261bfd4646"],["/archives/2020/07/page/2/index.html","71d04a214ace8cf75f7f941843ddbd35"],["/archives/2020/08/index.html","2dcf4b18eae20725fb22264ffb484ee3"],["/archives/2020/10/index.html","7fbf1d06a1faad755dd307ed3fa68006"],["/archives/2020/11/index.html","d762c7e5b2e87460ae034df654e720b1"],["/archives/2020/12/index.html","4f03fa5c600f50ef5fc30610cc14be62"],["/archives/2020/index.html","e1f5e722c7d0e6da2468fe9a2f2a0770"],["/archives/2020/page/10/index.html","da1f48c53b93edb01598e07861fcdde8"],["/archives/2020/page/11/index.html","103a43ac548e5b76c5e27cf4be4a745d"],["/archives/2020/page/12/index.html","8dc873ca275f5034c941e64bad3245f3"],["/archives/2020/page/13/index.html","b7a3edf91ac6456c76073e8f69383036"],["/archives/2020/page/14/index.html","52efa9741350d370b37804b6516eae20"],["/archives/2020/page/15/index.html","a9aae8d6592d406639e71802dfb3c3a8"],["/archives/2020/page/16/index.html","b7baa258a849fa634c2d09ea1e329ef7"],["/archives/2020/page/2/index.html","baaf556faba86b68f3f42dda8ad6351c"],["/archives/2020/page/3/index.html","f162c1945cc71ba36da03b012903c70f"],["/archives/2020/page/4/index.html","b389f8a4d5c32e9ed11551f3c16136d0"],["/archives/2020/page/5/index.html","6e6009b5140e059736abba4d44498263"],["/archives/2020/page/6/index.html","122d7748a50ec8a807ef13fe91674a92"],["/archives/2020/page/7/index.html","e6de6be4132a6f286395eaed26f11d43"],["/archives/2020/page/8/index.html","07804a43307577376313eaffb65fe201"],["/archives/2020/page/9/index.html","b32c54609562da50e39348ea60cfb4d3"],["/archives/2021/01/index.html","5c52c479e18f0e034443d6405f3ed890"],["/archives/2021/02/index.html","72a299e327c816c3ebb5442bdecd32ce"],["/archives/2021/03/index.html","e0fc055f41a5006a0eeba4deac529601"],["/archives/2021/index.html","0995572bbef42a27cec6a93b761fa8ee"],["/archives/2021/page/2/index.html","f9db3788c06f3d586e9125c221cc3b09"],["/archives/index.html","5a1c402848149c0e864c164e907c0287"],["/archives/page/10/index.html","adf2dd61de959a3f24b2dcd131581f38"],["/archives/page/11/index.html","55fc2fef7963f6f947ec92e0d1d71d63"],["/archives/page/12/index.html","07933ef86166d1832f1d628b64d22fd0"],["/archives/page/13/index.html","8306f9f4c63e602eb98cfd0a92b654fb"],["/archives/page/14/index.html","8a0abcbe45a163d1f656433832a0d7be"],["/archives/page/15/index.html","3daf20f86007a10998fa25f5c55d80f1"],["/archives/page/16/index.html","1b55e1eb48b425e2795b7631c2292117"],["/archives/page/17/index.html","564c8810c0aae7312cff712b37894cad"],["/archives/page/18/index.html","a11511e70b2eccbbe7a570e449b50ad8"],["/archives/page/2/index.html","e2e547431709437bff38ed5c0e4205a5"],["/archives/page/3/index.html","7d1b480fd5330293c6fb4db1d697eb04"],["/archives/page/4/index.html","746db23a8b781193f12c69b769008fd5"],["/archives/page/5/index.html","288da5207d0077baeacc1acaff854723"],["/archives/page/6/index.html","254da38dc39a719ebefc6fafbd503e7c"],["/archives/page/7/index.html","99654557462c93a40237d7c59a083385"],["/archives/page/8/index.html","0dfaaeff0b6ca471b54baa8732c6c429"],["/archives/page/9/index.html","ab7dc8aed95dcfebe51dbcbac2f4ee8a"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","563158ebb3a1c4d096c4b8b88007dc56"],["/categories/Linux/page/2/index.html","1d3ae751acc8b35d325840638505caf7"],["/categories/Python/index.html","1b93ef4a9394c71b28c31bfe8b021ce0"],["/categories/c/index.html","4f4dc5807b844170c6c9b195c940d466"],["/categories/index.html","797fd9be9c5ffc94b05daa93f451a66b"],["/categories/java/index.html","e652a9ca41dd538760515dcd0c60763a"],["/categories/java/page/2/index.html","ac64cad272107df4121d2386fa19c0b7"],["/categories/java/page/3/index.html","28a47c31480e74d5868bf3e3efb38d7d"],["/categories/js/index.html","beb02c1e814b42e3a9004c4723d807c6"],["/categories/next/index.html","01c0fb4ecd9e22ce041e9348dc02b90f"],["/categories/stl/index.html","2b61a45e81c1e3b7c432802c98f19d47"],["/categories/windows/index.html","c392deb409ecadbd060fa575428208b3"],["/categories/基础/c/index.html","0a39bb8468df1ef37f0f4e65b04bcc25"],["/categories/基础/index.html","71a6fd94c8fe7ab2ead9122895033cc3"],["/categories/基础/page/2/index.html","684cec3605e6486f7642c10108ee003b"],["/categories/并行/index.html","fd7635b8ad96262a2db07be741464c46"],["/categories/数学/index.html","272754f1bfe0ae74fafdae3b13caa1a1"],["/categories/数学/概率论/index.html","c261e19c81b66323a5f7c69902a6bb90"],["/categories/数据库/MySQL/index.html","2e8dcf1965e711cd23d35b94db38899a"],["/categories/数据库/index.html","bf34ca9aa21445cacb2da05872346510"],["/categories/数据结构/index.html","d0cbf8ee4429ba5c1cdaff6c662d7073"],["/categories/数据结构/算法/index.html","abef10b834a8ce7b0193714dc8e77bb4"],["/categories/机器学习/index.html","ffa59ff05aa26e01c19d68014acc66f0"],["/categories/杂项/index.html","69a14d68da58af1781730efbefba4639"],["/categories/汇编/AT-T/index.html","35567fd782cd7712d81751341c892a4d"],["/categories/汇编/index.html","e718d2abd18443e8abe1ee5696dae598"],["/categories/汇编/page/2/index.html","3bb982bde568625bf9f8ccd773dca61e"],["/categories/汇编/page/3/index.html","416cb4b02a763267d0439e5acb98fc42"],["/categories/算法/index.html","e05fc1da25dbb1492586152339b9a2a6"],["/categories/算法/page/2/index.html","4acb5b1e226b5e9f794c6ca705c1f57b"],["/categories/算法/page/3/index.html","a093fdf65cde3ba49a60f4f6595454a7"],["/categories/网络/index.html","fa7c332dd292ac9494e43e97786f233f"],["/categories/计算机系统基础/index.html","9560714b33c12b6449d9a2f62e67f7d6"],["/categories/计算机系统基础/page/2/index.html","2a89419c4382af56dd8ba41ecec15a0a"],["/categories/逆向/index.html","43591e105c8c1c85afa70a9c2e23237e"],["/categories/逻辑电路/index.html","d297df8897d3bce8d6e0f9bb00b95d81"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f5e98922ab42ec5b064e49c1db12bd74"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","e2ff663d53906457d0631930debd15ad"],["/page/11/index.html","17438bb0e8939166568b5f70dc92c88e"],["/page/12/index.html","d988a6ce28fc47599462ee8984c63327"],["/page/13/index.html","a724a0bac9166d3edeca511458e6e7f3"],["/page/14/index.html","26a779dfc541a9c7445626df589cfb2a"],["/page/15/index.html","b3983a87f9cf3d17c270c367c03aa057"],["/page/16/index.html","57c7dd0952499cb8a6bdc4e0af0b1d89"],["/page/17/index.html","ac2bf42dbc4006476e7320b7f4a31567"],["/page/18/index.html","4f9b2a219513c17b720a16fbcb7e26cb"],["/page/2/index.html","f4cd7c97b961308d8481eeb4dd862776"],["/page/3/index.html","3288f9d7e8135dea9d932fc4e76c470d"],["/page/4/index.html","93cbff7112681116fdfff984822d7c55"],["/page/5/index.html","dd899bde03fe9e6d42ee55b48c4826e5"],["/page/6/index.html","f5357ae4a98e9c22fa7dfdb2556a8eb5"],["/page/7/index.html","e7f4e05d89d204933dd9ce1a38b1e09e"],["/page/8/index.html","21c3a82412ea71282c150f753baf8f1d"],["/page/9/index.html","1150f3900b0ed5b19c62a01aa905836c"],["/post/10919.html","fbb47ed8fc4e11c01ca9f9c50be565d9"],["/post/11051.html","a6310d7f23c33bee9f422a2accf1a4c1"],["/post/11306.html","fe5ef3385e46621b94ec4a9c40552b52"],["/post/11491.html","ea4f9efd80c86e0ea8ad31f63a770bc9"],["/post/11799.html","1320f2d9626bd78edbab0cb778500be7"],["/post/12334.html","2e2f5c5fb2f0c9762abf8fadacf631c3"],["/post/1326.html","b4bf5b4c6e904a76033d81968fd5aa15"],["/post/14379.html","c99be2a45422385635ceec2144d2787a"],["/post/14511.html","59bd64fa1fed81c7ecb7206b1e0d8d71"],["/post/15201.html","e9fd6b5ec5696f88f0bc53af05bc69bc"],["/post/15425.html","6d47a690997753f693e1ce672572c137"],["/post/16107.html","4b0d903b7e8cb5a40ec93053738dcff3"],["/post/16e2846c.html","77e5d46aa7ab09d972088538752ad80c"],["/post/17862176.html","9f6947b4f112103e1079feae735a0490"],["/post/18431.html","33ee3e758657c969fdf1fb885071721a"],["/post/18912.html","bb0319cda40f889098e70376c9fbe544"],["/post/1b9c8662.html","ee653f4459c8152de1ea5f2e37086ba5"],["/post/20198.html","009a95232e1a3b4119d14247cd51f40c"],["/post/20ff5ccb.html","21006e4d76eeb85cf5c1a5205643a359"],["/post/21624.html","20c769647b849ebbd3a806f571d6c7ed"],["/post/2170659a.html","2ab9f6b0c54b14a27409db05b420f01d"],["/post/22102.html","44481382db0b111f907646aff84a594f"],["/post/22493.html","e2d78e403b0df9cb61535b32e1f52441"],["/post/235252ea.html","2b88cd73c55047eb2cc3d214c041cb8d"],["/post/25699.html","e5591af67c33357dad28805b8bbdc403"],["/post/2647.html","ed242222e4bce89f3676ff4967ec90fc"],["/post/26477.html","803167ed7d1a4da48afc1079c17aa5e3"],["/post/26671.html","265f375659b364c1f3f784753766b360"],["/post/26737.html","dcbd7d6b37ddf1e39f63acb6d97af873"],["/post/27045.html","86660fe50d2f7dd3a73c323d26260973"],["/post/27621.html","9823b289cd48bed4450af0c39d33790f"],["/post/27890.html","3176e3a9374b1bfb30a39db8a0ed3bdc"],["/post/27980.html","cd8830a3a6d6d109f10c5ab713d28776"],["/post/280b588e.html","5f53cddba57a49f6e9aa2bef1094b20d"],["/post/28579.html","49f665aae59edfcf0c87867b9fea5db4"],["/post/28877bf.html","294a1e59ee0b36fdb0bc20d5f654c8bc"],["/post/28954.html","78827c1dc17be1dda6127cda9e48eb87"],["/post/29378.html","cbf3c7bf57d555ca41bf304eaf7c7b7c"],["/post/29949.html","dbb1b731c45813dd2c6eb7de437ba016"],["/post/2ae43b86.html","0f892bdca554478d7324a68ca5e2eac6"],["/post/2ba82a45.html","61b0a38b02b965772ce42aaa22388b0a"],["/post/2cad8b04.html","fd90c4151f63e93916c548e3eb577a72"],["/post/30072.html","5619d34b14279c271d48b832c07478ab"],["/post/30479.html","54e82edcac10655f6765d8204223d13a"],["/post/31a6b40.html","cc9a83383af280203673006e437c11ab"],["/post/325cdbf2.html","24985ead9b777e873864accb2ace55b4"],["/post/3319ed9a.html","343e51fed17934c2af66e2adc6417299"],["/post/3320.html","8a4a31a3746a7a8deec105a835f3474c"],["/post/33cb1151.html","752a5bb431504faff6f1000fe7831f59"],["/post/34811d5f.html","b56fa8f66f97671ae1779f51fccf66b1"],["/post/348d4e04.html","623a186a247d3d2ecfceff82fdfb632b"],["/post/3526.html","5440da8e2c3f8070292fefb6a144cd5f"],["/post/35532.html","7f368c627138a1bf9b3c37ca71a5b3fb"],["/post/35848.html","7c6d311b7f5b1b6b0327105502a4d53e"],["/post/37318.html","2abe9a11f31118feaabcfb32b1e36b2c"],["/post/37663.html","b399d428d9012cbebfe7872eabfe2d86"],["/post/38035.html","8f7f1310317698e1f67ce5ef35bf19be"],["/post/38072.html","4c3a09bad0156c9decea1cf07e342125"],["/post/38145.html","0d71e6571dbcd115c2560445df2c936b"],["/post/39968.html","e85a6317a1e63047d0385425bacda54d"],["/post/3de4bc69.html","41529fcaf79918a504349b6a4b54e32c"],["/post/40583.html","f40f4de19f67a65ef45a5d4d2b76e385"],["/post/40997091.html","e6a7da7684e3d2ca97ee0535e64037f7"],["/post/41129.html","c4f6112203cf641fb75aa4f9f50257f2"],["/post/41763.html","44ab169a3a35da6302b5c81802f9cb62"],["/post/41829.html","3e4e74204915cd1390b48a892fa67e7a"],["/post/41840.html","f3977941d988349ce192ccb327379d4b"],["/post/41e39f2b.html","6df0701ab5dacdedde53b333fe702e35"],["/post/43817.html","238a1813892988630faed7c24f59ad32"],["/post/43878.html","18eb0238a52f9d1b7dfb3d3be3e9bcbc"],["/post/44250.html","2e291743b74930b7f6678769fb43819a"],["/post/44336.html","00513ab4b39d0e6ff2bf284c34b97916"],["/post/44454.html","b74127d61594c2f91037fdde7bd08e70"],["/post/44487.html","6953aaae4c6144bad9d5267a59e18e9b"],["/post/44914.html","1ca4e97a9426d48dab23eb050555afbc"],["/post/4551c130.html","269bd94df3d06c01197ea320fdad2eb8"],["/post/455a4c92.html","7703c89d415b5b7924ba7e8ca1c10b9f"],["/post/46390b34.html","5aa729c3321f0c9b528b98c2061084fd"],["/post/46466.html","9929203fd4f2be6efd22ce8772882ae6"],["/post/46925.html","0221e14199faab45d275b82156edd66a"],["/post/47075.html","d6d95b39b7690e0b9ebda67d15955a81"],["/post/48220.html","cf73e3679405b894404a51f87b91321f"],["/post/4b1879e3.html","88b848988a3dc93df46c085d2fd6e683"],["/post/4c720881.html","022ae328b0f086484e65260b26c22970"],["/post/4f4fc0a1.html","cd2b9c0cee1b2eb2942f8fc21f34be1c"],["/post/50daec4.html","0ceeb96f4b96a79aaf163e43b3b0747c"],["/post/51491.html","f6aec93458a344f1c68e23b3790ac05e"],["/post/51e63dcf.html","7b8cc6397a7520173c572945b3388286"],["/post/52078.html","82fad734c93f9153f67f61a68a360c97"],["/post/53677394.html","a9be4fb96aa01db7b88a6ba3a0f359c4"],["/post/54300.html","06601e2acfc50779f6d2eac6b0b30349"],["/post/54612.html","cf473cc7c49faf23de9d126ee4945447"],["/post/54613.html","60071bb41a0f0e9a26cc31ed04a7f5dc"],["/post/54708.html","5b4a1ec95eeadb30ea39ed085482d77f"],["/post/54778.html","063ca55f2266eba1f7de9e37e0a2e69a"],["/post/5490.html","52b4e4bb82cb9847b89a99b0056575a0"],["/post/55046.html","c2066f5c91ad2f490528db3f593fdc9d"],["/post/56929.html","33d72f773d374c60b1250eaa126cea82"],["/post/57339.html","a730fb74080f9e81e1516a6420e1a4e6"],["/post/57449.html","456c59ff750891c4683f82d16cbb30a5"],["/post/57453.html","aa301cc4c86e9ed9b45c0eee6cda605c"],["/post/57671.html","403b08bc79fb781e280f8474d0f06152"],["/post/58313.html","a6f46c73e8b01711030dac61cb1eec00"],["/post/58481.html","7099f224ac0301adbe34aea6deda378e"],["/post/58986.html","9caab415f29f3a983600b4c2a0fee480"],["/post/59431.html","05adab46a4c8adbe87b43cd3f2f0f83b"],["/post/5951da65.html","3e5f3d7f5a68e5a9c182da9fa48d0efb"],["/post/5be7e977.html","4af1b910ae9242625dc4893ab4e2d02d"],["/post/5f9e4eff.html","2fd5701cf248dcfd74046ea8f02779d7"],["/post/604b49d0.html","f24385868d88a08120f75b79d22c18cf"],["/post/61312.html","148dbc1f26a2c8e55fc722dd5a74f4a9"],["/post/61738.html","aa2d85ff28e0d9d4fa707aecdc318052"],["/post/61809.html","97a4820675c55fc83bac91f49522ed86"],["/post/61eaf19a.html","151d7f5d6e503f0680ff354054f5ce66"],["/post/63002.html","5a7a895c74b48815633594410d09c271"],["/post/63711.html","8ee090dfcdadede2f6befa109a071ef9"],["/post/6587.html","11508409ec1851b2ea2dcfe2ca2df49c"],["/post/6589.html","3933a9100e9f628c453fefc345749eb8"],["/post/67454659.html","2090411645fd81d878f0665d29cfde4a"],["/post/6880.html","f77b1a8e949faacf5482c2dc01455d01"],["/post/6ee50502.html","a4cef6551629dde9fe708a8d7b6d939d"],["/post/70263071.html","f47c341af0cd76dd21f42309021e1df9"],["/post/70d4f4af.html","a47685d18c42bd01b48f3fb1af51ab26"],["/post/71038564.html","f14f936b0c29fc98f71fc4dee4753cdd"],["/post/7119.html","4321ddbc2d13fee1c6c5858311b0b289"],["/post/74e7fdff.html","0f0d0e2ebb8f9c50fa305fa869595bc9"],["/post/7502.html","1e565cb2e80532ca934fdfa42fb65496"],["/post/75223936.html","5a58b6f9d230380f465c8888fa8d0df0"],["/post/7564.html","f938820cd520b013197c216b8e024fdb"],["/post/766f9b60.html","340ba656b683ff44cb9187304262ed6d"],["/post/769365ef.html","959cf61852dfc7dcc657636ebd54bc69"],["/post/7ca31f7.html","2a6044bbbfd04ef05f8c1f0bd5b81737"],["/post/7d1c86da.html","6e64a4a74f4006f7faaa9eb24ae0740c"],["/post/7f3bcd7f.html","285e454b79cf5c579191a0e3a9be4360"],["/post/8039.html","f2336e46506340d0a0dbec7c2f59bb5a"],["/post/8050.html","b9147ab9512de06d2a0b3c9bd5a27487"],["/post/8072.html","5dc16631d80391fb8f773127fa9a6207"],["/post/8274.html","835ff65afb1d2be304a3547e3d4f2bae"],["/post/8372.html","032d32d7eb485c4bd48dc10aaf772731"],["/post/8498.html","46ed7f06b7102e82ff01f310d00c3504"],["/post/84ea90f7.html","4901de6b80cb05c3efabbef8e91b2425"],["/post/85b4e13b.html","1ff4b9b83644104529be3771a68ac89a"],["/post/8e75958d.html","13e82fd07eeb71f5609a1dd9952d74dc"],["/post/912b2566.html","37bf48c354f354ac536ef8c29792b24c"],["/post/9187.html","6d1ecee476aadc47acebabd774ca749c"],["/post/9197.html","4ad8fb0fb73d2f2128b15549d16751c8"],["/post/94ceb2fd.html","fcae85129f5f265b3656adc1e032abb3"],["/post/95495db.html","8c13af9c92597ce5f30cdc4fe0de09e3"],["/post/97246020.html","86aa707d9cd264595cb395c3c5a51907"],["/post/9954ba8e.html","42aa20f1925adbac3f15361a938e4d92"],["/post/9d855db5.html","dcb17288ae8ea61522fa93999ac88cc3"],["/post/a3a786d6.html","b7a5aaf2aefd14b1ec13648d3692a45a"],["/post/a444b428.html","f893f732d5b9b21ce65ab8273a9025ba"],["/post/a50b8908.html","2ec4fcd7945f77590d888f358858dd49"],["/post/aa1eade8.html","4ea5b2ed37189bfdcecc0afd2882d335"],["/post/ade8c6d6.html","cd67eacf362362c1738452d51688e20a"],["/post/ae8362df.html","7ea3a7ffd290d089ef5070aa55a9ae96"],["/post/af3eed3c.html","6b98642bd78a9f7d310d515b984b11d4"],["/post/b4c1d206.html","6dff96f8aae7aaf5f71929a59843c636"],["/post/bcc68732.html","7293169a270430a84f1dd9dd310ee06b"],["/post/bd608ff7.html","73d7b7869243fb26e990e862a9513f67"],["/post/c82a1c99.html","baf17c1c4ae4f9e06c5957548c8bf2ce"],["/post/d213fc7f.html","347ef1e75d97e76f682d69b360af0d54"],["/post/d431fab4.html","ba48dfff90cfb52f867340ecd59bef2c"],["/post/d5381517.html","fb9d3d87da7d0aa77e45c56757aa3c43"],["/post/d94f88de.html","095d1eb1b6b43d92dc0664a4010c2c5c"],["/post/e058ffd8.html","2455cb9f47dedff8ea131e754ae952cf"],["/post/e0f8cb74.html","ce8cb8f16ca89692e829ae7bf6965f1b"],["/post/eefe591f.html","73a0c70052c09b53e66458144398ba71"],["/post/ef296a07.html","b2feb3bbb0e12e2bfec50fff849bfc30"],["/post/ef3a3fcc.html","84df3c45b0b9f9ad3758212f1575371a"],["/post/f201f9fd.html","91f92ba3da88cbbdd1095c65a459ed09"],["/post/f79e4123.html","f64f2c90f6a89d8c087032777217062f"],["/post/f8648a1d.html","b5d882ccbb50f0a15c52e008c4683f83"],["/post/f89cb603.html","fba97f915783d73dd5753959032cec17"],["/post/fa288682.html","e138b199b17d4cbabd012b800ffbbda4"],["/post/fb98053e.html","7c71f08dae54617d0938718b32e6ab2b"],["/sw-register.js","16dc28b4c83bc737d216e99eb7cc9d64"],["/tags/AT-T/index.html","8691a9774d023401e25b257d395e2da1"],["/tags/index.html","655af363202f78d5477e3e61e72b5727"],["/tags/动态规划/index.html","9f73c1450a4b9e538046c9b0c3574685"],["/tags/字符串/index.html","7d9d92048aed80449b22b7d93c1f5003"],["/tags/字符常量/index.html","14c72f8263293f56277eb526a9058039"],["/tags/快排/index.html","e1f9720cbe0937a108ba77e2b5b3fc14"],["/tags/排序/index.html","4d260f316e19a681d9aa799d7376b4f3"]];
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
