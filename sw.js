/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","3629287b2cdd363c7764878586ba6344"],["/archives/2019/index.html","ebc9d17584383fc638101a4e07d85cb0"],["/archives/2020/01/index.html","414b19cf0a8ca2ca4fd4bd596d6ff20a"],["/archives/2020/01/page/2/index.html","71554d059bd19476964307d04143783f"],["/archives/2020/01/page/3/index.html","3d2f286b83761c17e3bcccc100462365"],["/archives/2020/01/page/4/index.html","09a453b1057b9ee8324b2e26b587adbd"],["/archives/2020/01/page/5/index.html","9b93be8b29fbf9e56fa8bbda2e8deaf1"],["/archives/2020/01/page/6/index.html","8047d58b946e903470180c91912dc6d1"],["/archives/2020/02/index.html","db805881fc9810fbc6d26b6fd28c47d1"],["/archives/2020/02/page/2/index.html","fd8852121b443862819f998f8098df9f"],["/archives/2020/02/page/3/index.html","3f23e8b04e387fd2a986f086f2c90a93"],["/archives/2020/03/index.html","8b4a6c4028d66621fa27092a7639b66b"],["/archives/2020/03/page/2/index.html","9fbfbb9c427314502d95c88016a67ccc"],["/archives/2020/04/index.html","38a088085e4cbd6ccdaeabd6f8213a2d"],["/archives/2020/04/page/2/index.html","56fb2840f8773b2ba63e6517817285d0"],["/archives/2020/05/index.html","eda48265b56fdfdb48454faa466e8b5f"],["/archives/2020/05/page/2/index.html","a1133a3569c61249f4ee09336b4d3e35"],["/archives/2020/06/index.html","5e72c8710cd12668a8a43d45ce7ff5ae"],["/archives/2020/07/index.html","22637bae5d54de4ee34e22ee8b02815a"],["/archives/2020/07/page/2/index.html","9313bea2adc1017b673b365a4a0bf56b"],["/archives/2020/08/index.html","d9b3bd7a2acdd65599aa1f267c6071b0"],["/archives/2020/10/index.html","d0544c866aeec226aa7ae723d1e5459d"],["/archives/2020/11/index.html","2f7e9697659e0c5968eee2b75b929589"],["/archives/2020/12/index.html","8ac40e94be5c7d9d226b6bd64b7992bd"],["/archives/2020/index.html","7c1b5a6764549b9b9e3ef2434922100b"],["/archives/2020/page/10/index.html","f6046b27a952c05d87763a86b7d8bc05"],["/archives/2020/page/11/index.html","818e0ef93f76c032211da191b8e13655"],["/archives/2020/page/12/index.html","6b7bfe064c25ef4048a402da8c134755"],["/archives/2020/page/13/index.html","512ed69853fe15048e2782a40afdc06d"],["/archives/2020/page/14/index.html","4b600c7f5f4649f73ed8d6eab698bf1c"],["/archives/2020/page/15/index.html","587a3579cc6e0cf30319685671fc5bde"],["/archives/2020/page/16/index.html","851e5411fc80ffe1e6a5284f04e50b73"],["/archives/2020/page/2/index.html","ebc0d44e33e3fb97e92e1d84ef355fdc"],["/archives/2020/page/3/index.html","0a49555a233ddfa28a3850fecec567d3"],["/archives/2020/page/4/index.html","06639d1b92540e0a1eed69ee745ac91a"],["/archives/2020/page/5/index.html","5dda586d2feccfe8edab40884ffd83b9"],["/archives/2020/page/6/index.html","7b93bf1e1dae6069963f9b8f3273e820"],["/archives/2020/page/7/index.html","892c0f18878d68d37de93048d2bd50cf"],["/archives/2020/page/8/index.html","34f61ad79e27bb74bdf00a26108ccc19"],["/archives/2020/page/9/index.html","d6c8523ed56b1b2bbbcfe6f2ac06104e"],["/archives/2021/01/index.html","0e1ef17bcdd0d20fdf8e332c675bc985"],["/archives/2021/02/index.html","470062aabaff41cd599ee3e4f907c5e0"],["/archives/2021/03/index.html","5dd83a41b70fb059cb75b613e6512e75"],["/archives/2021/index.html","fd2d6cf8976977b675b5853e11261652"],["/archives/2021/page/2/index.html","c62af0c2e77a9d4134443851697817a8"],["/archives/index.html","43b44b8eb02a08c69d1d84e516e08afa"],["/archives/page/10/index.html","e6126c7c5d4229e38fa19846f7d8bfe8"],["/archives/page/11/index.html","b0909167fe9ace525d63f6730e6dd77c"],["/archives/page/12/index.html","bffaba03a3d8177af073a16361e3d212"],["/archives/page/13/index.html","d0b035ab552837a2539649ddcf48c1dc"],["/archives/page/14/index.html","503411dce00dea1aaabf715ee23920ca"],["/archives/page/15/index.html","a387fe67e206503bd070b656f06ac225"],["/archives/page/16/index.html","501c75018969fb76949b688c8451b91e"],["/archives/page/17/index.html","2dafa555f3642414fd166685ebf8a533"],["/archives/page/18/index.html","d8e08e427f0df7309253ebfc83d72f1b"],["/archives/page/2/index.html","f06b49f55a7697eb553c4e38af811f7d"],["/archives/page/3/index.html","50e2a84f189d8f1b579c04dfd2a2eb3c"],["/archives/page/4/index.html","f328ebf136d4e55a30fa396ed6d78eb8"],["/archives/page/5/index.html","9f2c3d5f093ac44082fd7c15f35699ff"],["/archives/page/6/index.html","423914d0e1ccae8229010bbc6d3291d4"],["/archives/page/7/index.html","5cfa25ecfab0aea22968fdfdeb5cbbcd"],["/archives/page/8/index.html","b2f9403c9611d3fbeb86d177e57d23e9"],["/archives/page/9/index.html","4b40e98f4728c1dea436d931d5b21050"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","6a062e022a129731644aae932b23f038"],["/categories/Linux/page/2/index.html","ed82bf1133a4fc52372d37bf7b0abbf1"],["/categories/Python/index.html","94080f9bd5aa0581c34bc3853362b91e"],["/categories/c/index.html","96cf9ca72c3e43537c40e8d13db1ebf4"],["/categories/index.html","ea2b6a61cf2a280abc42b517edb4d187"],["/categories/java/index.html","ba7444474a671c56b8cb50c99c666ae0"],["/categories/java/page/2/index.html","9320749aba6d9b830fc84803f0659451"],["/categories/java/page/3/index.html","93deda4b82e074a1107ff513a56578ec"],["/categories/js/index.html","8aff77323daa9047ecc439e355daaaa8"],["/categories/next/index.html","caa7dafe171a103e4bb2762d4e5451ad"],["/categories/stl/index.html","17e51ac147c497b6380adeb9bbb95bac"],["/categories/windows/index.html","ed49d7f63b38b48738c47371ff63b5f6"],["/categories/基础/c/index.html","ea494b654f7e52d387ed0c508dfb1daf"],["/categories/基础/index.html","bd2ea37dddd0fb1f5b7ca0498f821db0"],["/categories/基础/page/2/index.html","3ed015943a69ed91cc7efb594022ea1b"],["/categories/并行/index.html","341877f954f8fe1eeb90e99138d3cd3d"],["/categories/数学/index.html","20cc58ef1f0205565eeae5b6c5bcfd83"],["/categories/数学/概率论/index.html","47fa87821f986a601ffce7ff551b29d0"],["/categories/数据库/MySQL/index.html","c4307270eaad83279a2516f6b06cbba5"],["/categories/数据库/index.html","ca6be7a598e093c7bb3ec644e027bec3"],["/categories/数据结构/index.html","1e7130fe8b19b2d5eb800718492ff157"],["/categories/数据结构/算法/index.html","b9c7bd6d8edb87219e83e96d46cb681f"],["/categories/机器学习/index.html","4aabee85b68961654a81bdf8f7c6cb7e"],["/categories/杂项/index.html","266bda10493e422bcdb285f1632849e6"],["/categories/汇编/AT-T/index.html","4db3301df49676caa116008bf9c98cd3"],["/categories/汇编/index.html","c7f85665a3d5e4e28d1f5d3d4b5c1164"],["/categories/汇编/page/2/index.html","5204249c2dd941e9bbfb5067dcfe2fd4"],["/categories/汇编/page/3/index.html","0309c4cc3b38202bcb753a376d0e1c49"],["/categories/算法/index.html","549cc3fdf213ae0bb78e189b85973ece"],["/categories/算法/page/2/index.html","942d44a901cd50349468e47e7ca7b066"],["/categories/算法/page/3/index.html","0539682fefdd98a3910009aea6703d2f"],["/categories/网络/index.html","89b65d438b73ab0ee5c4f6edf7a030f7"],["/categories/计算机系统基础/index.html","0b49623a3c47ae3d85de5fdffd26747a"],["/categories/计算机系统基础/page/2/index.html","50737cc7a01f7aa484b64c5d04046bb2"],["/categories/逆向/index.html","169af2d957d8b2a4f2f9efd7d5506c70"],["/categories/逻辑电路/index.html","65488e17dcf5b265de974afd3f5279d1"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","e2fbd3e84fc83f739e608f62005f4598"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","346f3b3126d7056798350cddc6575926"],["/page/11/index.html","a4ffeb790175ff3421f5458c2f827db0"],["/page/12/index.html","263536dce30458eafb314e3b6f9a2b86"],["/page/13/index.html","166a2ba98d94f8b2d91e49a6c18d1dc2"],["/page/14/index.html","d2cac519e443360d19bd1fb32eeea165"],["/page/15/index.html","4d2faf3ce43ccc5c511c9da216d6688b"],["/page/16/index.html","65967a42c084c566fe08fc344979ecd6"],["/page/17/index.html","d7feff891b5cf5ad86c3d50c3130c79e"],["/page/18/index.html","7b48bd6509ea9f22f338ed4078443961"],["/page/2/index.html","be17aaec6056fadab061da67b7bed16e"],["/page/3/index.html","f1d50f3329689121b011fd26af6f8423"],["/page/4/index.html","9008df4c7eb4161663715d0c42863eb1"],["/page/5/index.html","85a29bbd9ad21262dab06018236c615f"],["/page/6/index.html","b6d45d5e4571610b20dbd773f1baf680"],["/page/7/index.html","df71e99af5db54d8773ffa7a9a598467"],["/page/8/index.html","098853d57272dad851779d857716265a"],["/page/9/index.html","ee1e1446eed12f4238165a89b1dceea0"],["/post/10919.html","a6094432b683cda78985f4d034aab5e2"],["/post/11051.html","a5f6ee96198364a086dfebdfdc3be552"],["/post/11306.html","b9173d269cb42794bc47a47b9ec30e99"],["/post/11491.html","d15ee75bddd3f8a7515b3f664037571f"],["/post/11799.html","0815ccdad934e0258fca6c2c72c64f44"],["/post/12334.html","215ba3d948869f6dad47e064efee964b"],["/post/1326.html","e520e9f3264e944d1a004ee7e239039e"],["/post/14379.html","7f8af076bfd1d6d77adb8eb2b775c3ee"],["/post/14511.html","5df294646538e320aa530741f550f755"],["/post/15201.html","d1b561592fb4b26371be97cb67ab1660"],["/post/15425.html","962f34197e2134dbeeb9f4ab8dc7b3dc"],["/post/16107.html","d91305d66637ceaddaccfcbea659febc"],["/post/16e2846c.html","f95c94025f204fd58598e3db668af747"],["/post/17862176.html","b323e3063cc41bbefa213e5154bd3d59"],["/post/18431.html","35e02501229407e0eedcc31bc88f4e92"],["/post/18912.html","10f69b917483caaa16baff14a57b0179"],["/post/1b9c8662.html","0a46e7bb40d10e0764f01d07a901ae55"],["/post/20198.html","69980a3c440c63bb3a31b4a4d7c1549e"],["/post/20ff5ccb.html","c2e6855ffac648992e57550f5bfc826d"],["/post/21624.html","f49a5d7ec8c0d94f5d928c73b28789f0"],["/post/2170659a.html","2dda5ccaed1b93f7ec0d0337376265cb"],["/post/22102.html","e8bc3521c09bac7511a8a07a60afee8e"],["/post/22493.html","e19ee21ee6db4af20ef381a914003400"],["/post/235252ea.html","0620ebe8f06c2b22989371f1d526e1df"],["/post/25699.html","beb38ed4482d9fb7f03f8932d567bf91"],["/post/2647.html","11b9ee91652cb851538383df5c597c3a"],["/post/26477.html","85360145f2b1e9cdb506f143d8b86055"],["/post/26671.html","c46fbfc2059b3a46dff209e64380ce64"],["/post/26737.html","85a4ca5cf5df42a5587c6fafe5213a82"],["/post/27045.html","84da9740d1d8e5ecf2b9b620121b47d2"],["/post/27621.html","ae0a1549329a3b671610f4ababa52773"],["/post/27890.html","f1ba733420520126001aff74bb0f8bf2"],["/post/27980.html","156c0e2643eaad02ba811962ae5181dd"],["/post/280b588e.html","223e5255452f4d919732a04bb771ac64"],["/post/28579.html","053a5e54301173f0e6ce3ffcc77eabd1"],["/post/28877bf.html","7026bb6cc40794b9773f3777292547dd"],["/post/28954.html","c3bb3c8fb807c921e48fbc66b215300a"],["/post/29378.html","591c717f22511dcbcbb59328ddc641f3"],["/post/29949.html","7fd84df834f09adf68c0c273ac4e3572"],["/post/2ae43b86.html","7e1c18a7d6557be4fdc65e9fbd3215b7"],["/post/2ba82a45.html","ed826d445baaf1bb82bf8afea2240979"],["/post/2cad8b04.html","9a8dfce4b44144653f6fe0b11b56109f"],["/post/30072.html","e6111d0b0f126b54c95e58a6094bdb42"],["/post/30479.html","210260077d5c707dc1fda867ba376cd0"],["/post/31a6b40.html","8475fb3a96910bacfc5fbfaf4cf8a789"],["/post/325cdbf2.html","7594dc1b8dda588099dba5bd664b48e1"],["/post/3319ed9a.html","b1e2b511f8fe2bd9497ebd441822d325"],["/post/3320.html","c4226eb3c2c05adc4d82ecdbe1cf7ed8"],["/post/33cb1151.html","b7521448d10577955c2c904c3d2049b5"],["/post/34811d5f.html","2afdf4712f3559b009ffa5e4112c219f"],["/post/348d4e04.html","1a83e211fa914eb08cc499c4a1cecc52"],["/post/3526.html","032542d5e6ecfdbc2085a7f0250419bd"],["/post/35532.html","06cb3beb40075aa46c6982fa4fbddcf8"],["/post/35848.html","41d725631747d533191b102b80db4fdc"],["/post/37318.html","9c1820d119444548930c165b03e9366e"],["/post/37663.html","197ff3f9e122734626c13bbb0a002c89"],["/post/38035.html","2459c2db4682b83ffa5bb5cd7e980cfc"],["/post/38072.html","c2914427f813c9d0709ae794d94770f8"],["/post/38145.html","fd5328d136a1028052e7a0026e7f5e30"],["/post/39968.html","f5f7e0d2c3b9fcda08134f0a80132599"],["/post/3de4bc69.html","903d8763231f09516305a11ef8b2bb64"],["/post/40583.html","7192a037af6bc99bc451970ff05b9fb3"],["/post/40997091.html","20b379496b42e561e6a4f445336f6b04"],["/post/41129.html","daa1c60e7164b8aacc561d45053de0e0"],["/post/41763.html","440ef9b5890f6e66366ed9b732a6af28"],["/post/41829.html","1c23105191431b74e66177eae0eef201"],["/post/41840.html","f1701f28e7e36ef12c73d1fe807a65f3"],["/post/41e39f2b.html","6318ecab725b5b9c7033d90e4a8443c8"],["/post/43817.html","3eacf4f925b4a85d139d44a73809c2a8"],["/post/43878.html","6d61d619b978899c97abb2445adeafeb"],["/post/44250.html","87bbcc13bb75b8e21bd845a512d7ffb4"],["/post/44336.html","edefcbd5223555dbaff96a8fd17d3c3d"],["/post/44454.html","a946501918be7783fe17456f6f7743ab"],["/post/44487.html","55831c9595eae4944b6feabc0152edaf"],["/post/44914.html","89a6d5ba6394ee21199123ebba442eda"],["/post/4551c130.html","a4a3244c5873572ad1561e059da4f999"],["/post/455a4c92.html","659db8539e261ee59b2e8a1ee7fc46fb"],["/post/46390b34.html","0a00afcaf87b0135b2ba39ff95f9f275"],["/post/46466.html","4547c69631ebc0c55e5311625c33331a"],["/post/46925.html","48bc90d392c34877de60cc7f0f770896"],["/post/47075.html","b0227c6c808ffe222574e8cb5dcc9ae2"],["/post/48220.html","4a04ce28cc22b900fec1d9a3129bfb93"],["/post/4b1879e3.html","eaeef3f1af51debc2257b5f0fb85102b"],["/post/4c720881.html","16711a4fa31d61f5bf7044d61f16918c"],["/post/4f4fc0a1.html","f063e6ac4d28ee2be07c14c6b939baba"],["/post/50daec4.html","9af3be22bdcade6c3ecfecf81d0a504f"],["/post/51491.html","7fe6b8028a0d2124981ee9e446455d95"],["/post/51e63dcf.html","c68063dc8bbc6acd471850605f49298f"],["/post/52078.html","6bae1a6dcbe4946c3d69499a32149c00"],["/post/53677394.html","550726f606608d76d4916bb6be470eee"],["/post/54300.html","29f8070d1a85e8d7f99c9071d9e2e479"],["/post/54612.html","d049d9a6da3bf864708f6a8b20544fea"],["/post/54613.html","d7db58cf87f2169bc7cb737fd2a13d59"],["/post/54708.html","138028fd778a2ff7d2e9d034d1187dcd"],["/post/54778.html","3782170e5c5f6ff164041c195a4a1f67"],["/post/5490.html","93c1645d878bda81206ea7a2c1981772"],["/post/55046.html","6bd888308649e0d9531b2b8c849ff815"],["/post/56929.html","9daa94f87776aa6046bfa0f9ad0d9506"],["/post/57339.html","39ba871dcf81458a13824ce197c0b02e"],["/post/57449.html","ee721f01f236d7c4796037164ad320d6"],["/post/57453.html","3ce4c67b61552dbb929a88cebb5b2534"],["/post/57671.html","7e1af7b654aaf5fa3f9c555287cd3625"],["/post/58313.html","cd8b88bd71130423744a678fa4701dc6"],["/post/58481.html","c461a67f7c5adea8857726d43302a470"],["/post/58986.html","6aa3e5b0c8a17835661086371eada916"],["/post/59431.html","3c8c2f34932db183afe47dd69b849f48"],["/post/5951da65.html","10a8bc3fa55d35fc46c2e57464307261"],["/post/5be7e977.html","c796ec0c87e2c670b3039753fe3c270a"],["/post/5f9e4eff.html","084d2e0bf2ca7d1555d0ee6045b10698"],["/post/604b49d0.html","be085fa7496ed7f0a75096749f299508"],["/post/61312.html","9b01bab8de1a2d17109861bbebbc6acb"],["/post/61738.html","cbe201814b86ee7c77359431551815d0"],["/post/61809.html","c329e59faff2e8c952bb28f48578da81"],["/post/61eaf19a.html","64ba10154f8522abd291d0d72c7e1856"],["/post/63002.html","555363b37f97782c66b1f855b67bd8af"],["/post/63711.html","cd16e21195bc22dbf92da4d0f8e2b0e1"],["/post/6587.html","a5229d4196690788d9f83fa8bde99f0c"],["/post/6589.html","7f79e342bd026c7281b49765749865ce"],["/post/67454659.html","a857057e19790eb81e7831f25ae5829d"],["/post/6880.html","53b79f46c9c692b74d0e82ce0f7d7913"],["/post/6ee50502.html","0b5610e555d44d74c352a174bd408c60"],["/post/70263071.html","fa92fde8a2ca0b7fa48ce3248a3ef339"],["/post/70d4f4af.html","20e9927ff05e82ce4f55be13ef3b39a2"],["/post/71038564.html","011f2d57c3e8b43b9544f6f741d1cce3"],["/post/7119.html","d413acaf0100116c99642f68724baa43"],["/post/74e7fdff.html","4b4dd461fa304fbbc72f08de2d644da6"],["/post/7502.html","12ff4b46997c2bda9c95cf9e132586e7"],["/post/75223936.html","b30df36ebbf4d40511b154dca5051589"],["/post/7564.html","ba9b655c17cd56f6913616494236ee01"],["/post/766f9b60.html","050a0d4f2b8a118b692518b09834e4e3"],["/post/769365ef.html","4d17e90df1c9d731fb569a7a7ec90c4c"],["/post/7ca31f7.html","5e0b6376acd84754983261fdfd28c17a"],["/post/7d1c86da.html","6973f941144b216d3a4d94e776a6c66c"],["/post/7f3bcd7f.html","9aeb546d309f29bf16a26c41f53fc18f"],["/post/8039.html","af64202466e8ad58e126fe3287dd7643"],["/post/8050.html","607e6f1c14961a3996236d5ef32cd844"],["/post/8072.html","b1901e7e57a9c711420c0d56069494c8"],["/post/8274.html","bf729385196989c078becda7d547ab17"],["/post/8372.html","31450a14c3dbb3b4ac5d1d595fa73dbf"],["/post/8498.html","ea4194ea1eb573f6addc8b450a78d99d"],["/post/84ea90f7.html","99a314cf0129f9b41b571fec9a96c856"],["/post/85b4e13b.html","14eaeb19f0262dfe1680b49c80d69126"],["/post/912b2566.html","f64ff80ae505a257f71cdd9a547e68ca"],["/post/9187.html","7bbc179c30d0dd1c0950164053e03632"],["/post/9197.html","c11ed289d284a51cd7cd7062fabfac86"],["/post/94ceb2fd.html","335d91278ca424504bc758f945815028"],["/post/95495db.html","46e3179a99fc4652231f86167be46a2c"],["/post/97246020.html","d4689032b21af99000cbb9daf1029fa8"],["/post/9954ba8e.html","300e11ebb04ab8e4e0f18d7f92fd22cf"],["/post/9d855db5.html","ccb9afdbb351fdc9c71ed6e7a81f3cab"],["/post/a3a786d6.html","e2a888a64e01c5c5e0026cdb48049b14"],["/post/a444b428.html","474a6c302e7a9d23e295af12de8ec884"],["/post/a50b8908.html","ea16047ae401d08cec948ca4dd1607f1"],["/post/aa1eade8.html","86890587ed4f383ca243cc29a56c78c4"],["/post/ade8c6d6.html","e7cc132013e5e44f44aeec3b67aa8d3d"],["/post/ae8362df.html","afe95ee9e48dc5a5fcf83d18b89bdebe"],["/post/af3eed3c.html","86640cd2ec9ebe380317fb6a1c0485d8"],["/post/b4c1d206.html","482d4ff0e1058bae241536b81667a62e"],["/post/bcc68732.html","627a554b2afe2e04678b62e3192e76fd"],["/post/bd608ff7.html","6dea5c1f038d1bb0e70230b0b64ccccb"],["/post/c82a1c99.html","892c9a758461b61a46a65b0f96e96854"],["/post/d213fc7f.html","b2a9140a4c19b999a6cdd0a07d124c3c"],["/post/d431fab4.html","2d1efacb231568a649b6406a470d35f7"],["/post/d5381517.html","2e924f7c02ad2dcaa165ddf8c18cdcdd"],["/post/d94f88de.html","5383ad9c181e5f83345c2e09e20ac791"],["/post/e058ffd8.html","56ef7d0a92cd14dc4cb8b2afdb2fb87e"],["/post/e0f8cb74.html","c9166b44f22ee71375b575249c1c2d9b"],["/post/eefe591f.html","257a887e86df6d735cf7d9f6482a237c"],["/post/ef296a07.html","462c61c0c4a9816372420c3c914cb74f"],["/post/ef3a3fcc.html","b0440c37709650dffcd59be422b326fa"],["/post/f201f9fd.html","b8211bd1c2da8da02567fffec25db9e9"],["/post/f79e4123.html","be12d1d2c0e003b6d82cbbce5d364d6f"],["/post/f8648a1d.html","475d623507ca6f7bf7cab46753d0fb76"],["/post/f89cb603.html","fb120e559ef189f1ad89f285cfc55023"],["/post/fa288682.html","3bec9971289388bd47f136cca8e9f3b0"],["/post/fb98053e.html","764a3d8fe652e8d08386c160c706e05a"],["/sw-register.js","c7a5c4d4a27acdb13b49a84ee16bea45"],["/tags/AT-T/index.html","52dd6e737baa6a4519bf4c518e7ee12a"],["/tags/index.html","5bbc13b5b440093348e2101b37aa3483"],["/tags/动态规划/index.html","f1ef187352d18c0f943abe0a15a7704b"],["/tags/字符串/index.html","5b2af9303c379dc15e02f0afcaf05b9a"],["/tags/字符常量/index.html","ebf1c6ec60e8d93e597b2076bdc33c50"],["/tags/快排/index.html","f26fdae1d7bfa987c3a67654162d2bc7"],["/tags/排序/index.html","603f3a7324be552e7f229c53aea4b1d2"]];
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
