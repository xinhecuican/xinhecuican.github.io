/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","2fb53009fa956660ec538e49850f245e"],["/archives/2019/index.html","fe3ed9ad74736d9783d6c1e1cb247ff4"],["/archives/2020/01/index.html","b88cab3634de6f8736384d73c7fb9644"],["/archives/2020/01/page/2/index.html","109aa60a8f6d9b9b5580ad67f3178e73"],["/archives/2020/01/page/3/index.html","cae00642810528a7b36de045a6637d4a"],["/archives/2020/01/page/4/index.html","f854dea75aefd906c45987e81816439d"],["/archives/2020/01/page/5/index.html","375dd9d557704cfd493e2e7e326d0d47"],["/archives/2020/01/page/6/index.html","43e309b49ea13c47a95b56ff5521f1d8"],["/archives/2020/02/index.html","160900674515b01197a3a64efe4b6275"],["/archives/2020/02/page/2/index.html","11ac3f1878fef104fb3d645c1ed3d0e5"],["/archives/2020/02/page/3/index.html","4db4b723559f8bceb60073e4643b8995"],["/archives/2020/03/index.html","87e0ae48823ec4d466dac80039688fd0"],["/archives/2020/03/page/2/index.html","b66a13ff048133db2b4ebcf6ec59f137"],["/archives/2020/04/index.html","3da2e372dfa9e6b737d8887ceff44be9"],["/archives/2020/04/page/2/index.html","8c8694db6ef07561cd1fff627e21a415"],["/archives/2020/05/index.html","5de6ff0512001acb08c1245e47981514"],["/archives/2020/05/page/2/index.html","9c7006f36d87a3a6785a794b74016d99"],["/archives/2020/06/index.html","e8c95657e723d64d7557f91d6a4c5ab0"],["/archives/2020/07/index.html","f0280cf6cf12cf9038f2db0b2dae7dbc"],["/archives/2020/07/page/2/index.html","f7502c3c9ca51b6d3dc26cc058a4d157"],["/archives/2020/08/index.html","220a62e5c62c66be6d2473c971f686d9"],["/archives/2020/10/index.html","63706712ac48aad93febdb2ab8f950c0"],["/archives/2020/11/index.html","0589f5b1a3d95330a4feb4ef9b7fc2df"],["/archives/2020/12/index.html","074fb27ed6153eecd5a29570d0f82d5e"],["/archives/2020/index.html","6c106e779b8b1495e384a3cf34ea464b"],["/archives/2020/page/10/index.html","e0b4deb77338a48d3ec429108e7ca8c6"],["/archives/2020/page/11/index.html","335ea4001b9edbf4b1547a53fe2a3c4d"],["/archives/2020/page/12/index.html","b1cc9ccd70f67c619c78e149769e97df"],["/archives/2020/page/13/index.html","d41fd65963baa183c983627da72e7f2a"],["/archives/2020/page/14/index.html","98fe65c78d2be945f5ff48200693c3eb"],["/archives/2020/page/15/index.html","0100f773c84cd9726e35e23c2ead4d41"],["/archives/2020/page/16/index.html","cd2989b3afdbaad2a6f488d704aa8269"],["/archives/2020/page/2/index.html","e7d04c424ddf1eb2ac337ba3007e4615"],["/archives/2020/page/3/index.html","0b57356517ce77698a769a426123980c"],["/archives/2020/page/4/index.html","b34cb57703ee0a32ea3c6227ef9c5af7"],["/archives/2020/page/5/index.html","9446bcd9cadd91f0d76ae24e92940cb0"],["/archives/2020/page/6/index.html","e18eeccdd6ab9394c80ba6b74a8b252a"],["/archives/2020/page/7/index.html","f78c977fd717ca2a7c09fdddfd4b46ea"],["/archives/2020/page/8/index.html","68ead2d360315fa0f35c2f6856496e30"],["/archives/2020/page/9/index.html","57781d9f37c5b1ff3aa3d8dd226e007d"],["/archives/index.html","0f8fc30bc46ec3222be9db693b5418be"],["/archives/page/10/index.html","a3f8430e11b82ef1e0944be5c5372df6"],["/archives/page/11/index.html","bd97cad179ca897fead1a190b3026b96"],["/archives/page/12/index.html","9b46b92a3f376b6708c29f93ac73c786"],["/archives/page/13/index.html","742ffd16605d25ca8491e554209fa837"],["/archives/page/14/index.html","ec640fcd9784773cab7ec80b2d855f8a"],["/archives/page/15/index.html","8c087247d4c143cce57904a5852860cc"],["/archives/page/16/index.html","594ab818d871db6e549c35e85768ae67"],["/archives/page/2/index.html","9d313b3c7b60f67cd35cd473f8ae7c98"],["/archives/page/3/index.html","10df069a4f8458de297d5b577e0d4133"],["/archives/page/4/index.html","dcec0a510d34c982e7641d78d6963832"],["/archives/page/5/index.html","31cbb768f7ca1ddd4867bd6988807bd7"],["/archives/page/6/index.html","e2cfeb98cb8d49a547e3d0f386e57eed"],["/archives/page/7/index.html","ee389c282d2a67701adb22bc6638b255"],["/archives/page/8/index.html","02be890e2b0da5db017922bff3f8d19b"],["/archives/page/9/index.html","d0ff19a95f40eaa44891c7f104e61e9c"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","541028b1494d002ffada15f6f9707ffd"],["/categories/Linux/page/2/index.html","62a3b1c13ec4aa90297c5d7fa0dfd697"],["/categories/Python/index.html","776743240c0186fb76cdac481c1f6d02"],["/categories/c/index.html","e6ccfe054d0f0bc821b851c98aa10c7f"],["/categories/index.html","02c2a03450aa24086fef884ce0ef9113"],["/categories/java/index.html","541a1457b72129cd74de800087e404b3"],["/categories/java/page/2/index.html","ae5fa07cc4bb1fda34ca63126d2e2f7d"],["/categories/java/page/3/index.html","c18576b52dc358756afd7e7c6eeddb16"],["/categories/next/index.html","e01735cc5cdcfd028f751e376deecfe4"],["/categories/stl/index.html","ea015eeea48986b8fbabf4f139f393f6"],["/categories/windows/index.html","658f60dd2f7d1d5d2ba4fe83a7b85158"],["/categories/基础/c/index.html","3283f067ff2b68c83cc822029077d33e"],["/categories/基础/index.html","3d4aa5e53baae9e61322af38b1614d7c"],["/categories/基础/page/2/index.html","5ccb4c318fc64a180a0186566f048926"],["/categories/数学/index.html","f019a97044e356ecf564376c44d7eda4"],["/categories/数学/概率论/index.html","e9f1466be6d79b6c91712f1288fb318c"],["/categories/数据结构/index.html","d86c2b8ceb7ec1d84c523fad89c56678"],["/categories/数据结构/算法/index.html","f8336e45a7049ced22c140c34cb46755"],["/categories/机器学习/index.html","8ad1d6bf55a714cc69ed43b99a55f8a9"],["/categories/杂项/index.html","bad651d6be9a4a763047bc59015af3b1"],["/categories/汇编/AT-T/index.html","6943f0726eed00c759c96200a63a9036"],["/categories/汇编/index.html","37ce2849283c40f29722124cb2a97bf6"],["/categories/汇编/page/2/index.html","9a7867c62751d50c3fa19b993848ce98"],["/categories/汇编/page/3/index.html","8a6f4cb721498225560d7d983c1b1724"],["/categories/算法/index.html","370a3c9f08e797183dedcb78488e413c"],["/categories/算法/page/2/index.html","9333841868fd289dea6a56fb52d67978"],["/categories/算法/page/3/index.html","70e635a60812a90b339d680033f8545f"],["/categories/计算机系统基础/index.html","e73af5c0b9d8467dba740b6051dd186f"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","7a580a3c13eb27df0a15d868c66f9962"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","31b7f3f84bfa3f7ded070ae3548525c2"],["/page/11/index.html","353c24182c0586cc14df24e1be64b429"],["/page/12/index.html","6446315a161666e1976fadaa98842bc9"],["/page/13/index.html","8366e0023758455215f3999ab7fbaed3"],["/page/14/index.html","7d30e8d3581d5c00858ab8be6010aa25"],["/page/15/index.html","b12fde13d098e39ea264018492b5be63"],["/page/16/index.html","ffbb54054b911ce8e1f609280100943b"],["/page/2/index.html","1721ddf412990fd0fa77bfd77f13cd08"],["/page/3/index.html","4d34ac23ead9a801e973cb692728d1a1"],["/page/4/index.html","6ccdf06a24b54d7408f93f9152b4cfb5"],["/page/5/index.html","add9f9bfee9c35c7329e4298ccb9dbe3"],["/page/6/index.html","525575a169a7c5307dd9ecd3b581d660"],["/page/7/index.html","f33fbfc1a90b511c48b94ec5cd316667"],["/page/8/index.html","ca53bbc58eb27e6a096c378947957943"],["/page/9/index.html","db4c1cecf63108ce454ec966dde96a3a"],["/post/10919.html","e197a1610f59090a14a244057681b944"],["/post/11051.html","f201d36b2bdc2c6530fc21a515ed484d"],["/post/11306.html","68a2c65a240f6cd0b96d6b39fc61717a"],["/post/11491.html","3803f972da84d2e747fc6be278988bd9"],["/post/11799.html","c51d23b5e5d2fc415f98382afa3f6728"],["/post/12334.html","4cbe4c9a6f5d7a909b530eda92f45341"],["/post/1326.html","ddf95ccf057ec0fe0e7ac91bfea5a47d"],["/post/14379.html","9dd73bb8bdd52e7b7a6920ccaa46e3d6"],["/post/14511.html","da1dd1c359248cac197c25c18a4bf90e"],["/post/15201.html","8e95d840373a87bffe931383d8ad2e06"],["/post/15425.html","96428fa28855c46ef9d9474a7d852f55"],["/post/16107.html","23a64c855daa94f2eabc042bd63aa483"],["/post/17862176.html","852df19a516355ba473c1a5ab2c3cb2a"],["/post/18431.html","fbf9664dc285c5f4904ff85570ef633a"],["/post/18912.html","e8f3a1af6ed5fcaaecf295471deb03a4"],["/post/1b9c8662.html","d0f4ba5335ba49fabc61d04243887790"],["/post/20198.html","ff6b1523853626e1133c0589889c1afd"],["/post/20ff5ccb.html","4383345e901414f7c7880820a23b7e8e"],["/post/21624.html","8001d187381b99950fe5385d780348d8"],["/post/2170659a.html","7f5fccd2a900deef9d3e983a764845fd"],["/post/22102.html","17c4e6c36b0d1a04fd86ef92b37df8e2"],["/post/22493.html","a57576f9b5b44fd918ee594efb9f1c3a"],["/post/235252ea.html","7e538f67ea2b4a7ab4836b4fa90fd085"],["/post/25699.html","0273b9e9d32f5a418d0f2c23563103e5"],["/post/2647.html","29fc20ea900033bad020576c4ea00702"],["/post/26477.html","6f7cc8b2b06a087c745fe4b75339f84f"],["/post/26671.html","325a2aaebb76ce4570ed15ecd5ed2a86"],["/post/26737.html","7f8a50cce37cf1a12ed655a68781213c"],["/post/27045.html","37c9418f7a779442d4f9c65d9cedb4c5"],["/post/27621.html","ca67fdd3fd55ec2b5db97e2603de0e65"],["/post/27890.html","af7e7890f147b570d17bef4e50f2d2c9"],["/post/27980.html","081be49bb2316251d0f47ddecc0a41cd"],["/post/280b588e.html","71f4060f48247bc796d374dd191ab2d5"],["/post/28579.html","060aef9ea5e3bdc8c81ce3e57b023062"],["/post/28877bf.html","75cf4c0ee5f40e1dc4371e2971b1fdd4"],["/post/28954.html","c8b08052e49e960d15073d988e2d9fca"],["/post/29378.html","509620ce8e76fd5de135980b963e2f85"],["/post/29949.html","4872d97b007f6b96ab5993fbbf264bc7"],["/post/2ae43b86.html","971bae63d65f6c1480c489e78ddfa4a0"],["/post/2ba82a45.html","926fb35eebce3cbf27a21be1237dfa3f"],["/post/30072.html","0c4985b4c76d9d9ebfc7704fd20da170"],["/post/30479.html","6aea6c8601d89242a783490ed778b875"],["/post/31a6b40.html","086793da5aa6f67c88cbe0c949caf34f"],["/post/325cdbf2.html","421d120ee0090dd79171bc060ecf74b2"],["/post/3319ed9a.html","a962eb59c58d5a83a16131c504624709"],["/post/3320.html","9344e2197a3e0959604c49926a819d71"],["/post/33cb1151.html","5a7d6d3015c6a98b9289a5a2f19675be"],["/post/34811d5f.html","1ec2534e35c60b20ef97af744287fb7e"],["/post/348d4e04.html","e524afa5b941f3d3521b097e09d13932"],["/post/3526.html","48abaf31c15f8ca81a85ffe93555dfc8"],["/post/35532.html","d338f7fdc3deec92b247a827aa7b18bd"],["/post/35848.html","dabda7ad664d1e0370595745eedb0ec0"],["/post/37318.html","7ef6fe750512832e4d97ea346f93ff7a"],["/post/37663.html","0edb0dc3e1d6212fa7784b579a37aff1"],["/post/38035.html","1afb8f292ad2faf72750130ee836e6c1"],["/post/38072.html","1337ccd8431cffcef4d55bae073a5aa6"],["/post/38145.html","3f79288220925b3998cb3ccf8303f0b9"],["/post/39968.html","a503a606450a19ebd863ab13f5c93ed6"],["/post/3de4bc69.html","a0ccd7702b64a3d4c728e0a65dfb14f6"],["/post/40583.html","df79c28b90bdb8c2c4f749d0c4e2a5d1"],["/post/40997091.html","1aa0019f0e34e94b123485d13a1be67b"],["/post/41129.html","e0f6de390552833c9b71e69ab7e42da5"],["/post/41763.html","4ea2a1854c70362ceea71e4bd400d8a1"],["/post/41829.html","44a954bc32723ee07eb7f43e55cfb5dd"],["/post/41840.html","7926d540e5878c8329a047f20704cf3b"],["/post/43817.html","dacc962f8c7b2beee46317db3bf5c16a"],["/post/43878.html","8a50251dff648ba99ad222068100d76a"],["/post/44250.html","21a2fb33e588074c8fbfa6f506dfef1a"],["/post/44336.html","97727962c0f76c599a5f63a4e251bf2e"],["/post/44454.html","6004805249a0c343d9e53a5876592dac"],["/post/44487.html","3adc9d1442c60734748266e469092208"],["/post/44914.html","6e2f526ec00067eda0057e3e6194bf0f"],["/post/4551c130.html","84c305eb13fa5c456a6ba60de06fb21b"],["/post/455a4c92.html","2ea73cd74df664f1c842c765c5569a92"],["/post/46466.html","ad657a393d985d22cebf7f1990562aa4"],["/post/46925.html","de61dae91fa8925c8805bd3ac827acf5"],["/post/47075.html","5b563f73454aa31e306f4fd5becbb69e"],["/post/48220.html","7d1921cb8fe400a89468ed7618371fb4"],["/post/4b1879e3.html","519312ee54ff54505171b61385dd814f"],["/post/4c720881.html","d0d5d2ef7947589b33541f5e721da7ba"],["/post/50daec4.html","72f6caff71bc8887c5d5f423da2d3520"],["/post/51491.html","9409157d3c733991cae108db53fc53a2"],["/post/51e63dcf.html","4a8544b333a98e329270f9c2989647e3"],["/post/52078.html","e203526ae8bec96f374ff1c7fc2a7594"],["/post/53677394.html","9c44d85b4a28d8541717611ecc1eadf1"],["/post/54300.html","f02437068d5d63550ef3bef9640bdca0"],["/post/54612.html","4477c219e1d48f8e9c0daa94d3fcfd93"],["/post/54613.html","c70914e1cea7e9a7d90a4b71deaabd8d"],["/post/54708.html","9b8ec553cb7169e8b523f3d95c674350"],["/post/54778.html","fd960fbe4cae46572d0ed70867c1ff44"],["/post/5490.html","5410f8da2ed72f21cc186b28ec15db04"],["/post/55046.html","4c384cbb984da4a32522029da79ebc58"],["/post/56929.html","56a227c933d6b118f260b286eb8f3be8"],["/post/57339.html","11640a02dd4bb6300efcabe42c2576b7"],["/post/57449.html","eeb14dc3406a3eab48bc18bfa24f018e"],["/post/57453.html","4991e66dfb266de3a91b1d86bc74bb92"],["/post/57671.html","f9543c006423cf03f179c3bdaf19c4c4"],["/post/58313.html","23be3b74686485b00869c7ccac23ff25"],["/post/58481.html","957538d502cb6e3653a89fb3dfcb222d"],["/post/58986.html","3f3c56007841a9f79461c1a2d898ca03"],["/post/59431.html","5c1d9b98b9815fb0985bd0f033facbbe"],["/post/5951da65.html","397b7c0754673ea1c3b2757c58ada5e6"],["/post/5be7e977.html","30305e9756af66f93adafb0779a73c42"],["/post/5f9e4eff.html","c568c604c6826ea81304bea386b23886"],["/post/604b49d0.html","387051af841693aecfa02267b537f5c3"],["/post/61312.html","aabd6e8cc20166b9cefa37289ae66439"],["/post/61738.html","3cb52268c444abe7a2e2e1803cc6a60c"],["/post/61809.html","ef749656180b203a3a3eeb775fe7b3d6"],["/post/61eaf19a.html","ed5159366218179dcefec3f35aa8c262"],["/post/63002.html","5f30ea64ef3780e03b579a5838b78189"],["/post/63711.html","c71f74bb4fdc8aa9b5f9535a86073218"],["/post/6587.html","f92389090e94572113b133a62cd62b2d"],["/post/6589.html","f9161b8d9b940bfaff556c611e08121b"],["/post/6880.html","536b03f8c29f3a1fd45c71920f01bad8"],["/post/70263071.html","9928372470d6916c8793e616f8ad21b3"],["/post/71038564.html","518049da629e5034cd316a51c213de7a"],["/post/7119.html","0660393af4ee702f2bcb54e05e025298"],["/post/74e7fdff.html","1f9659f4fbf74247468f8f1379fced69"],["/post/7502.html","c2d4520f48de8c4b30b108161216f690"],["/post/7564.html","1d025e893034049e745e23177ffba2a2"],["/post/766f9b60.html","236c4ff9bacb095ac3a9404b4c1d8092"],["/post/7ca31f7.html","2b4f90361032c3c19a6f7f92d82301ae"],["/post/7d1c86da.html","f651ed43398da92c177be2d807824131"],["/post/7f3bcd7f.html","003ef8ecc19cb91a2f99bf13f3be1288"],["/post/8039.html","3782a45573711b4c23fd64bbed86a767"],["/post/8050.html","2d3ccb03c6dd0b6f5f651f606490396a"],["/post/8072.html","2dcb01d6bee2c0e9b0338bf35bf3ade8"],["/post/8274.html","193959424caa5e69f328892d8dfe045e"],["/post/8372.html","861eac1981b837d2db09569346ccf794"],["/post/8498.html","71422bbdc07d930adba7608dc72225d3"],["/post/85b4e13b.html","26451907be1f643c31714e8818913980"],["/post/912b2566.html","16c951832ff70ebda9bc93a129f4454d"],["/post/9187.html","4fb3da649436e4e3c8be599a22611161"],["/post/9197.html","bad7c0f41490139e51f54b978c004059"],["/post/94ceb2fd.html","d7c52e5c040c35c7a3b5c6147b9ea68d"],["/post/95495db.html","9626146dd124a97e091cbe073b3b606a"],["/post/97246020.html","a49b8d32e6bd803d5344b65a378a9735"],["/post/a3a786d6.html","cc6468a2b2bc8614ac89977a502f4ba8"],["/post/a444b428.html","91f78e6707dc57bfc87ffdbd4c7b08ca"],["/post/a50b8908.html","9eb0cb842f11041cfffa36197dba7de8"],["/post/aa1eade8.html","b25f85f0cfcf151aefcdce39220dba77"],["/post/ade8c6d6.html","f9b51568a08a5bd79ed63b8f57dfb253"],["/post/ae8362df.html","d322206739b766fce02fb7613ef76473"],["/post/b4c1d206.html","f3ebe96955a07852a0b74a70b523e8bf"],["/post/d431fab4.html","905c7283582d28ea123befaab70e4c31"],["/post/d5381517.html","92fabf46595714051ccf873949c6c3f9"],["/post/e058ffd8.html","2988069e51bf127f63575a349c72b8a6"],["/post/e0f8cb74.html","b22b59c28150f3d1a3ec849b6cd0df9d"],["/post/eefe591f.html","61175c050d60e853e292e98763bfa96e"],["/post/ef296a07.html","84e63a97add49a279132ca1cd3cf6fbd"],["/post/f201f9fd.html","9b51195410267beedf9de8230d504444"],["/post/f79e4123.html","1811a644224fcc9511a0e5738af4ac29"],["/post/f8648a1d.html","e0bcd6477a459e4e5e3afcaefd1e44f3"],["/post/f89cb603.html","f83275d363fa6085b358698a6b8d4ce3"],["/post/fa288682.html","29cd84f44308df0e4f77251ebea3f24a"],["/post/fb98053e.html","b9419f982fda7840d804d9e52eb0e7a8"],["/sw-register.js","af4ccc343d4ea5e6733f307d7ec15834"],["/tags/AT-T/index.html","0889bb8fc1bec0483d42df48c07f471c"],["/tags/index.html","9d47c9397a38feb3f6b7b6263e6b38a3"],["/tags/动态规划/index.html","d6cc38a6e6200e5d53e29a5849f28cf2"],["/tags/字符串/index.html","5da6ac55a2aebc7866800324eded3052"],["/tags/字符常量/index.html","3b1433a608cb8966da0b77eb2cb73d7d"],["/tags/快排/index.html","5c9e848dc2b1fc819ca69f4af970f1b7"],["/tags/排序/index.html","708d794c8bc93421681ed5a3b622a6e8"]];
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
