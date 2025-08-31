// pages/classify/classify.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        asideBar: ["卡片、证件类", "生活用品", "数码产品", "美妆护肤类", "衣服物品类", "饰品", "文娱", "其它"],
        login: false,
        rightList: [
            [
                {
                    url: "../../images0/身份证.jpg",
                    text: "身份证"
                },
                {
                    url: "../../images0/校园卡.jpg",
                    text: "校园卡"
                },
                {
                    url: "../../images0/学生证.jpeg",
                    text: "学生证"
                },
                {
                    url: "../../images0/水卡.jpeg",
                    text: "水卡"
                },
                {
                    url: "../../images0/gongjiaoka.jpg",
                    text: "公交卡"
                },
                {
                    url: "../../images0/银行卡.jpg",
                    text: "银行卡"
                },
                {
                    url: "../../images/index.png",
                    text: "其它"
                }
            ],
            [
                {
                    url: "../../images1/水杯.jpg",
                    text: "水杯"
                },
                {
                    url: "../../images1/雨伞.jpeg",
                    text: "雨伞"
                },
                {
                    url: "../../images1/小风扇.jpg",
                    text: "小风扇"
                },
                {
                    url: "../../images1/钥匙.jpeg",
                    text: "钥匙/钥匙扣"
                },
                {
                    url: "../../images/index.png",
                    text: "其它"
                }
            ],
            [
                {
                    url: "../../images2/手机.jpg",
                    text: "手机"
                },
                {
                    url: "../../images2/相机.jpeg",
                    text: "相机"
                },
                {
                    url: "../../images2/U盘.jpeg",
                    text: "U盘/硬盘"
                },
                {
                    url: "../../images2/充电宝.jpeg",
                    text: "充电宝"
                },
                {
                    url: "../../images2/平板电脑.jpeg",
                    text: "平板电脑"
                },
                {
                    url: "../../images2/鼠标.jpeg",
                    text: "鼠标"
                },
                {
                    url: "../../images2/充电线.jpeg",
                    text: "充电线"
                },
                {
                    url: "../../images2/耳机.jpg",
                    text: "耳机"
                },
                {
                    url: "../../images2/手写笔.jpeg",
                    text: "手写笔"
                },
                {
                    url: "../../images2/支架.png",
                    text: "支架"
                },
                {
                    url: "../../images2/音响.jpeg",
                    text: "音箱"
                },
                {
                    url: "../../images2/MP3.png",
                    text: "MP3"
                },
                {
                    url: "../../images/index.png",
                    text: "其它"
                }
            ],
            [
                {
                    url: "../../images3/口红.png",
                    text: "口红"
                },
                {
                    url: "../../images3/粉底.jpg",
                    text: "粉底"
                },
                {
                    url: "../../images3/眉笔.png",
                    text: "眉笔"
                },
                {
                    url: "../../images3/腮红.png",
                    text: "腮红"
                },
                {
                    url: "../../images3/眼影.png",
                    text: "眼影"
                },
                {
                    url: "../../images3/防晒.png",
                    text: "防晒"
                },
                {
                    url: "../../images3/喷雾.png",
                    text: "喷雾"
                },
                {
                    url: "../../images3/香水.jpeg",
                    text: "香水"
                },
                {
                    url: "../../images/index.png",
                    text: "其它"
                }
            ],
            [
                {
                    url: "../../images4/男装.png",
                    text: "男装"
                },
                {
                    url: "../../images4/女装.png",
                    text: "女装"
                },
                {
                    url: "../../images4/男鞋.png",
                    text: "男鞋"
                },
                {
                    url: "../../images4/女鞋.png",
                    text: "女鞋"
                },
                {
                    url: "../../images4/包包.png",
                    text: "包包"
                },
                {
                    url: "../../images/index.png",
                    text: "其它"
                }
            ],
            [
                {
                    url: "../../images5/手表.png",
                    text: "手表"
                },
                {
                    url: "../../images5/项链.png",
                    text: "项链"
                },
                {
                    url: "../../images5/手链.png",
                    text: "手链"
                },
                {
                    url: "../../images5/戒指.png",
                    text: "戒指"
                },
                {
                    url: "../../images5/耳饰.png",
                    text: "耳饰"
                },
                {
                    url: "../../images5/眼镜.png",
                    text: "眼镜"
                },
                {
                    url: "../../images5/帽子.png",
                    text: "帽子"
                },
                {
                    url: "../../images5/发箍.png",
                    text: "发饰"
                },
                {
                    url: "../../images/index.png",
                    text: "其它"
                }
            ],
            [
                {
                    url: "../../images6/教材.jpeg",
                    text: "教材"
                },
                {
                    url: "../../images6/笔记.jpeg",
                    text: "笔记"
                },
                {
                    url: "../../images6/文具.jpg",
                    text: "文具"
                },
                {
                    url: "../../images6/球.jpeg",
                    text: "球/球拍"
                },
                {
                    url: "../../images6/护具.jpg",
                    text: "护具"
                },
                {
                    url: "../../images6/跳绳.jpg",
                    text: "跳绳"
                },
                {
                    url: "../../images6/自行车.jpeg",
                    text: "自行车"
                },
                {
                    url: "../../images6/棋牌.jpeg",
                    text: "棋牌"
                },
                {
                    url: "../../images/index.png",
                    text: "其它"
                }
            ],
            [
                {
                    url: "../../images/药.jpeg",
                    text: "药品"
                },
                {
                    url: "../../images/零食.png",
                    text: "零食"
                },
                {
                    url: "../../images/周边.jpg",
                    text: "周边"
                },
                {
                    url: "../../images/index.png",
                    text: "其它"
                }
            ]
        ],
        select: 0,
    },

    toSearch() {
        wx.navigateTo({
          url: '../search/search',
        })
      },

    toClassifyList(e) {
        const { text } = e.currentTarget.dataset;
        wx.navigateTo({
          url: `../classifyList/classifyList?text=${text}&from=classify`,
        })
    },

    selectLeft(e) {
        const { index } = e.currentTarget.dataset;
        this.setData({
            select: index
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            login: !!wx.getStorageSync('login')
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                select: 1
            })
        }
        this.onLoad();
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})