/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","bd5fa6126a52da51a3c12f4557b5822e"],["/archives/2019/index.html","d967b51e9962b853fddb96da7d14372a"],["/archives/2020/01/index.html","01f311cf17e262bd9b2b032877fad248"],["/archives/2020/01/page/2/index.html","b4e6f40dce65543745896ccc02ca143f"],["/archives/2020/01/page/3/index.html","7fe4df20601575a29f1cec33193f8e02"],["/archives/2020/01/page/4/index.html","29844663c59677326d0d69e283d8c492"],["/archives/2020/01/page/5/index.html","24a030a0c50d7d79fed5e2cc31919d23"],["/archives/2020/01/page/6/index.html","2480aad872fa9e43986f4a77c2f5c9b5"],["/archives/2020/02/index.html","54b626609def9e02d4ab1fcabfcb1957"],["/archives/2020/02/page/2/index.html","f74426621c0ad35299063d0f078bcd91"],["/archives/2020/02/page/3/index.html","10f0153e78dffc44ce2ac24b945558cd"],["/archives/2020/03/index.html","98fd62b1070382a296f4490a14dca4cf"],["/archives/2020/03/page/2/index.html","fd4bfa0a2eec9941bf5144c7cd3d73dc"],["/archives/2020/04/index.html","bf17c57b6486d699ec0604beac996664"],["/archives/2020/04/page/2/index.html","b4812243bfe8f1ed8f9837054625210b"],["/archives/2020/05/index.html","1611114a47c371387d38cba10b23c400"],["/archives/2020/05/page/2/index.html","505c07b35c84b57b1a5faeb1e7cfa449"],["/archives/2020/06/index.html","f238f8ceb26dc8e0f76107589cae28ae"],["/archives/2020/07/index.html","99fb8ad9fd35d0b266dd8e273b59b1af"],["/archives/2020/07/page/2/index.html","eba94abb8219e0dbded413b93846c079"],["/archives/2020/08/index.html","823bce3c462cded8150d618ba5d20bac"],["/archives/2020/10/index.html","f05674942c22a8d318480e6e57cee84c"],["/archives/2020/11/index.html","d0f41c77ccd5e4dfbb8304f1fb3d921b"],["/archives/2020/12/index.html","42f27ba0ff20218c2dd995c44ae65a24"],["/archives/2020/index.html","584e9429b1d4699b35437eeba9fa4508"],["/archives/2020/page/10/index.html","6cb40cf80b72ad8ccb344ecf95073ca9"],["/archives/2020/page/11/index.html","954a6909b17388c50cf74155d1829bb3"],["/archives/2020/page/12/index.html","57371f35094c69adc8f4dd837ed01a6c"],["/archives/2020/page/13/index.html","16827c4ea458963bba39c6dda1e96459"],["/archives/2020/page/14/index.html","cdd1566ef3e3ac076389aaf3c05477a4"],["/archives/2020/page/15/index.html","283650cc7f1282030b36e76af72a5191"],["/archives/2020/page/16/index.html","f6a50d2392ddb64551e7ebe152820326"],["/archives/2020/page/2/index.html","5cf62a8e73e61f5d091b256bd4239d2a"],["/archives/2020/page/3/index.html","ac09de8d31583ae20ba5ddacf3270113"],["/archives/2020/page/4/index.html","4cb825afdea1330afd8dd295b2783926"],["/archives/2020/page/5/index.html","ab2e32eb5177a92144d488ddd036b4cf"],["/archives/2020/page/6/index.html","73375290e157e0a40d446e8096971af1"],["/archives/2020/page/7/index.html","4c5d3d6d809a880087089da3ebcba9f4"],["/archives/2020/page/8/index.html","bc372fe56dc14bbbd06bed12a89f7ac3"],["/archives/2020/page/9/index.html","b4295f73625bc649fea058e27b16df73"],["/archives/index.html","941f8ec9202fc40dea01e5fea223b615"],["/archives/page/10/index.html","9d39bdb2ddf29066faa7a8ca269c02e1"],["/archives/page/11/index.html","614f00a43f94dcce63a203e290ed3dcf"],["/archives/page/12/index.html","d7140a44c0977d93844e769fde593f6e"],["/archives/page/13/index.html","86516204aa24a46faf90536631010823"],["/archives/page/14/index.html","4a98417a280bb80631f782a5807adeb1"],["/archives/page/15/index.html","d7b676e532028e974723106674f6fe28"],["/archives/page/16/index.html","509061a17a92cebd8816bf9e99774877"],["/archives/page/2/index.html","6772cfb541c97d1bee009c2e263ba1bd"],["/archives/page/3/index.html","c2d2221f8eb2b2e249b4f72070053a68"],["/archives/page/4/index.html","8422e8764637235fb1b2041d0538c390"],["/archives/page/5/index.html","2c37ec588f6eaa26be746e1fcd97b2c6"],["/archives/page/6/index.html","6c7513fdb9aeb2dcdf3cd379e3f11618"],["/archives/page/7/index.html","f73f126d260e2a1fb169735a2f5b5d32"],["/archives/page/8/index.html","4ca68e1adb2d0009403caa3b872ef541"],["/archives/page/9/index.html","a38f6c4bdc6ae0af6b56412f6568779f"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","2fceb6be135bbd6ae0d20ac72623a117"],["/categories/Linux/page/2/index.html","10bac6c5ac14034e4bc813e5a9ce5dbb"],["/categories/Python/index.html","e96a18ba382a94892a394ef7c600d984"],["/categories/c/index.html","bae5ce0b81342916a339c0847c6d09f6"],["/categories/index.html","a5da0310d47dddbd75d6a78085c84cc0"],["/categories/java/index.html","485c88399e40abace0d681a0ff279bae"],["/categories/java/page/2/index.html","d9a7bd7f58212ea17e65a2fac3738343"],["/categories/java/page/3/index.html","cc079d03226a48a143e5f611f88ee7bf"],["/categories/next/index.html","364abca2393d8ad29d732f8d70f96ff1"],["/categories/stl/index.html","202b4a35cf2978ed8c7192fd2bf84108"],["/categories/windows/index.html","68ea95fa6bd8c6e90ee07ad11c61e0fe"],["/categories/基础/c/index.html","eb9415d30b5b45db922a9497709d5eba"],["/categories/基础/index.html","63e5a71c4e473d63774ffb1553e77846"],["/categories/基础/page/2/index.html","df4480d8aa3a7ce2e79ffd8e82fe4229"],["/categories/数学/index.html","704e3a01a446abe1d552cfc1b0600544"],["/categories/数学/概率论/index.html","fa5f36c0298ed518f5cb19f9126aacce"],["/categories/数据结构/index.html","3f87a44f1447e26f380a1519f0dd48cc"],["/categories/数据结构/算法/index.html","8e27464c53e780fd5a238de316c0cfd9"],["/categories/机器学习/index.html","6089a1365140047dd6502bd099d24498"],["/categories/杂项/index.html","6d0befe64b3b9a61ae1c54d36537b43f"],["/categories/汇编/AT-T/index.html","8ccef714db87a45e9de676f990f8a710"],["/categories/汇编/index.html","c540f3bbe74d8b653f0e477672489a42"],["/categories/汇编/page/2/index.html","3cae7d86b07aacd5c8124401fe64c0db"],["/categories/汇编/page/3/index.html","d2c61d5a690647e7666ed984589e9f1f"],["/categories/算法/index.html","89687473744fc4a9f0245fa9d4e8357f"],["/categories/算法/page/2/index.html","675191b0272ffb04ba3afd64d1979a64"],["/categories/算法/page/3/index.html","ff7e76874fc860e7ae37b4660b0e0466"],["/categories/计算机系统基础/index.html","1bcabb80515490c7c72692fe9b36eca2"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9431e045c856e94676a5f2369f35d232"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","d372f62ba123929685b64e2ebd60fc3b"],["/page/11/index.html","12527421b369802787708cc6f36b5621"],["/page/12/index.html","8107927368a3a041dc05cc1f27cf8bd2"],["/page/13/index.html","d1a7f6078cde1c22c84bac746c68c3d3"],["/page/14/index.html","63e09f9fe343323b7bd39525d918e449"],["/page/15/index.html","921c77d532c4cc8e51e64a743fb4845d"],["/page/16/index.html","18a2acc37ea6a67e549348b5b010b21b"],["/page/2/index.html","e42ed8a773fa9242dea17019a5db747c"],["/page/3/index.html","fbf16dc3d8957ef8810942962e38efff"],["/page/4/index.html","19dfec7709a2043c4e9e3e4d99dd968c"],["/page/5/index.html","ad4360fc5026fb8c2443be986b40a157"],["/page/6/index.html","b3edee959e9d3274522875ab5a9916f0"],["/page/7/index.html","2d549445cd045dfc18791f5fd7712f52"],["/page/8/index.html","6948df0e67a02eb3eea1001fe25b7467"],["/page/9/index.html","6f3f75da00a6585ef26be48314fc97f4"],["/post/10919.html","51ffa0b3501183961c738947d5886784"],["/post/11051.html","45160b7b9362d3d6dad2085362352758"],["/post/11306.html","7dbf002376b2ae5895311a7d27a22bc3"],["/post/11491.html","9d526d14255bce1e1a4e8bc79dbea0ab"],["/post/11799.html","a2545c6bd58c7ba22fe45cfdf154663f"],["/post/12334.html","f398f15f884257ffb205b749e0266a90"],["/post/1326.html","5b712a10f6a988a1a65305e58dd0ef46"],["/post/14379.html","0951b4a66dce9122972bc9caf95a1638"],["/post/14511.html","699180dba6bbfbc4ff35e8c240a75ae4"],["/post/15201.html","ec56f6db456de4648926fb0ff694d9a4"],["/post/15425.html","7b26d42d026efd57270532ec876749b4"],["/post/16107.html","3973d161fa3262089904d756a28cafb9"],["/post/17862176.html","28bd72e7b06197a51ba00b8c5301c42e"],["/post/18431.html","d3fc2016ccae66d5856f6838460277bf"],["/post/18912.html","08b735b8d0894a1db8ec1d32ac89b373"],["/post/1b9c8662.html","244acf276c6f06302f511dc15dd96aa4"],["/post/20198.html","8b9679930e1e5a5812c765f6ac13afa3"],["/post/20ff5ccb.html","5db3c3db0ad48da87f2b167dd1ccd3dd"],["/post/21624.html","3af92bd7c2ebdf0603f9be1abdb28cb5"],["/post/2170659a.html","b6ba1776100452ecee14fde6ef230a8d"],["/post/22102.html","dcafce39573e622f80ba562109c91cf7"],["/post/22493.html","9004a0b8cbfb214ab8d05669db51ce7f"],["/post/235252ea.html","e4953321cc08ed450dfe97416bc95b9a"],["/post/25699.html","499b6ff7562eef2412f6ff339d095abc"],["/post/2647.html","bb0c67163222466582a49c85b3ad84c1"],["/post/26477.html","dfb100216c320999329d7a0dc679f1ff"],["/post/26671.html","f7e36dd14f1593ae2b233c3216721368"],["/post/26737.html","17273d5944803d282e8f44b6717fc4a5"],["/post/27045.html","1abbad4e35005d4bcbca4b322c6ea1e4"],["/post/27621.html","75ef5a3556a11511acbfa3ce5da593bc"],["/post/27890.html","b0f753795aa3edd7bb17b15ffced239f"],["/post/27980.html","740a013731a0bd7b3bae8ac26684a3f5"],["/post/280b588e.html","16500680b655f9f96f3be8b36244d670"],["/post/28579.html","18661dcbe3dbeffefd6d5fa5c2b19a38"],["/post/28877bf.html","93953df95864a7663fa8931a0ba9dadc"],["/post/28954.html","8bf28aaf070fd33a929be4c11f866d7c"],["/post/29378.html","d6ef93f8d20fc02f32d670212160b696"],["/post/29949.html","251802913dd17f1fbe7e35ad920e3889"],["/post/2ae43b86.html","d7333223e63e797624f8be0c65867628"],["/post/2ba82a45.html","f3291e0775ff169b0217d49f6d8271bb"],["/post/30072.html","20c6caece4d4446babbd8fcd7c031d96"],["/post/30479.html","ad0cb767643eb19ec8de641a45be070b"],["/post/31a6b40.html","53d3392ed3e45c84cf3dde2f3a4cff37"],["/post/325cdbf2.html","e4b79cb00b59b54926fe0e63ccd2a10b"],["/post/3319ed9a.html","2fabdf755a182475089173b96d59ae64"],["/post/3320.html","0ba567d641510291be395bdfcc7ae7c0"],["/post/33cb1151.html","00ad4595474ff2979a19dfd8dadeeb90"],["/post/34811d5f.html","95f0f3186c3a071561d2935d3b738519"],["/post/348d4e04.html","aeb993087a9d175aab444b868f9dfd5e"],["/post/3526.html","d280ef91b1313e7f267d9b10cf72cc17"],["/post/35532.html","94f508253013abd5aac83ff0f8afe779"],["/post/35848.html","da3740930b723d615e0cea0436f11eb3"],["/post/37318.html","8addffe8682219d76869dacb899cac20"],["/post/37663.html","da1784201ab18ec46ff67f231161c982"],["/post/38035.html","5586ec3842d6c8d2ac14f7893608ca53"],["/post/38072.html","a0ef0c537162ff7fb85256bc27499990"],["/post/38145.html","54d3cf5975b416bf4293190848b6affe"],["/post/39968.html","064de492cda654020db4429f3bd6739a"],["/post/3de4bc69.html","aed6d41fd519b5e7e6467d6322887a37"],["/post/40583.html","395352b1c5342f395f331ecbce555a9a"],["/post/40997091.html","8e535c333f01ba2446b522900d914e7b"],["/post/41129.html","5412db10aa6b23e4a4c7587eb526749e"],["/post/41763.html","1cf9ae3098205c60687c68a05125baea"],["/post/41829.html","9781dcf795abd9a0417e51955ea151ff"],["/post/41840.html","68b1f6631c8b969ca8138346f25f89a2"],["/post/43817.html","075fd418db1a0d9853516a9829a05740"],["/post/43878.html","0d60255d5cfe23434b37a57c7956803a"],["/post/44250.html","8a891826a10dfeee6bb6e2f2ef2e5d6d"],["/post/44336.html","00daec79df9b75cf9c4f9f27fa86b279"],["/post/44454.html","0167b7ba44cf27fe127e2cdf635e307a"],["/post/44487.html","36bb0be52bca00e4342a51e929fc7a50"],["/post/44914.html","c1835d94933592eebe12320e4c121b86"],["/post/4551c130.html","0d54867da4b1be10c15c4e6be16a382a"],["/post/455a4c92.html","45c9e03eaa3669f7bab255f1b03940af"],["/post/46466.html","e8720cbcc882a438431f7c98d4896b81"],["/post/46925.html","9e29481219f2cc7cb3c242c0e7bd9768"],["/post/47075.html","08a951725bc8ab9e49e2cce3929ac217"],["/post/48220.html","11cc1b19094a1f3147ee9abd49e6284d"],["/post/4b1879e3.html","fb3967002efedd9c0557bd65f6208282"],["/post/4c720881.html","bdaada08163eb671e90aab859d1dd3c5"],["/post/50daec4.html","852f2266c6673e120eb0ea4108697acc"],["/post/51491.html","54811a3a89d79189e06462a5689b34a8"],["/post/51e63dcf.html","ad12110bacce0021edc19e81e735cd9c"],["/post/52078.html","b1607a4cf142682d4c9cc74294e3785a"],["/post/53677394.html","0ff94a0bc4be02346b040c6aada9a1ce"],["/post/54300.html","b11a87907d20b067244e79bccebff5f4"],["/post/54612.html","98698545cfc92010bc3e447f2de2c9be"],["/post/54613.html","9bc12c30acee59a4b8d33ab4a822ab05"],["/post/54708.html","1a2ec3ba08c6a0d5049c1c92154b8966"],["/post/54778.html","26e0a9896f46efd03b653f87e1fc92bd"],["/post/5490.html","daf2e13f4f6707ac7162f0d13f9fba33"],["/post/55046.html","194017a9049e1137ade8ebf81a77b574"],["/post/56929.html","fa04d560ba2f906db2167349ab6f3bcf"],["/post/57339.html","452293ae1a995ceb127ed8b53025212d"],["/post/57449.html","41f6c286b8371a5c2b85fbd841d8554e"],["/post/57453.html","92bd8202b408d66bdb5a0d01c1389e62"],["/post/57671.html","c2edb72b45776550dd3df76656a1c3ea"],["/post/58313.html","c382d772be5a72bcd6f0388fdad60f25"],["/post/58481.html","c927b76257a25c939119464fafd8219c"],["/post/58986.html","d71d7612a0c11a7a5efa580df36a939c"],["/post/59431.html","ed4080c6e557c9b258a54654b4ffabb1"],["/post/5951da65.html","228c1acf6a9e8acf1fdebe2a3125a304"],["/post/5be7e977.html","3aab2d6b17f08f8fcd341a372d81a59b"],["/post/5f9e4eff.html","f9729a0d513e64a50b40b0da0f49f7c1"],["/post/604b49d0.html","37e15351bc3b83e9079fb84205f95f29"],["/post/61312.html","a357403936ff56059e9693d5fca45af7"],["/post/61738.html","d7cafed01303dd511f4dd518412044c1"],["/post/61809.html","8cf6596dd351b839a029e371dd7b49ab"],["/post/61eaf19a.html","bdfd3c3ccbba5214f4dd70623fdb031d"],["/post/63002.html","f38e31063c3503e74d106d58c29ecfb7"],["/post/63711.html","e2aafe26be5cb9f7046b30317e4a783d"],["/post/6587.html","9dcd4e8851e5806ca0c2834ac9c08b6e"],["/post/6589.html","78230809506240b025de75a35914eed9"],["/post/6880.html","cb88f931cd6233c74231561e8acd1a87"],["/post/70263071.html","a2a1b0dc971d9d2e4d379092ccac513f"],["/post/71038564.html","ce0ac0f64959cb8b4c65ad3f4d20180c"],["/post/7119.html","941994208b13b27a6f1447b8d6274b64"],["/post/74e7fdff.html","e8eb1404d8ad2d67dd7d34f4b8be2876"],["/post/7502.html","c061dbe4712dd48ed463012495f64e10"],["/post/7564.html","42519473c3c56e297a95b9199d38ab1e"],["/post/766f9b60.html","4f870249b9306ef9f5a7b7ef85cb6fe9"],["/post/7ca31f7.html","f2fdc177d4ecf4abc5d1120fe9a1e742"],["/post/7d1c86da.html","457451c4bcc33001491f2680f1ce126e"],["/post/7f3bcd7f.html","b1c4db0797d0717d29fb9e993ab82d58"],["/post/8039.html","2321ebe30d2002aaf450006f633d376b"],["/post/8050.html","2400aff77d4b28166ef4a72ac6d7e797"],["/post/8072.html","de2533dacc4100fbcb832631b66fe95e"],["/post/8274.html","584ae929e824eb8c25af4b170e07333e"],["/post/8372.html","3c3a6f7f2dffbf4ee26e13db8012ae81"],["/post/8498.html","c27715e8c1b8c1cdc1df0d61f980888c"],["/post/85b4e13b.html","8b02b93b4e17c3f4696919f9724d0c3a"],["/post/912b2566.html","d8e58f584940f0f5bc58f464b3792d9c"],["/post/9187.html","8bdcaaafb747751610272582cf8d09d9"],["/post/9197.html","0c4dc826381c368e6289ea1cace4b753"],["/post/94ceb2fd.html","36fd6dcf0e2146e61b9937aa339f2d37"],["/post/95495db.html","17778c4fa654f7cab872b05212d62b49"],["/post/97246020.html","1b13ae9282d183cb17af460f5395d173"],["/post/a3a786d6.html","1522af18e0eb38d8bd63bc03e271cf3b"],["/post/a444b428.html","350ff39886d722924c3af59a5afeac98"],["/post/a50b8908.html","911ff333fc9ca15554a9be8b9018bbcc"],["/post/aa1eade8.html","c6cb93254e2832a7d78823d278ac52e9"],["/post/ade8c6d6.html","3b123ef6034897e2af3e753349f69c7e"],["/post/ae8362df.html","9846a0f33b09094e0bd9fcdcaec0ea2a"],["/post/b4c1d206.html","f8f5d764edd2a1136bb0c1f99d049dad"],["/post/d431fab4.html","e1daf251f8a97d0eb1b5245a27fa4bd5"],["/post/d5381517.html","968d82f4e703b3ac162b46ea8cdf8503"],["/post/e058ffd8.html","d96743e8213cee3618412c09fa59d19d"],["/post/e0f8cb74.html","dd7d9ac2d1f1216c29c10c777812c741"],["/post/eefe591f.html","d1c22c9138dd5f73b986e6c1d34924af"],["/post/ef296a07.html","4f11dff53c8f81acc0563abd50ef9d34"],["/post/f201f9fd.html","688bba21794d8c3a319bbb302510b2cc"],["/post/f79e4123.html","d7d2f51be34fa9291434d71c6c24cb4b"],["/post/f8648a1d.html","4dd407601cf0024fcc985c9405af1201"],["/post/f89cb603.html","ef287aaae8ba5ebe5a23aafa317ec845"],["/post/fa288682.html","129c386cd660f95b59768cf44a449071"],["/post/fb98053e.html","456cdab0708d4e758b68603030d398a9"],["/sw-register.js","56fae601ca33d2fd588ef0029f900ac4"],["/tags/AT-T/index.html","58ddd6cb598c0e54d7b860db4dd7c3cc"],["/tags/index.html","a8d4dfb6bdecc8268c241423142ff7d5"],["/tags/动态规划/index.html","80dc61a5296bc9708f3d057138813f7a"],["/tags/字符串/index.html","af6b8606ac3d6d0148e2228b0a7f968c"],["/tags/字符常量/index.html","74d06742525e80406754267cb852f81f"],["/tags/快排/index.html","0e99951d632eaf30e527654979d76015"],["/tags/排序/index.html","d2268de2092baad4b31e8e1e8257272b"]];
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
