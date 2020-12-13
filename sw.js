/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","09281777f97df7b9a432be475322750b"],["/archives/2019/index.html","0673d250be2a155c49d942cc64cc71e6"],["/archives/2020/01/index.html","947157001f4327f36856995c76c26542"],["/archives/2020/01/page/2/index.html","7a33fd8732fbe01f83a06efe6bac8fe3"],["/archives/2020/01/page/3/index.html","8422ffae1fcf1aa4ce0a9b39c54c7e5e"],["/archives/2020/01/page/4/index.html","88d2aafd8d866aec39d342ffb60148fe"],["/archives/2020/01/page/5/index.html","737b12146a5a440fd27548cdff6c3347"],["/archives/2020/01/page/6/index.html","078100d7a5428b7607aff3952cd360c1"],["/archives/2020/02/index.html","df99baccdbe292b1c92afb794565d237"],["/archives/2020/02/page/2/index.html","a0a67674ee3a909f1d4b5b03aa3fc537"],["/archives/2020/02/page/3/index.html","5e2eb4669796d696d57bd64d18510037"],["/archives/2020/03/index.html","ff690599f2a123782eb211a4d3655df4"],["/archives/2020/03/page/2/index.html","c5338ff71854ae1f7bb7fb5f4fc87970"],["/archives/2020/04/index.html","6d5c8423c844f44412a0097e62685b91"],["/archives/2020/04/page/2/index.html","2d9a127db37dbc7a94182121238f1346"],["/archives/2020/05/index.html","e3df9dcbb2e3af12cac492689201c82a"],["/archives/2020/05/page/2/index.html","057f25ef0c18f9fe72667ddf120ee906"],["/archives/2020/06/index.html","9a8308e04c5e98e48ce0057c6f9b3f0c"],["/archives/2020/07/index.html","f30a097f29fee620094ae32d3cb33fc9"],["/archives/2020/07/page/2/index.html","1da3901f014c45efbbe473b0976c2925"],["/archives/2020/08/index.html","f747f9973a93f206d481e2bf8eb98727"],["/archives/2020/10/index.html","62f081a7aee81a145a44b6927c4bc01f"],["/archives/2020/11/index.html","86f7766f6f9b4c0529e3aaf490e0df60"],["/archives/2020/12/index.html","c7bc80028c95aa0afecb164979c64e5b"],["/archives/2020/index.html","b67f922c1a376c536266c3eaacff010c"],["/archives/2020/page/10/index.html","a67df77e4b52e3da86cbc2ec891737ca"],["/archives/2020/page/11/index.html","a56bdea8da23fbdf8e1d6c9eeeabdea2"],["/archives/2020/page/12/index.html","f2c5a928560372e0b6826d8ad826220e"],["/archives/2020/page/13/index.html","3989e8ca58686faf810ff21cb337eb12"],["/archives/2020/page/14/index.html","1e890c9202f21baca93f3fe77c274da1"],["/archives/2020/page/15/index.html","9cd4ec5b1a844885a60529732747c3d6"],["/archives/2020/page/16/index.html","20a271d78e250fd2bae743ec3fd59a38"],["/archives/2020/page/2/index.html","d945ac16928bae6262c4fe59fffe2193"],["/archives/2020/page/3/index.html","a844142c3d8655139d524171f73341ca"],["/archives/2020/page/4/index.html","70d79e8c75757c366662a1185df20b5d"],["/archives/2020/page/5/index.html","18b2d75ac9b0fae0b499d599500cc914"],["/archives/2020/page/6/index.html","a48e8538c3dcd929216173ecfe2cc2a4"],["/archives/2020/page/7/index.html","2db5a26da9c8930ecf90a287e32b9237"],["/archives/2020/page/8/index.html","402399a79586bfab75ade7fb103e187c"],["/archives/2020/page/9/index.html","c44fd347113e9e7470c2dce08d0691de"],["/archives/index.html","cd74dc4e0db795c2ab51eb5b0ee08355"],["/archives/page/10/index.html","d4dcd8e0485dc8f0c0ffc962229afbdc"],["/archives/page/11/index.html","d8f5d2563ade78e563fdc0483bd3cd30"],["/archives/page/12/index.html","ab747445622ad0ae2e0ec556ec1d83df"],["/archives/page/13/index.html","20e9513ae79f4135b0b4950fd609dac2"],["/archives/page/14/index.html","68494c402e82b334acb91ec227e36be0"],["/archives/page/15/index.html","303867d48e0b91196299eb947ff37f39"],["/archives/page/16/index.html","2a1d066949394e902ad07d49b304af2f"],["/archives/page/2/index.html","bdf6a088ce86c6d24ba85ec599af9839"],["/archives/page/3/index.html","04e42f6066613727057c2917748d51a8"],["/archives/page/4/index.html","b3373ca509c2f0c2ed38330a4f3ed98a"],["/archives/page/5/index.html","2981747e5f8b5ee8b60a264e9d0c0b37"],["/archives/page/6/index.html","79758366284e1c04431b8da364755a40"],["/archives/page/7/index.html","677c945a916334d6de64312bbcbdd72c"],["/archives/page/8/index.html","5ea2e01736a00944495e9161b0e6b080"],["/archives/page/9/index.html","65ce0ecd28a6880ccbcef212fd6a9ad4"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","9958f559e3aad30300812be72d3be090"],["/categories/Linux/page/2/index.html","5c219189fb0ef108458bfb0a5b8637e9"],["/categories/Python/index.html","cd57833d131248150532fa7663fbd7cb"],["/categories/c/index.html","d35c4bcbd4380dc084386feb20f1ee37"],["/categories/index.html","3b860864718daf260b0457c2a6394ece"],["/categories/java/index.html","b46eb1f300dba10d82722efa93cae9a6"],["/categories/java/page/2/index.html","ea3bb09906600f5b4235b798e06b5719"],["/categories/java/page/3/index.html","fc82634bf6e9ea5684e458fd4eb72782"],["/categories/next/index.html","b1ec1036c747580156cceb053c3657c4"],["/categories/stl/index.html","c2b08017a6887fa8339d91f9c323770a"],["/categories/windows/index.html","7571b515785569c1807337c4bc727011"],["/categories/基础/c/index.html","1f94515d988068262d20e2894cf1ef84"],["/categories/基础/index.html","d08a65ead17dc26eba631f0e7bd373d3"],["/categories/基础/page/2/index.html","ef3483b9b1176e8c94857677f55895b7"],["/categories/数学/index.html","226f48bafdc163df0729fc02bbaec4a2"],["/categories/数学/概率论/index.html","1c8f081319042217ae94fb24391c6867"],["/categories/数据结构/index.html","b5741967fce7c0bd8fc5c2349eaccee2"],["/categories/数据结构/算法/index.html","a6c27f8d302b32f71391895ab3b9234b"],["/categories/机器学习/index.html","7dab05ed79ff20081c9a22b21d08c1f1"],["/categories/汇编/AT-T/index.html","97ff44e1e6ad0690b4e3f36828ecfa7d"],["/categories/汇编/index.html","62a50d736f3cc9bd76c0dda7e770fae0"],["/categories/汇编/page/2/index.html","ff1f58c44b0a9503916d00148f43591f"],["/categories/汇编/page/3/index.html","7c164b93bb3cf1c645a5cfcf89ebafcb"],["/categories/算法/index.html","fb1f3f42615bc0caf7c9d3d39c96d56c"],["/categories/算法/page/2/index.html","8e94f376f943adfe4e9364a59f77fcc7"],["/categories/算法/page/3/index.html","20c92ce7d25228168ec66df3146917ca"],["/categories/计算机系统基础/index.html","1502aeef6e7c508152274388a93001b6"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","81540c084fb756b1a9f1bb2b6a0e134b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","7d2e8ba1b3c8ee998c159a75d2f3bc43"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","6e91792684bf9c12d2e46f1d7bf7c395"],["/page/11/index.html","54e15efe573159c4eced1be3583968f8"],["/page/12/index.html","cb24560f61e97fb95611bbded7b461e0"],["/page/13/index.html","7d12f8b36f2dba8a08c9082a64f59116"],["/page/14/index.html","11666e87f567957f955b1850e3f65988"],["/page/15/index.html","fdb2c432a89976032578f6713f9a5250"],["/page/16/index.html","6e899eec31ef20d4f92fccdceb27a928"],["/page/2/index.html","284ca8d07ca9f08fdcc5abdc4508e505"],["/page/3/index.html","13d2f62a4e07ca26a156d2b5afeb862a"],["/page/4/index.html","9c9a2832ce0ababe67b20fc8f8ebf981"],["/page/5/index.html","6a17725065af63bedb03b09152da6214"],["/page/6/index.html","8a9e1976cfcb34862defc1ba5a5051a1"],["/page/7/index.html","b3a8c7f0ad854c4d6743e72ab8a006bf"],["/page/8/index.html","490909be1860f63290473134abc2d6a3"],["/page/9/index.html","a52e56e4b67b312cb23d84ce5dbca4ce"],["/post/10919.html","984eee9f67855e5535f6e9a2d15927f6"],["/post/11051.html","860678eff7f9365052a2110c245ea60c"],["/post/11306.html","a71919f4498564cb2e46e829a8185d5b"],["/post/11491.html","8a7c0efbacdb9237358677819c0c290b"],["/post/11799.html","5b5566365737ddb8413ed49f2b578dcb"],["/post/12334.html","dedc04f2ad3d89a6dac6a4c7272cd8d6"],["/post/1326.html","40812d1e2c4675a778cf8bc1b0c97880"],["/post/14379.html","c159c4e712d2e71b4e498d6ce9a7ea4f"],["/post/14511.html","fb4a9da2b7b09c74749b8caaa401f156"],["/post/15201.html","dae6472d19274eda81feebef77df6d3f"],["/post/15425.html","0f38da33545f37e776d036445d4126bf"],["/post/16107.html","0b5e4c6d74f822228ef217c22276f6a8"],["/post/17862176.html","6517d884e9022c4e9463e51e8be1b068"],["/post/18431.html","6903927049829a5cb70ce1419015efab"],["/post/18912.html","c121f895965e2f1b0a9038743a98d0c8"],["/post/1b9c8662.html","0dc6b5a2ad01cc4d4e37e62c11bdefc2"],["/post/20198.html","4eb4946485c2acab2654629851ec2b45"],["/post/20ff5ccb.html","6cd1f728e104561d3a2bc46141dc9105"],["/post/21624.html","04a51b6c987e94c5160da5d8b2e93517"],["/post/2170659a.html","638db9b5619c16fc1395a1ac0ebe0768"],["/post/22102.html","8a3d9adfc3e804abf990d97109de5947"],["/post/22493.html","033f0330da3411c4425e0b10d398b9ad"],["/post/235252ea.html","b226b4b002d082815939d675e8bc5f8e"],["/post/25699.html","a7286b9298165f785db810bed40c4751"],["/post/2647.html","e061ccbf347e266098a29d07eb708500"],["/post/26477.html","a4810039deb83d32aa8eed406cf85a7b"],["/post/26671.html","8c464df005c634642126bc90b5083c2e"],["/post/26737.html","f26d564921f511363f6fdbf029a4be50"],["/post/27045.html","b69b52d1cb5677cbe1d9bcf696df1961"],["/post/27621.html","4c1dddb45eb19e50dd9ec1e92d05280d"],["/post/27890.html","e7ae140f05be281e793f7e89a1946cb5"],["/post/27980.html","660ceda2a3b0554ef11446f5002bbbe3"],["/post/280b588e.html","03205ba694481fca22007044f2eb593e"],["/post/28579.html","42d80fa46d60b9d36170b50d2f87ba28"],["/post/28877bf.html","4f59bc7052f178a20488fb788adbb334"],["/post/28954.html","4281237f711badf6f55287a761eeb25b"],["/post/29378.html","198f1a36e95838c1ca4bfd09cf2df73e"],["/post/29949.html","e3edc4d4db443e8e92905ab3376136f7"],["/post/2ae43b86.html","47e2f4f3127621ef944ff6f1166928db"],["/post/2ba82a45.html","83251ff9a4d91d1e2653ef35e0ce1676"],["/post/30072.html","babd2bd23654f803654cec46208f01c6"],["/post/30479.html","e00c014c8b95441c505c23d1a7e116e3"],["/post/31a6b40.html","3e9e5e63adbc019c1925dba337b90f9c"],["/post/325cdbf2.html","73462b36c302b738bbfaa2011ef64fb5"],["/post/3319ed9a.html","e5f1bf532342ca9a8cd7973965a0a649"],["/post/3320.html","8de1bd964e9507c9447ff521ac378326"],["/post/33cb1151.html","012548b2d084d9ce14899994b79906ec"],["/post/34811d5f.html","8ca11af945d2b14018b1a92f4a82df7c"],["/post/348d4e04.html","d8dc708447ebfa41da85f50a05f0c87c"],["/post/3526.html","8b84e62b5167d4aafed2fe21b559f612"],["/post/35532.html","68cfbc8a01fe2a2e676ef3cfdfbc806f"],["/post/35848.html","175d61f1cade0dc267603553f66b6f0c"],["/post/37318.html","832d215764af5af66b61f5615a48d1da"],["/post/37663.html","b720e17775e908ab9d38417c9ad47dce"],["/post/38035.html","7c83e217352cacddf8eda5e4ee782251"],["/post/38072.html","e302c143071e10965b5e7418f09da218"],["/post/38145.html","5cd3d59a5ea58466755d1bdc78cb4d04"],["/post/39968.html","68626915edd0000d726ec007d16bc0e1"],["/post/3de4bc69.html","fa0cdec13b6021b05aacb3bf09750bd2"],["/post/40583.html","4fc3cb9afaa97ee9c441e5cf7edea557"],["/post/40997091.html","a3229146c3fa005179b7fca7d4451cbb"],["/post/41129.html","d30b73fe49e9c79859697c1ad2ee589c"],["/post/41763.html","819ee012aef8fed40f29f42a003809f5"],["/post/41829.html","7d0fc0acbcbb81dc29e234874437edab"],["/post/41840.html","63f657a30fd2d6234d6c8eb1675acc69"],["/post/43817.html","001338a1640220a753b284510cfdc469"],["/post/43878.html","d08e09737967cac5bc4ff529efb3839e"],["/post/44250.html","822a5239f2f8bafdcad74c7773a0b910"],["/post/44336.html","2705d19b0e4313329d133b1ef48607f0"],["/post/44454.html","dd6a62a7e35bea93e73b635ca60e2733"],["/post/44487.html","e7c9675e5182fe4fdf954fb0259839a6"],["/post/44914.html","276f4daff3fdf4f35740fd91e84ecb7f"],["/post/4551c130.html","c0a5e227b150c1e1339128bc1f4282ce"],["/post/455a4c92.html","d52f0ed8e0b2f6211dbdfec82c6c1630"],["/post/46466.html","2a49f50f7c6d8e9a37d400bcda80aa37"],["/post/46925.html","7f8a0c376d05385d6b6fe91ae4282beb"],["/post/47075.html","a90dee8fa72d3e1677eaa715774dc0b9"],["/post/48220.html","8c56a30a669219be75a9951fa3178541"],["/post/4b1879e3.html","739f6b4f01ef7556de7434a3f3605731"],["/post/4c720881.html","8fbaa9852b8bcc92f414cb973dd233d0"],["/post/50daec4.html","5d0acb0229515d14696565dbbaadf3bc"],["/post/51491.html","7129c1c46f46b32828558e71f70f6b5d"],["/post/51e63dcf.html","ad00994ecf092071ea32895cb9afd6f1"],["/post/52078.html","d9090bad1b5552c2b9af117d13990617"],["/post/53677394.html","27832d3b0818568b51aa930bea21be1d"],["/post/54300.html","17ba2a39dac3ffb41c82155de33d3e15"],["/post/54612.html","4b8836d59998d606c9ca10f88e3a84dd"],["/post/54613.html","3ef73ed8612b6addd698d637502374dd"],["/post/54708.html","6165df8e6f1aaeca623f054aee8611db"],["/post/54778.html","446d82518e37c5ac20a6e19d6427f604"],["/post/5490.html","0a58115816ceee91355b2356f670f10f"],["/post/55046.html","b624a66d99ac28c4fd3135f06641a003"],["/post/56929.html","cac08043c37cb6286fba15cd9900157b"],["/post/57339.html","a9e9f36cdcebd94024b5223150a94dad"],["/post/57449.html","2159ddc39d19b0b981ecd0e46ed6f148"],["/post/57453.html","3f112177fb49fc47e237e764dea1c141"],["/post/57671.html","3d3c959d8e6fcae02043caeab828920d"],["/post/58313.html","b43c090c2f45fe1c8637bf0a9d473b98"],["/post/58481.html","4103b97ad36c4ce0c42b4a919573f062"],["/post/58986.html","a9cf8d16bd973b45595fa630be9a5a3a"],["/post/59431.html","c33ef3ad5f6a972fa09e0f5cf828a0ea"],["/post/5951da65.html","6a6331c0f50758829573dd6563ddcd36"],["/post/5be7e977.html","ef4de59b2a55e3b6d10ee82c9c84d01f"],["/post/5f9e4eff.html","61f172d5824b09444d69c5eba95dd8c1"],["/post/604b49d0.html","0999b7670d15b92c8b871d9b2bc2e7c4"],["/post/61312.html","549d286861080e5de3f431bdf1c6c0ac"],["/post/61738.html","4665b208f90aeb0d669285f1d530da5b"],["/post/61809.html","5c84773dbc0d9258e940c43a84ae2cad"],["/post/61eaf19a.html","cf2a64157a33b083621fe8787dbe7fc6"],["/post/63002.html","e80de1fa6b8b60c07c33e941a17c89e8"],["/post/63711.html","8185928a7d4c4218c4a868560f5a2745"],["/post/6587.html","7085b5a19471b09e4c859c39f61c5c11"],["/post/6589.html","1b022cf5f3bfff34d5dfc23d880b73d9"],["/post/6880.html","571a789142427eb1fa0a25016ab267a8"],["/post/70263071.html","1681657e90f9a7f32a1b5dbc25959e62"],["/post/71038564.html","d0d2a8780f732c66d20c85617ebb0552"],["/post/7119.html","1d5cce0077bfba28881fb90bb31a4549"],["/post/74e7fdff.html","0dcfc50415aa59f5a30dba170740f18d"],["/post/7502.html","c88d3560939fa2c51fee9f030dae7b6b"],["/post/7564.html","45d1b5b8a276f7584373c33fce70401d"],["/post/766f9b60.html","52e7d79eab83871e5c976da2c455d463"],["/post/7ca31f7.html","ac64d4dab788147e89787ec23ad263b9"],["/post/7d1c86da.html","5e1cd5e2de154c121f0a1bff1115db4b"],["/post/7f3bcd7f.html","a40cd98f50e764d9bd719b4db1098acf"],["/post/8039.html","a0f075c462eaaa5e35cfd252804bd819"],["/post/8050.html","5af54c2b960db328507865e1decda31d"],["/post/8072.html","ac02b22bd9b54b02a5ad189eb364cd31"],["/post/8274.html","b47d84f703a20863235cdfd00063394b"],["/post/8372.html","4ff8951a3b17d5f7c8d56cdccf1b321c"],["/post/8498.html","a8347281d5249163cfbafa866465672c"],["/post/85b4e13b.html","30493c6cc0d3e3b3d80b98bd8616b8df"],["/post/912b2566.html","dc1d1843975f52d0ba1107f755110201"],["/post/9187.html","39997bb08a3c7e4236e1b096bb1cb65f"],["/post/9197.html","24034040c8fa4eb07228b217d07797ef"],["/post/94ceb2fd.html","c43acb1b2e1a977fac1396b173efb87b"],["/post/95495db.html","6b65b0c0a0fff658763e909d20b81ef3"],["/post/97246020.html","6bbe20ca51705c2317377a941eceb9c2"],["/post/a3a786d6.html","ecd8435a7f0d4f5f4ab6cc75589b1cb3"],["/post/a444b428.html","e72b192fa9bc7964a3d0f606ec335bc7"],["/post/a50b8908.html","6333a6c84be3cae2ce32ecfcba7dc1b1"],["/post/aa1eade8.html","ccf77a06c0fd202ffdbc19e8ca807a14"],["/post/ade8c6d6.html","aef331e970880c15b6d575879959990f"],["/post/ae8362df.html","d94ef3971d15bbd98b84a34947b837b6"],["/post/b4c1d206.html","34a96c17a211e19f0736d6d1bdb4f209"],["/post/d431fab4.html","808f393b8d188be631c1ac16563aadc0"],["/post/d5381517.html","c45f66c71a0c799ead3a7f5daa9f0798"],["/post/e058ffd8.html","77f367ae05de3f841b7500876eb6a59b"],["/post/e0f8cb74.html","b179188a13506fd4c922f3ec3c66127d"],["/post/eefe591f.html","058e854b59413d432401acad5be337fd"],["/post/ef296a07.html","e8f5b870d611209d395547cd1c142626"],["/post/f201f9fd.html","b18039894c32186b8d2dae2b1dbdfec9"],["/post/f79e4123.html","9281912cf749bb4ae1be586187b262e7"],["/post/f8648a1d.html","9cef4086af8c61e229bfc856fb31f2a3"],["/post/f89cb603.html","3e3099d3930868c3cd3b5e2a44cda74e"],["/post/fa288682.html","36e18bf88e2d2adb8a12da1db3ea613f"],["/sw-register.js","896328ae06c3fbd0a2880e5a314497b9"],["/tags/AT-T/index.html","4c614f6626d0e7d6aaae92effa64f283"],["/tags/index.html","6a68a1634e10dbb97e236da62e8c9523"],["/tags/动态规划/index.html","e999a10176743f5b3d1d07f6258a05d2"],["/tags/字符串/index.html","e51bfea80ccfe527a075bda98a9255c6"],["/tags/字符常量/index.html","43bcfa3752caf18f122b833ae2a36999"],["/tags/快排/index.html","e702c8aba723e5f16c7696ae22142f7c"],["/tags/排序/index.html","69120e10a2b5374dc52cf758f0f4d637"]];
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
