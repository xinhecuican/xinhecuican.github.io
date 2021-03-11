/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","b23e3003ed7ec2dcbb22b939845883c0"],["/archives/2019/index.html","d72bd4ad966c98d57e8bfe32ade4d66c"],["/archives/2020/01/index.html","d4c1c9a0fc074b7fdb5b73689bf3aa0f"],["/archives/2020/01/page/2/index.html","1ddc5e02155477eb667d218e6a50f960"],["/archives/2020/01/page/3/index.html","f327ed859f62b7765fed453630a5bf8d"],["/archives/2020/01/page/4/index.html","78e0f63881b72e5404fdeeba8d120c3c"],["/archives/2020/01/page/5/index.html","932487a0afcb27db3796b54b8b04b265"],["/archives/2020/01/page/6/index.html","94c5b863ddcfc3951f9ee04544882e2e"],["/archives/2020/02/index.html","b461c204eac28d43d8f9df09cc790f92"],["/archives/2020/02/page/2/index.html","ca9f51590de2443df3f9e7ff76f89437"],["/archives/2020/02/page/3/index.html","8f2a1751724d32014d6c1f12b708a565"],["/archives/2020/03/index.html","f38fcf883cef7c0a0769bf5c8434f88a"],["/archives/2020/03/page/2/index.html","c1e7970e478a3065ad17a1ed6deed9a2"],["/archives/2020/04/index.html","524f29c4390f9dcd74880e27c4fdedb1"],["/archives/2020/04/page/2/index.html","769ab8a0015ba9f9b453bdc20cb6cfd7"],["/archives/2020/05/index.html","6a1c9372e64afd8e2401ae37c4fb873c"],["/archives/2020/05/page/2/index.html","2cc55309af26b95aabc4647414fb738b"],["/archives/2020/06/index.html","c51d3b91bfc850f1999c55cfc1cf947e"],["/archives/2020/07/index.html","217026ea577ec97cc3e3d80d0a3fade2"],["/archives/2020/07/page/2/index.html","e45db642cf9a6bd54002386aa1ed3608"],["/archives/2020/08/index.html","0c8bf1e505e1e7a82c98eb0db91138ea"],["/archives/2020/10/index.html","6beeb0731b3da7f2093182b0beb75f50"],["/archives/2020/11/index.html","713ee0a272e0bcddc574338e62a09041"],["/archives/2020/12/index.html","06bc4515661f7d8a946a939981faa39f"],["/archives/2020/index.html","946fb0cdc575ef4db7ed260458f0c921"],["/archives/2020/page/10/index.html","4c8013fcdfd0078997d74a8c5bf3641f"],["/archives/2020/page/11/index.html","5903bb7f515de8878ca0cf67c2b859b3"],["/archives/2020/page/12/index.html","a8a59a09c740a30ab243485a61476cb0"],["/archives/2020/page/13/index.html","e166e2ec1b7af6a9c659e17ed33e09f6"],["/archives/2020/page/14/index.html","4e70900fe2958e3b330e2d83a91398e9"],["/archives/2020/page/15/index.html","56498ed6fbb3da7251916c37ccec0839"],["/archives/2020/page/16/index.html","5f460220841bf5dc2315863797745a51"],["/archives/2020/page/2/index.html","2dd4ad963db5d44cf3920aabddea4e16"],["/archives/2020/page/3/index.html","17435fb56e9141634654dac4973cf232"],["/archives/2020/page/4/index.html","d7aed1a9e27bdce2a6436f8105848801"],["/archives/2020/page/5/index.html","1e5cdfab0a70694856801618b3dde2cb"],["/archives/2020/page/6/index.html","6bff18a327752a1fd6345720d701abad"],["/archives/2020/page/7/index.html","b6fb39fc3c85dbc8c75b737d5db7e033"],["/archives/2020/page/8/index.html","e0d6790a0e11e7362e88b49acff19502"],["/archives/2020/page/9/index.html","d9c434627c6bb8191d1487b9b6cccf0d"],["/archives/2021/01/index.html","43818492abf17d1862cddfedf3a01b73"],["/archives/2021/02/index.html","a24299bbeeccb4da92305918a7b7e97a"],["/archives/2021/03/index.html","0510988f4c12e6ea2d1b1cfdc4f89a04"],["/archives/2021/index.html","da82de38b1fa4efa7b8ba67e875c25a6"],["/archives/2021/page/2/index.html","38bc7225efbeb20a7e741c4ead41c178"],["/archives/index.html","5289f01caaed5bffa5b340f3d028e8e2"],["/archives/page/10/index.html","04f4a5a9ff45b60d5298d370042c9e88"],["/archives/page/11/index.html","2fb330b7a78ec9fe98c24ad7d8c0d21b"],["/archives/page/12/index.html","1f1585afbde5ba13f148aebe3c0b6225"],["/archives/page/13/index.html","16d85a287696f0064ec2db11737a7569"],["/archives/page/14/index.html","476e38addb9cb1353be627e2c3ca4aeb"],["/archives/page/15/index.html","6cff4ba002c285fa2ba70d7ee8ea763a"],["/archives/page/16/index.html","1b439e5d5d6537f126cdbb7d48f68748"],["/archives/page/17/index.html","d0b2a83df832c703a6c28446de90b068"],["/archives/page/18/index.html","eb098efc33bd3371485fa35b4633e5b7"],["/archives/page/2/index.html","de5c9ec0a672186f0c0a679cff2560fc"],["/archives/page/3/index.html","f6b0ca35aeac4590cfd17299cb8cfa47"],["/archives/page/4/index.html","db84ab9ccff8e7e954d18b9a66c0a210"],["/archives/page/5/index.html","ac1e3334ef4e39436d3b970ea8f5ce7e"],["/archives/page/6/index.html","4251ecce35a01106ce8cbe3e7684f1f2"],["/archives/page/7/index.html","67d8a01c44f52f507a7c459d791a8e37"],["/archives/page/8/index.html","4736b64fbaa6f75111f486390c1ace2e"],["/archives/page/9/index.html","6454a8c7164bc7c1a52b7aaa54b9a5cb"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","ed42de9acd73d3129a3becce90ab2367"],["/categories/Linux/page/2/index.html","a392a96b98c8fe9bd7c7e58578f07740"],["/categories/Python/index.html","9a5fdb553139f41fb4150cbbee3499c7"],["/categories/c/index.html","ab4560b4cbb1e3c70e9e6aecfac082a2"],["/categories/index.html","aa0f2ac1ab5f584de997844b0a574b8d"],["/categories/java/index.html","a077a19ed91928cd1d36b957c5e1014c"],["/categories/java/page/2/index.html","75cc741584b6a223c0650b7b97ee4f45"],["/categories/java/page/3/index.html","3edd4ae053ecc6a945d15bb43e87daee"],["/categories/js/index.html","f323eeea782b8894b888b5ac9bf61d7b"],["/categories/next/index.html","ff20674a43e27877da4b4acfedbf3a67"],["/categories/stl/index.html","0f26990a75597a0194e9df160bd3c835"],["/categories/windows/index.html","4f3dd18f83ebf82af06b407f4c28b195"],["/categories/基础/c/index.html","ac76356a4caa6858f805fde8e69cff9f"],["/categories/基础/index.html","b998f72f4da5d5c9f28e10eab33de9ba"],["/categories/基础/page/2/index.html","d8082671a22ac7aba899f5d6c26dc4d5"],["/categories/数学/index.html","82cbd9691aa49cfe4a8408417d37ec3c"],["/categories/数学/概率论/index.html","259d9164553b8d16fc7c7241144fddbf"],["/categories/数据库/MySQL/index.html","2efc202db24fadcb7114e963e33db2be"],["/categories/数据库/index.html","9cdcecb61a2064908eeee21b5fb10d55"],["/categories/数据结构/index.html","7237b48866106385066a90b6dbac79c2"],["/categories/数据结构/算法/index.html","b1af79fc274634ed8eca985cae7cef5f"],["/categories/机器学习/index.html","2cccc2f704291baaa0e847a2444fd5f0"],["/categories/杂项/index.html","4361c00e4d337f352d67c9107239c37e"],["/categories/汇编/AT-T/index.html","db04d313c486dcd47e3fb6bd78ef36d4"],["/categories/汇编/index.html","ce99837d0a1e9f809835f87a730596f4"],["/categories/汇编/page/2/index.html","f3deceea80debedbb22aa272c89d6015"],["/categories/汇编/page/3/index.html","867af9980e6b187c53d72649d5a7804f"],["/categories/算法/index.html","4fc6f95affc16f028636ba7aee619462"],["/categories/算法/page/2/index.html","4131ad4bb6b2f6495ae7e0968cfc7e5b"],["/categories/算法/page/3/index.html","2b70c70f8e9719ab8bdded3068e69ac9"],["/categories/网络/index.html","67ef6035b0deb1ed49a794d274e17e4c"],["/categories/计算机系统基础/index.html","5c742b1209cbde55067cf88bd73a8fc1"],["/categories/计算机系统基础/page/2/index.html","6780c721b9196c0cbad3e29816c53b36"],["/categories/逆向/index.html","df6855aa36874b4e105b170311831c40"],["/categories/逻辑电路/index.html","701f7a8d26e8d6a3baf2c8d1ddc078d5"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c4904e92166937e30861907bef96ff0d"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","59cb00e03db1c068c6bcaa0a1f3c40c0"],["/page/11/index.html","d69a0e26c3fc3e06dd480f6222eb0849"],["/page/12/index.html","6896d59c5847cce1eab63dca5c544346"],["/page/13/index.html","9614e2738b778d539d23761c6c2fb714"],["/page/14/index.html","0b4cacdb3fd6ef789d2154f22742b09a"],["/page/15/index.html","7658fd9b3ca2514299067d0fbd9b187c"],["/page/16/index.html","1a66bc95c62375017a545d97e5da8e69"],["/page/17/index.html","303bc6010811b5d2b12963198a09de3e"],["/page/18/index.html","8c81fd5bd84cf0be79243ff7d188d29e"],["/page/2/index.html","02086817b073cb34b7960b27ec5c8018"],["/page/3/index.html","341b8cb0147cc7666531e1ba81c57155"],["/page/4/index.html","08d8de7ee9201db8e54bfc306f6fbb44"],["/page/5/index.html","fb3d442558fe2f467e5452a65c0211d5"],["/page/6/index.html","6b4b73636c7c7838084d3f6c4b12c49d"],["/page/7/index.html","d7b148af89570ec9bab4904e0e1a73cd"],["/page/8/index.html","ad5f839da5da81a31e9fd15a8ba8df8a"],["/page/9/index.html","8e5c53963e12a2140109add1ec83d39c"],["/post/10919.html","8aa18f2600550837dc6de13f98c5cbd3"],["/post/11051.html","5a1e69dad42d3cad4ca4dd36b9c94458"],["/post/11306.html","7db5cee20b2587f57153ec956119f28c"],["/post/11491.html","45723daee2c7d5506ef6fa289d6e7730"],["/post/11799.html","a04de068d621097049e40ff8cc02a977"],["/post/12334.html","d3f5c2691aff7adb776fac7ccbe288a4"],["/post/1326.html","ff98f7279ad27bfdb0c5d7909ee5a27a"],["/post/14379.html","651b7971b1156e6ec76be26bbb28f01d"],["/post/14511.html","7e05438bca12eecf4910159b0cf9ec5e"],["/post/15201.html","ce6479406382b236275030f7cb7a22e8"],["/post/15425.html","15b5b9b1ac8026ffe1af3e2850b7fee9"],["/post/16107.html","1cb46eaf2c32662a3bf86e37f7244d98"],["/post/16e2846c.html","c703cc2bba4ac82224c39ed6434d5fbe"],["/post/17862176.html","c4e04036c8190ee6ce410bf0edd6d163"],["/post/18431.html","520def61480b345e7acd86c7635040c1"],["/post/18912.html","c77be6ad186e64bc29222270aa6c4369"],["/post/1b9c8662.html","5926eec4d778079f58499223b43ff443"],["/post/20198.html","1245452524bc8da24c7844627610d4e0"],["/post/20ff5ccb.html","17351cfd31d614adfbcfcbe70c3e2e6b"],["/post/21624.html","23aa7e964a90f4654928279b074b7256"],["/post/2170659a.html","7ee809143454e12d175d1d64294acc59"],["/post/22102.html","24f7ed9bd6e8d9df60aedaafdaf20b0a"],["/post/22493.html","82a4c3d3ca3f08d39b31d860e9139707"],["/post/235252ea.html","0012696fc8c7889a7962f9f7af33bcb0"],["/post/25699.html","2c021da13f609b8bf036761782976ad7"],["/post/2647.html","4b0fce2a0744687b171f9372abebc60e"],["/post/26477.html","1ff99a3cf5574f2d6f1e7244293a52fc"],["/post/26671.html","a37124c2395d630f599bcaf9e8753572"],["/post/26737.html","e79a1c2ed6b610bd218412dfd107e5f2"],["/post/27045.html","8618f454aec1aa877086b40b21e7e69f"],["/post/27621.html","916a2485276ea88cd73ff8a86182fc65"],["/post/27890.html","4e664d5f02a86bd798c29669043b89af"],["/post/27980.html","1c861f45797c18d0b44dfa4c9cd581cd"],["/post/280b588e.html","58c5bf459cba831a54a1e7d80c35dcf4"],["/post/28579.html","cc1a6848a0197343835de372ecec8ac3"],["/post/28877bf.html","1abf2a19965b167d5397c08ea6452df8"],["/post/28954.html","6d24da1f8527999d5095be7e33366249"],["/post/29378.html","638e1e9f5496b09119132dc0fdb49120"],["/post/29949.html","6e1faee5dd19a8454d0352352aae1684"],["/post/2ae43b86.html","4146436a6f1585422e511d0b38ab8dad"],["/post/2ba82a45.html","7fee03a62910590c58a30986ea5be74c"],["/post/2cad8b04.html","5ec6af72243d3395e68080570537df4b"],["/post/30072.html","e1b9f19948cf94219ba6b42558cc8fa4"],["/post/30479.html","4b2b20bd66db7f4390dac456bc83f590"],["/post/31a6b40.html","ba8ce5d8fd0534d66a0fb6a32c0dc326"],["/post/325cdbf2.html","656d857f746c19b73404e9a2995eb9b3"],["/post/3319ed9a.html","09943c9de61b29d70dd37d53906b3a5b"],["/post/3320.html","478cef469721139badabc90c50efefcf"],["/post/33cb1151.html","6bd81222b1af67f05ef0939829ed9966"],["/post/34811d5f.html","f3d6df11254472a43de1aa55b6011d29"],["/post/348d4e04.html","fb06fdd1da2a4a4d651fb6958074b084"],["/post/3526.html","20d497ee660a89048183f8e17a8b2e85"],["/post/35532.html","23f199d9efbde441c56ae0570198a27a"],["/post/35848.html","9fdefcdfdcd8288415fce70294655bd0"],["/post/37318.html","62832b2d969bf6247d1341c324be384e"],["/post/37663.html","e81faef0ffcfa0bf16df46e0fd958ee9"],["/post/38035.html","12cf469fea6d1accc4d4fa90ecfeac89"],["/post/38072.html","d9b54e8ebdf93087acea0fddc9b95ec2"],["/post/38145.html","2e3ae2b1ee91173929b170ff7d2a04f5"],["/post/39968.html","e8155d37b8a8b1ffba798d00b1c3066d"],["/post/3de4bc69.html","012bf778304e30f39d01ffca26456c60"],["/post/40583.html","e31efdb1622355f45e6e4cc338e35e18"],["/post/40997091.html","5f766698f3f2ab640b2bbda9e5867369"],["/post/41129.html","5d4eecb79a0d38d914947492b21a0224"],["/post/41763.html","4898dbf88b2043d2c8473cb167d5174a"],["/post/41829.html","f58157e33c8724f5378d151cb65e3fa8"],["/post/41840.html","5823c6d4d4883451ec9314764dd8c33c"],["/post/41e39f2b.html","3398ad9007ef475e517d17672f473e67"],["/post/43817.html","5b6ecbcb816d0bd6c22030222bb8d9d3"],["/post/43878.html","7eb2fda5a7f25c6a899a8df3e6fc1637"],["/post/44250.html","e5e7400dee0e7a5aa85ed4164e2500c5"],["/post/44336.html","d35e9f0d9636c357bf726afc213812b1"],["/post/44454.html","8699e0d53d753c4b466c82c802190a5f"],["/post/44487.html","08af1af2eac336872fe14d3aac300914"],["/post/44914.html","29fd7aea4769b7873db8983b830b39e3"],["/post/4551c130.html","bcf62df4bd1bb2d17079b9eab9f16ebb"],["/post/455a4c92.html","e13f4f8e162363cdeb57238315092811"],["/post/46390b34.html","045d5e0c2641143c49be2a286ea720c6"],["/post/46466.html","9f4784b1246afda0dcc63da29ffc2cfd"],["/post/46925.html","47a8fa03c52614d6f5c5bb9ce28b899b"],["/post/47075.html","8666cda014321b952e4fe9e463f3483d"],["/post/48220.html","a5313faf0076494da3e422f3ac4d5bbb"],["/post/4b1879e3.html","f3994f194b7a3b7bc9bfc47f9876bffb"],["/post/4c720881.html","6769a555c981844f9fff1e06ea6f23bc"],["/post/4f4fc0a1.html","2e1369072a1e99e2d51a41be39b93c62"],["/post/50daec4.html","65e5cd843b63c95f7ee05d819aeeb18e"],["/post/51491.html","4385ba7d48a772e59453a728b529143f"],["/post/51e63dcf.html","89cec411fa7a1584f48c7c2d20680970"],["/post/52078.html","d48069b8bea4262db71a8029b9fa20b5"],["/post/53677394.html","f79e5fad85762149b2b778b0cef0bd51"],["/post/54300.html","2b7422e41206eb9ff7223ec82ec67456"],["/post/54612.html","ed307e944c5bc87986f24835e5dbf0ab"],["/post/54613.html","2de4e4a35d518aeab9699b368971723c"],["/post/54708.html","dda06ce1328740eca0f6c077c2e13682"],["/post/54778.html","2cbc040a6c8c4543c16a88ae99058240"],["/post/5490.html","b9a793c2382a6649583ae735e71ad77e"],["/post/55046.html","afd83ad74604714b3e3535e52a8894ae"],["/post/56929.html","48e406105f46c5c8d15dff4ab52d2216"],["/post/57339.html","af79a837eeb706e0ac026cb690c54d4f"],["/post/57449.html","bcecde18edb73e6d74c2b2b1d74a227b"],["/post/57453.html","21fa7d0bba80297d7bf544971a567754"],["/post/57671.html","6ae0b645365846cc329bacf66a53fa2e"],["/post/58313.html","b8babb3992881728c0169f3022d527e3"],["/post/58481.html","f200ea10b88a23a4ef1cfbc2e10c2452"],["/post/58986.html","2756ab06656a76221d379c82dc5c2e18"],["/post/59431.html","8a1e70ce323efd94b5942612e6690286"],["/post/5951da65.html","369c24d60c16b8eba921e9fbdcfa9e50"],["/post/5be7e977.html","ea27a07c8e6e54cd7592df2ab1b7355f"],["/post/5f9e4eff.html","b4c7a07e31f29028559f35b996e3e7aa"],["/post/604b49d0.html","c3d0fd3d09f2816b878538e3d54caff8"],["/post/61312.html","79d14853a901b1481e99d9b2380cb64e"],["/post/61738.html","7c11dff2d215641ea8faa5900085f3f0"],["/post/61809.html","5a71bb834a06b12a5ce94ee8ae398e23"],["/post/61eaf19a.html","7ec19f6c36015d00a57aebe399430988"],["/post/63002.html","a31580f387424214fc75d0afca34c4b9"],["/post/63711.html","f3310122112778f4aa6ed34f4852e4c7"],["/post/6587.html","a1028d15018027b59b621612d2a198ca"],["/post/6589.html","8136f5dd46f30e9569397612b2a94400"],["/post/67454659.html","87d9b52f789eac2b81bb8fb51f425f62"],["/post/6880.html","2c67ba06a2b87c4d0731727f78b269a3"],["/post/6ee50502.html","37167872b1370ca0d14b0450917a59c1"],["/post/70263071.html","f616f1c5ef72251b251c7d9c0dd72afb"],["/post/70d4f4af.html","7db70ba388568c1c238c551cb991c330"],["/post/71038564.html","8493b50b340e788cd8cb9ff07d6574bd"],["/post/7119.html","c64a4c11486cdb46019ea6246db48b87"],["/post/74e7fdff.html","c4e310c9fa690d76599e51c498e8c33c"],["/post/7502.html","5562e5648684124c5506883a22d38462"],["/post/7564.html","46a1cdc7665b47fb52c37c9d288cd641"],["/post/766f9b60.html","38805d7ddf30101dc6211567626bfd3a"],["/post/769365ef.html","7ebae3d8857279a11cffce489640c0e5"],["/post/7ca31f7.html","b273042e332990b59a7ad1ad97383e0a"],["/post/7d1c86da.html","891661f5dc7e0288f342aa9ed80da761"],["/post/7f3bcd7f.html","2d845f79f4d263be839d1392ad2c31ff"],["/post/8039.html","f87945bce3649c894f4f15411e833c5d"],["/post/8050.html","9d2a160a40ea34b56f23f059bb99dbe7"],["/post/8072.html","98a7eab8bf90b0f3529123c31c8c9e20"],["/post/8274.html","136e3cf14160870909ea37c91ca4a118"],["/post/8372.html","20617a9848e068f9e5e9306222c9ac90"],["/post/8498.html","94bf28cecafd265255b1ccbe3d940064"],["/post/84ea90f7.html","a1cd19108db5631f007a9cc1c3026428"],["/post/85b4e13b.html","1b789cc0648bb283c53904b7a931432f"],["/post/912b2566.html","ded8d2dc5dbda92f71deac81620b3e86"],["/post/9187.html","d13787d89b3b9afbdc15a82ff6df7d19"],["/post/9197.html","04fc6ba1e5711229d290df6e6c37f129"],["/post/94ceb2fd.html","5f45657011c6011923b2071f1868f2f9"],["/post/95495db.html","e29b27f442c4ae726b3b4f6a5a4e56a7"],["/post/97246020.html","ddf5793fede5ea65191611d41ed1fca5"],["/post/9954ba8e.html","2cf92b549eddeee05e9728606878f8f9"],["/post/9d855db5.html","707b345e71b525dba851e21aa079196f"],["/post/a3a786d6.html","c582211119d1f384e945a710178a189f"],["/post/a444b428.html","65e0d38195d814be0ae8310249804929"],["/post/a50b8908.html","d067935b4418eb34ca5f86597a2ce104"],["/post/aa1eade8.html","3ca68ac523ecdf4c242c5ebbe4b526bd"],["/post/ade8c6d6.html","d2d9a6ffac7d48a212a77948626b8998"],["/post/ae8362df.html","207bdde41427a0b6d32f1e83a97b2cc9"],["/post/af3eed3c.html","3844f9490b5e3eed0e63d50ddecfa379"],["/post/b4c1d206.html","e2bd6756b329272fba72ee1663009b9b"],["/post/bcc68732.html","3661d3d600cd0d32c1fd5325489ecd3e"],["/post/bd608ff7.html","20e7540d482e141536c8294c99f0461d"],["/post/c82a1c99.html","edfeeb96a795c805c161b061542d9321"],["/post/d213fc7f.html","726f139be22716773a27a6a6119f4a47"],["/post/d431fab4.html","5e54f375318eb2d4502489c229855bc9"],["/post/d5381517.html","0cbf838753df76a754f6de53903ad16d"],["/post/d94f88de.html","2a213cb316637d18c1ab7f7272dce538"],["/post/e058ffd8.html","9822a6f73ceef81f059f7533e662f93d"],["/post/e0f8cb74.html","9ebaf98899ad1b85b8cadb305372d31a"],["/post/eefe591f.html","541d56be89f651328c1475dc7991fe21"],["/post/ef296a07.html","5704e8e705df9b40f857c6d580b39f49"],["/post/ef3a3fcc.html","43a59fdd9148a8a9b8d5ba00ebbddf47"],["/post/f201f9fd.html","e894dd95ed8c35bba2a97f5ad1f6c357"],["/post/f79e4123.html","8a76388a05b55a8abf08b5609b9ed299"],["/post/f8648a1d.html","54f7846f5575899aecd95ecaaae7b5c7"],["/post/f89cb603.html","129aaac79f59aa887949026b36c32bd0"],["/post/fa288682.html","d13f40df232c72b2b1b40fa5f9b5833a"],["/post/fb98053e.html","4ea80067f37de3484dda7c611a7c5ef0"],["/sw-register.js","eac66dee17dc480e0fcc14c586cfd186"],["/tags/AT-T/index.html","8e2afea420b314cf1ff77bf6916dbbcc"],["/tags/index.html","25b7da326cb189331a7da8ed332925cb"],["/tags/动态规划/index.html","fd5d3b9dd9ae740c383228aba67fed30"],["/tags/字符串/index.html","91abad829faff45ab3cdef7445f9911f"],["/tags/字符常量/index.html","d93185528485babd1d3a706e124a4142"],["/tags/快排/index.html","2ee9a83d2102fb75adc19e93de0a9f40"],["/tags/排序/index.html","1cc9a2f3b8d08846d875a0423ce6f94f"]];
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
