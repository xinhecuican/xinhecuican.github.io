/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","0d1847ce830c6f449ec335c401bcd9bb"],["/archives/2019/index.html","a52f881250fc6cb9690774514b3d7264"],["/archives/2020/01/index.html","d04bdeff8ef50623a95fb4eb13cc7637"],["/archives/2020/01/page/2/index.html","618285d00c1eb9b6642e963251b5662b"],["/archives/2020/01/page/3/index.html","af27c85ef51839570e2f5af2840e0d2f"],["/archives/2020/01/page/4/index.html","8685fa98032da3cc168fa1900c8a6f52"],["/archives/2020/01/page/5/index.html","b3cd63507103ca65fd7915c4bb33dccc"],["/archives/2020/01/page/6/index.html","f7bce2fb5690ed7030df63e86625b8d4"],["/archives/2020/02/index.html","ab231ceb9afe67eb36fc81eae15888bc"],["/archives/2020/02/page/2/index.html","b8ddab3466a54fea170554dc154f9ef4"],["/archives/2020/02/page/3/index.html","fea4351e230614c969b9d428455a6443"],["/archives/2020/03/index.html","6a02d225f9068c972cc66514df802127"],["/archives/2020/03/page/2/index.html","5772265a43043626482559d1be9efbc2"],["/archives/2020/04/index.html","40902d1c6bff78dda283e470ffaf3150"],["/archives/2020/04/page/2/index.html","ae1c31bc6515e773381518e3897b7e36"],["/archives/2020/05/index.html","7113e3c7dce2b3961cc219cf19985831"],["/archives/2020/05/page/2/index.html","1d69f127292aa91c3158515007c43f7a"],["/archives/2020/06/index.html","fae58cb715d5137840432d613bce9a54"],["/archives/2020/07/index.html","3bf7e2d48f62b7248056c6054bef497d"],["/archives/2020/07/page/2/index.html","afb00c9057a8d8de1f5f6bd434ba9a86"],["/archives/2020/08/index.html","375fd86760fe9253dc4878a6792b4040"],["/archives/2020/10/index.html","af2fc995d589d1dceaa00619e92fad8e"],["/archives/2020/11/index.html","744b4348337a6d1252ad9beaae29e400"],["/archives/2020/12/index.html","be2d3f119285d85a8825dfb75a91cb85"],["/archives/2020/index.html","528e0ade841d8c5d6df952526df31a36"],["/archives/2020/page/10/index.html","c33bc04ba14fc1a106fe5cad1360eb19"],["/archives/2020/page/11/index.html","6b163d5b6e20bdb94e603eee000d7a00"],["/archives/2020/page/12/index.html","6c4ca8683b50590c8c43db41691df26d"],["/archives/2020/page/13/index.html","3151b07ab4dfb4a24022654ccb510b2f"],["/archives/2020/page/14/index.html","c00c2c10e890d098dd326f954fdcb5c9"],["/archives/2020/page/15/index.html","7233dea5322a8c3f438b5cf0320d779a"],["/archives/2020/page/16/index.html","7dc9881ab28752c7ef72f4f7b97e5ee3"],["/archives/2020/page/2/index.html","5f494a63c98a21883aec2493e0445ca8"],["/archives/2020/page/3/index.html","0320e50847b58b51b10268f4c19c3e6c"],["/archives/2020/page/4/index.html","c10f8e2b1fb2555439912ec654132d60"],["/archives/2020/page/5/index.html","f28dab609151c2dcb3611389e5bf8702"],["/archives/2020/page/6/index.html","62322ee9c76cc6a79ceefa417a107bda"],["/archives/2020/page/7/index.html","31b7b03a89d5ae340778c4d5df96ca1b"],["/archives/2020/page/8/index.html","7b89e4381c021449e79495f5a19dbdc5"],["/archives/2020/page/9/index.html","45ceb5d9c06b365c85404796a4ccc51a"],["/archives/2021/01/index.html","3c1d76a65be464c0dcb174cf53518472"],["/archives/2021/02/index.html","9638f009864c21fa475549e1875e59d4"],["/archives/2021/03/index.html","406dedc458719936ed9171ea77205262"],["/archives/2021/04/index.html","02b6cffd1d163a5078303210b6ec01ff"],["/archives/2021/index.html","49a46128f6402f9e36bd59242a280e49"],["/archives/2021/page/2/index.html","3e906409b2d27addd1f8d31946fffe72"],["/archives/2021/page/3/index.html","22b69e7d33d9aab0bced50547017800d"],["/archives/index.html","57cd7dc73f1694c5cb22845ba97fb428"],["/archives/page/10/index.html","89651cb5064910d704a789e6793948c4"],["/archives/page/11/index.html","edf0ee1578e52549307996cf02be6629"],["/archives/page/12/index.html","5f3143e909a96996e83bdce3ef70e5d0"],["/archives/page/13/index.html","d2f7ce52f95c0e8ca539c706f69eda74"],["/archives/page/14/index.html","b41c8a44b792f04d9e83c4d3ad7fec74"],["/archives/page/15/index.html","f35330d4fc587b192672de84fd36c271"],["/archives/page/16/index.html","72ad20ad638d1fbe967d53ff74e366b2"],["/archives/page/17/index.html","a537708d87be350cd0f7e999fcfbe50f"],["/archives/page/18/index.html","112d0414a3db1d4dd8d8029ab2b13b3a"],["/archives/page/19/index.html","65a769ddd7a3271621e489c88d48506e"],["/archives/page/2/index.html","9cc182f0b3198d246e30572a7f54f27e"],["/archives/page/3/index.html","e5a5086dda95a5b836556c92d3c5c333"],["/archives/page/4/index.html","b8bbaa666b620c9240d1e44e2f810213"],["/archives/page/5/index.html","3b7842db346b697a527c8d6a0356a9fb"],["/archives/page/6/index.html","8613e8a8d547c4f00d8c5c596b3591ce"],["/archives/page/7/index.html","c9a7dbc368b004665983f3e43afea440"],["/archives/page/8/index.html","bbd313781c9b946461eb4e2cedd7b904"],["/archives/page/9/index.html","74d39e3fb2d3f95fecdf4b9410c312b2"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","c5227de9a7d1901056c550071882af2e"],["/categories/Linux/page/2/index.html","2930a5f4137bef32e994a7824485cc8d"],["/categories/Python/index.html","4f813b87604b27438e5fa827341d2148"],["/categories/Unity/index.html","dece06a269f985d52fef416ebdda0edd"],["/categories/c/index.html","47f5e0a86a6ed816307319d819e68787"],["/categories/html/index.html","576f3482b1b4e232d51dccd6f6ee6371"],["/categories/index.html","075e5adf9690d00294d1033848e4d332"],["/categories/java/index.html","35ac5144add5701c101df4f03f723068"],["/categories/java/page/2/index.html","90d139168b2ef50d59539ddea055b64a"],["/categories/java/page/3/index.html","303a9f45054556068e54e8cc722cddb4"],["/categories/js/index.html","7ec611011cf620469f3d5517318b8872"],["/categories/next/index.html","8724aa49f1371e0ad1ba247acf462df8"],["/categories/stl/index.html","37a530ebdf42ac7c2704f1a01df3c9a7"],["/categories/windows/index.html","b724e11632c8347dcffc82fcfc8b2198"],["/categories/基础/c/index.html","0797402934b79906412e13503b523ac8"],["/categories/基础/index.html","36e8a5edaec1004ab8e953f7baa339b5"],["/categories/基础/page/2/index.html","3c858496c2e9a65d2311378e3358f6cb"],["/categories/并行/index.html","d1b9aae079e463de3f11cf0bec64377c"],["/categories/数学/index.html","302cba5107c8af2fc75b1059b58c1414"],["/categories/数学/概率论/index.html","4201a3740b9f57a5642229fd902de854"],["/categories/数据库/MySQL/index.html","549876c86e8d804062adc42fcb464187"],["/categories/数据库/index.html","5eb4338b7a029c2ee940c466b197ee94"],["/categories/数据结构/index.html","e5d05d0f6ec50e283c44eb6712884e6d"],["/categories/数据结构/算法/index.html","70af307c98ae06f20c9668d99b52737f"],["/categories/机器学习/index.html","867c045bcb578063645f664206e6ff7b"],["/categories/杂项/index.html","a7619ad4818e5e81a6ad52f1cc38a9b6"],["/categories/汇编/AT-T/index.html","5af752123edbce310f599486a608e505"],["/categories/汇编/index.html","3002b4a49e99db17edadcae5e404a9b9"],["/categories/汇编/page/2/index.html","f27ea833bcb36c9a3b2001829c7ab5b7"],["/categories/汇编/page/3/index.html","daf8b1ae5d8c206f3cf11ffc68f9af87"],["/categories/算法/index.html","b2889ef9c051b6aca8fe8937ff124448"],["/categories/算法/page/2/index.html","83908b7a8ac94918e86f96be29658efc"],["/categories/算法/page/3/index.html","7cdf33c998e3cf668751946724d965c2"],["/categories/网络/index.html","ed79ae4ef7001c7cf9ef72c891313025"],["/categories/计算机系统基础/index.html","7460c0cd504b5c80bc4812bd08ce031f"],["/categories/计算机系统基础/page/2/index.html","3096c05e2323aa06ceb57b667fbb26fa"],["/categories/逆向/index.html","30d454d15ed838b3423782fe2a94f6f4"],["/categories/逻辑电路/index.html","0f2876f9871f1025eb99e52277e22693"],["/css/background.css","3ce8b52157bd531ee3427642486cfc6a"],["/css/index.css","779f61c8c1b448225e33a0a30297c4c0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/Snell-Roundhand字体.ttf","2ec54ef3411fd027522c5f1b8b6fe726"],["/fonts/漂亮行楷字体.ttf","2d252f361cb5bfe1f0b607c07143b506"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/MPI编程1.png","ed530f67b0e7e0f33df20577b39d7247"],["/images/MPI通信2.png","ce919e1ba147cb367745fc829c2e7fac"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-27.png","17984ab0385473e02430061c5832fc19"],["/images/pasted-28.png","44e682ad4bfbf2b20343ce55ed877d8a"],["/images/pasted-29.png","a60a4fc7812f20078e4e6b5bb6b07721"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-30.png","ee101ea21972b3ab71b3e8cbd62fedcd"],["/images/pasted-31.png","4759294af3a90a1a857124f247a4d777"],["/images/pasted-32.png","805ca0a1863b73f5ed92f042c12df61a"],["/images/pasted-33.png","730864390853bf56ccb93a40adf61026"],["/images/pasted-34.png","7a49f9e559140600426520aeb28ec206"],["/images/pasted-35.png","29c1357596235d6bfd7f42bd809d7e39"],["/images/pasted-36.png","f84229b3658edd6fbc1054af9f409cd7"],["/images/pasted-37.png","bcd95f06c4879b597118a2eef82a63b3"],["/images/pasted-38.png","869d087e64b3af39a3782c82263f2ab3"],["/images/pasted-39.png","163762097154056aef2aab69be0cb57f"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-40.png","ef974e633e6529c0fef054ba0040e62f"],["/images/pasted-41.png","91c939f5991ecdf3981be7af94d4403f"],["/images/pasted-42.png","29b1481876fbe1b1326095fd092a98ad"],["/images/pasted-43.png","58b98d4645fcfbb023c2c312ab67d1f1"],["/images/pasted-44.png","086c1d8ff6cde02cfdd23ec81a475da0"],["/images/pasted-45.png","aa7d2deb56c2c3fdbeefc8865c670e81"],["/images/pasted-46.png","0e239518ed6cd922814d0fc70e39ab66"],["/images/pasted-47.png","af0c5ad28140305a6240fbec7c396d4c"],["/images/pasted-48.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-49.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-50.png","4072cb3b9bfa4f91f35539faa74f2c6a"],["/images/pasted-51.png","3a195c159e35be6babd48aac5bf2de2b"],["/images/pasted-52.png","21346633be28fb02dd3d04da0e464d0b"],["/images/pasted-53.png","d522b3a69437b1a6a6eb2a21fc0fe9fe"],["/images/pasted-54.png","33eba22b1ccef5f0fa21c742ce6ebfa1"],["/images/pasted-55.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-56.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-57.png","c9a60834fbae840ea37440adc6c21af1"],["/images/pasted-58.png","38a77ba94510e9dd232a216180203a5c"],["/images/pasted-59.png","9c7af8544f1c33032032a46937456458"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-60.png","a2c19835599a9e7057611117f40505fd"],["/images/pasted-61.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-62.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-63.png","ca5dfdd8338d587c32537ef631051a1f"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/时序电路10.png","a1c552571987118b7be43072d06698cc"],["/images/时序电路11.png","f48e512d2ffb7fe905c14eff4419c3b1"],["/images/时序电路2.png","a97ce56f602f5ebdc40ded148829ee53"],["/images/时序电路3.png","4a44556ede70ac3247a7a6302babdd48"],["/images/时序电路4.png","dd3a9b392604b1a4eef3a50e9e3c5529"],["/images/时序电路5.png","e504561f49f83e4c5901b087b62ab800"],["/images/时序电路6.png","2929c1e70186d9a9fed5d3e869bfa72a"],["/images/时序电路7.png","3a1bebaf06949581fdadd35ebae31777"],["/images/时序电路8.png","743b216b1a976f6c4e3b829db61919e6"],["/images/时序电路9.png","d799f6b0fe3bb272d0519b3cb1f2c7a0"],["/images/时序逻辑设计1.png","606b96f849348c83941fccb8864833c3"],["/images/硬件描述语言6.png","52e2a10422fba145bda8ceb7b160e12c"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","deea98f751537ba20aaf9323373a7eee"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","824ebe97d4450653e930dc36dd48d80b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","fccb252e5c628ac59a793f51fcf75388"],["/page/11/index.html","dcb2df9ca4870be4a0ee06e5bfbf97b2"],["/page/12/index.html","e1c0b93143786859e0b32c68bd27d9b1"],["/page/13/index.html","0d4be489f227deadbd8f6ffb960ca7d7"],["/page/14/index.html","6b67c10579528ad8b2e69738876db37f"],["/page/15/index.html","693839fa87024f17629fe2ace56b06ea"],["/page/16/index.html","02b77d31f76eef5aab722a063b5b366c"],["/page/17/index.html","5c219d1d8448f36a938a9daee663cb47"],["/page/18/index.html","f72a5d9e980fc9d3a16dde30dec33804"],["/page/19/index.html","5260b67f8957e768e6ec71a022100db2"],["/page/2/index.html","07c422a355cc5b34af979935e48fb9fd"],["/page/3/index.html","6e43ee7c0c0e7bcf6ede287129a5f70b"],["/page/4/index.html","21e192b426db1abc950baca49be503ed"],["/page/5/index.html","bf67d56e4a8bbb57e480f816a3d46b77"],["/page/6/index.html","308ede1e2ab8139c92b935ce4b8785f4"],["/page/7/index.html","d84eebb5207ee09c225fc55a02a722a0"],["/page/8/index.html","0480f5aed47f4cd71f2e279ce7c400e7"],["/page/9/index.html","4c6c992f19a7b9c763623fbaeff41bde"],["/post/10919.html","9067a6046348d3f49ee0c286340fa43b"],["/post/11051.html","ded92f0a5c1255ce2fe38361285104b7"],["/post/11306.html","6dbb0c46a6d4cc8bc6915e50c8283cf0"],["/post/11491.html","7c9c69124b2026368c500474f16003b1"],["/post/11799.html","62b12bc9d5bb13dd95bf794990987a56"],["/post/12334.html","e2ed6468e2e587b7ba4513a44ddc2c55"],["/post/1326.html","0245b9bf1ab5af2015197acbfa64e01c"],["/post/14379.html","8a0ab2dbbd25783251873a5fa98f135c"],["/post/14511.html","488c76faf53da0f42b9fac061b42bce3"],["/post/15201.html","4e0e086645e9e8f93f00182e46de2bd2"],["/post/15425.html","437071854fa0a26083e2b78961365976"],["/post/16107.html","5b3a017301ea909a2520dd93f6667057"],["/post/16e2846c.html","84fa68ff326a95c631d613b3ad87d132"],["/post/17862176.html","9e38ee5e8e1baaf22c1ce740d82aa725"],["/post/17ad67a8.html","47800d4597c1b3b978c28e93c0d262fb"],["/post/18431.html","bb0c912d8dc584276f5a40114f4ae411"],["/post/18912.html","20a4afc228fa5cd5ea9a1cb279dbd6a7"],["/post/1b9c8662.html","2326386cb24bdf5d4085735fbc7a627e"],["/post/20198.html","602775231ef168ebe3d0fb8cd9993173"],["/post/20ff5ccb.html","4119fddc92bbdc95e9506b976a713ffb"],["/post/21624.html","8acffa9d46a0b775618365f4f2b4f009"],["/post/2170659a.html","051c0f43aafb77b4cc0460a7edd7f398"],["/post/22102.html","98135b458cc48a46e235dc5e38ea9b79"],["/post/22493.html","8aa043ce018397c1fc94ecb962eaa766"],["/post/235252ea.html","730c3ede2b9f66e9cac15c79b3e1553d"],["/post/25699.html","9aba205a07599a2406b942168b6dc0fc"],["/post/2647.html","b969c76b755f2714250267d57f7f3400"],["/post/26477.html","d067b225899f0035dd5356d514a89b3e"],["/post/26671.html","ac85b4ffc26f4c9122e2c25da9c56ae4"],["/post/26737.html","986c2aefbb943cec664e0dd43bf830b9"],["/post/27045.html","c265d346390275daa402a2e7a6280afd"],["/post/27621.html","23c38818b5c3219b15f2fc75f5dec490"],["/post/27890.html","c37cbcc1ec2c30d2f92ce9eceb5af2b1"],["/post/27980.html","b6823c363a7ecbbbbc300ae9482c6d80"],["/post/280b588e.html","98d3a12be1f045c492b3110d89ad71c8"],["/post/28579.html","ba8de8b0f32ae96b1649ab8d7644ce3f"],["/post/28877bf.html","8d0ffbc5a9f3e410f90bcb9f1412b6ad"],["/post/28954.html","cd8df44631ea0f00ba7ce48e8b6de826"],["/post/29378.html","aacc68461b653a4af489a1c44aa646d6"],["/post/29949.html","245b35957ae12539ec6a026a93765f2d"],["/post/2ae43b86.html","5dfb01363f6a34fe88e3f5560d823102"],["/post/2ba82a45.html","ce516cad4923741b6e3f0fde6fce4fc1"],["/post/2cad8b04.html","cfc004cf37bd6ed649ce350e22b77892"],["/post/30072.html","cd4148c4b9cf625f17016c20756b4956"],["/post/30479.html","284bfc4ad4034ec6be1d2fdf11216072"],["/post/30a5dc7e.html","50f0cb2919ba169144e67674f6e905a0"],["/post/31a6b40.html","cdc6cd93176bc78158bf97353a7e3407"],["/post/325cdbf2.html","1420a5bed71b797d6796f614d814cd27"],["/post/3319ed9a.html","e635ae6c51233405018a2ec4dc2a5a21"],["/post/3320.html","29d0df6f93acad4a92d4cec862dd160d"],["/post/33cb1151.html","3ef48020800cbbd0d2b4f99c0e636709"],["/post/34811d5f.html","31ea687cc1eba2cd31a81e7d44fe4398"],["/post/348d4e04.html","e13a1b73b932a3ccafb02c03ce93f597"],["/post/3526.html","d5c04e65958b99b269f19437f44e64cf"],["/post/35532.html","5a4d04e44447fc96bb84419e245a0f85"],["/post/35848.html","f61ef5f912944c80fb8db7c633fd8ea3"],["/post/37318.html","eaf37f2e87a337033de419ae21e4d2a1"],["/post/37663.html","2cab3f80a6ffb04a8a8b53dae8c90b79"],["/post/38035.html","2c1e4b62be79b7c54b3d75f10614196a"],["/post/38072.html","d9d89abe75cd9089f13f2901fb618066"],["/post/38145.html","437528833c444d0be73c50eeb79b2c08"],["/post/39968.html","33f0bdb6055ccb9b9d25370b43524c57"],["/post/3de4bc69.html","78ebfb48d4cb4fde41562d5e8118dd27"],["/post/40583.html","aa0d2da5d8b2bd3df1b41d56645a2b9f"],["/post/40997091.html","869b6f82e2b7bcd9d4261052fe1f163f"],["/post/41129.html","d70d95ecde202da2d47546524718f3b7"],["/post/41763.html","022f7c6cae1224c10b213e52319a1c85"],["/post/41829.html","d961907f8ee3caf5d9ffcb456b2beb82"],["/post/41840.html","49eb173522d3a73c218fb68fb7af571a"],["/post/41e39f2b.html","25881558eb76d20947c5bed8d3ebc61b"],["/post/43003.html","db0bdf77976156db0767d5aaa2f47405"],["/post/43817.html","e21388d57a6d1c953ed4619fa6f6bf51"],["/post/43878.html","b15d164a7b43f8070067e785260a3d5f"],["/post/44250.html","a5b2ed5c75f9293f875567d26a3fef04"],["/post/44336.html","0a4838d93ddeafbf9b22fdd93930d13c"],["/post/44454.html","91d6c3b0f505678f7b33e3f9ef588e0d"],["/post/44487.html","ec2ce0d8c4047c456878024fcb3cb25d"],["/post/44914.html","fcc631865f44aaec8884706cd0f644c6"],["/post/4551c130.html","3ae60538bb04f6f8a950fb671f23abde"],["/post/455a4c92.html","2ed933f40b906fe893d057b9da4c2b0a"],["/post/46390b34.html","0b6029c2a887b1b69acd3da19913a75b"],["/post/46466.html","339a21d9309d62e5c8cc751cb3d0b078"],["/post/46925.html","43932752b705d153e1a9d74158407f4d"],["/post/47075.html","8c8b42ed692e290b536eaef5f272fd9d"],["/post/48220.html","6e538cfed7db78bf41ccfa6eb519d6f8"],["/post/4b1879e3.html","32283c6bbd94d681fe84fe72d93285f0"],["/post/4c720881.html","4dbaa79bd501d307bd8576f9657f092b"],["/post/4f4fc0a1.html","20ffef52a7cc476f5569e7b531f8cd7d"],["/post/50daec4.html","f8758f336715b53e717596b54ce3f96d"],["/post/51491.html","2e9fce3c2e3d45bf1848acb3f0c722db"],["/post/51e63dcf.html","cd6319e34e6786942b7f338eed7067f4"],["/post/52078.html","e08d647840098bc5f7f5e7f669cbefef"],["/post/53677394.html","599fed202d275246a5f24cedca6c1b97"],["/post/54300.html","435b89dd80fed0c103d501a6a21eacad"],["/post/54612.html","9b0daee014eef4ad705c696ab3c03762"],["/post/54613.html","d2968aceb291926c66fc754a37650955"],["/post/54708.html","ea5700848ffc14423ae083e90420112d"],["/post/54778.html","990592f3c979f2a7ea4a7b0a3395aa22"],["/post/5490.html","4b4260c8961d3464d27dc18ba9e2dea3"],["/post/55046.html","d3bb81b35257e736a6a87e1b6539d3f3"],["/post/56929.html","59ed076e5e50b5ea65afff6504b19016"],["/post/57339.html","fab61a130ac1c69559cb357bf35618cd"],["/post/57449.html","40d02af293654dea93f08dc7826d6fb4"],["/post/57453.html","95e4997bcbab0b943871f8a155e1840e"],["/post/57671.html","f48b2e217b1f6cdac7dd38643c083e86"],["/post/58313.html","3b6fd705e23b735dccc454ca3626acd8"],["/post/58481.html","c52e89d02257ff5919c38b9e66a86aec"],["/post/58986.html","1b1c4c9fb1c9e1408a81d577a1b02b76"],["/post/59431.html","1e87bb10935fb26ceddb7656b8996a24"],["/post/5951da65.html","ec6d27ed640c5adbc51ad2cef3866aaf"],["/post/5be7e977.html","7e7a6ca87386bc5b87fe5c93d2d8d66e"],["/post/5f9e4eff.html","9c5cd0835215a1cc98f3fb88809a3e54"],["/post/604b49d0.html","c575dea5a9a8f993361dd1bccbc66abe"],["/post/61312.html","4465ef06a026ebe9966549788d3884c2"],["/post/61738.html","2a429b9fa1dd20b4dbff6f885b3c0603"],["/post/61809.html","9afef84491c2e6caa4f67546b74d51c4"],["/post/61eaf19a.html","8aefa9eba86854ed0b44f99057bdb046"],["/post/63002.html","2cf049c4a8435cf3c17a0f6f4410cde6"],["/post/63711.html","a7f35654d1c98c72759feff6a30b4941"],["/post/6587.html","47d158d6e6fd2b30ea3e7d12089a10e3"],["/post/6589.html","9444bcf8649a4e5f454ddd725ce658b8"],["/post/67454659.html","a49136e3f3a5dc3260263abf04251dbd"],["/post/6880.html","ef339b49a03fd68466a4fcd91f4b73ed"],["/post/6ee50502.html","b6feaffbff7d3a7caf5040aafc5c290f"],["/post/70263071.html","302e9dd75b864ed1274ac8af9853111b"],["/post/70d4f4af.html","35f9709baf37cb0773039908d923d371"],["/post/71038564.html","7b8900fd9c37d3dc0c1f0c8ce8a683c0"],["/post/7119.html","1a03aa2631d109b5f96cb299fa1ee764"],["/post/74e7fdff.html","8c5bda4b6a22d7679b3e0c2f813e06e6"],["/post/7502.html","40e88c41edc726844f358a8178153c1a"],["/post/75223936.html","c5a945a1baae2a287e3ca9bdceae8b99"],["/post/7564.html","8cce8900036d071d80132e5e1b69da03"],["/post/766f9b60.html","31a932db593430bafc25ff71bc031334"],["/post/769365ef.html","a0a57d1f5b75ac077eeb2d9199c952bd"],["/post/7ca31f7.html","73461feb8c858f1160df90978b8d31e2"],["/post/7d1c86da.html","68614e771e18fe4812bea4ae0a045d0d"],["/post/7f3bcd7f.html","1fccabf7f46c5a7704965a643ba752c8"],["/post/8039.html","85bf5ce7210ea5b990aa2cd922e6b22b"],["/post/8050.html","50c034d3a23a20e92fb2c7af93a5edd5"],["/post/8072.html","261c8991d10bb36fa4960048c7851af1"],["/post/8274.html","e748902be6b2d0633bba28cc7a97d867"],["/post/8372.html","9117cd93b3ac4d42e532ebdd422d9621"],["/post/8498.html","e79a64cfff3711ca5edc7bcc474e8362"],["/post/84ea90f7.html","3742d6859bbe99403974896e823aec43"],["/post/85b4e13b.html","b6086dbf8dd44255e8f958797b4dbec3"],["/post/8e75958d.html","8e96802ff0f10e7a1aa20f76ef0659ab"],["/post/912b2566.html","fd937b72302eeb6c50bf3f33c4e4e1bd"],["/post/9187.html","502e462c3de7f0b174d311cc2a3a8f81"],["/post/9197.html","4293ecf7e35de1240904107e17dd15a6"],["/post/94ceb2fd.html","4ee16857a1dc086d209dbc6b1bab0265"],["/post/95495db.html","91cd61d64e0f5a36c845284a0dc19f95"],["/post/97246020.html","e93b0ec1e8d88a4b56184167c5a1352b"],["/post/9954ba8e.html","9856785d049fcc27d5274d2ae4f53f65"],["/post/9d855db5.html","5f446e3e773eb7f061fb7574518a4d1a"],["/post/a3a786d6.html","70037815307935a66c042fb3ab687bfd"],["/post/a444b428.html","cebe072d35175a75d27581f435c68568"],["/post/a50b8908.html","a8ca5e5d61f32b9d4e157cf1e2a5d1fe"],["/post/aa1eade8.html","c903dc4cb138eca16eba82e0f73a7e34"],["/post/ade8c6d6.html","fa7a60fcb06bf7bb46745a5312f7c7ba"],["/post/ae8362df.html","4fda2274355adb64dc0b6b1d9f94a4b6"],["/post/af3eed3c.html","b75d9efad8c44129d1623b6c2fb003b4"],["/post/b4c1d206.html","a69ef05855f07b20b4c103f321860a09"],["/post/b75632a1.html","f43ee6ef891229c4cb62522b0c8fddaf"],["/post/bb25e9a9.html","37f832d503161df1d36f47bf4ec1edb6"],["/post/bcc68732.html","97fd39de8d196de0cf0bc232ddd5e8e9"],["/post/bcf345af.html","c74577e82fdb750edccf02ecabab0086"],["/post/bd608ff7.html","89568e861e7b5aba99f8e46fd7bc65bd"],["/post/c82a1c99.html","d5e5a21a7b03a1f5c24f28d10e3e9688"],["/post/d213fc7f.html","2822b8583efc9f7c213d81755d604d7b"],["/post/d431fab4.html","9a83c743d6c4bde79edf701aa4300644"],["/post/d5381517.html","c978dc6f11283e2f933da4076f5ba4e4"],["/post/d94f88de.html","60e584fda847699af86b3af087390869"],["/post/e058ffd8.html","5bbfbb215806e6caa68ddec9e19699cb"],["/post/e0f8cb74.html","f3f4973f837c12a9a09f046594cc9834"],["/post/eefe591f.html","ed7d1b7196e81b3466b9fe6c2cf3a229"],["/post/ef296a07.html","075f220939694925ef1a7e18d37100d7"],["/post/ef3a3fcc.html","8e897f23c884acf831c475200f9a95cf"],["/post/f201f9fd.html","795aa78b3c94019ac37dc56feb8289d2"],["/post/f79e4123.html","857592d3737b3d1d8c2b30b35fffaa8a"],["/post/f8648a1d.html","cf004107f5b06e2a370f761fa817f28c"],["/post/f89cb603.html","54b818e5b66f3bce40659c6f74ef2b69"],["/post/fa288682.html","e3acc39d6bbf5b7f4ac493f6bce352a0"],["/post/fb98053e.html","02194458b7abc0303608d19aeaa9308e"],["/sw-register.js","f892908b3de54adfd1130b46b710dbef"],["/tags/AT-T/index.html","3c0644ec6378d83b09acb18063595653"],["/tags/index.html","172435166e0df6064768736b397e1572"],["/tags/动态规划/index.html","0de358c4f9d4d20b9523839b7ef2e5a0"],["/tags/字符串/index.html","7b79c82a3879bb51862f0506ec26b9dc"],["/tags/字符常量/index.html","227099d6c826232861c4b816015c7cb0"],["/tags/快排/index.html","20bc7ed5df542dfcd4fa805a8575a04b"],["/tags/排序/index.html","c1946f79ec72a75566765a84c16abc6a"]];
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
