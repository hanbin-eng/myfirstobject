<template>
    <div class="goods">
        <van-swipe class="goods-swipe" >
            <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                <img :src="thumb" class="s">
            </van-swipe-item>
        </van-swipe>

        <van-cell-group>
            <van-cell>
                <div class="goods-title">{{ goods.title }}</div>
                <div class="goods-price">{{ formatPrice(goods.price) }}</div>
            </van-cell>
            <van-cell class="goods-express">
                <van-col span="10">运费：{{ goods.express }}</van-col>
                <van-col span="14">剩余：{{ goods.remain }}</van-col>
            </van-cell>
        </van-cell-group>

        <van-cell-group class="goods-cell-group">
            <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
                <template slot="title">
                    <span class="van-cell-text">小米店铺</span>
                    <van-tag class="goods-tag" type="danger">官方</van-tag>
                </template>
            </van-cell>
            <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
        </van-cell-group>

        <van-cell-group class="goods-cell-group">
            <van-cell title="查看商品详情" is-link @click="sorry" />
        </van-cell-group>

        <van-goods-action>
            <van-goods-action-icon icon="chat-o" @click="sorry">
                客服
            </van-goods-action-icon>
            <van-goods-action-icon icon="cart-o" @click="onClickCart">
                购物车
            </van-goods-action-icon>
            <van-goods-action-button type="warning" @click="sorry">
                加入购物车
            </van-goods-action-button>
            <van-goods-action-button type="danger" @click="sorry">
                立即购买
            </van-goods-action-button>
        </van-goods-action>
    </div>
</template>

<script>
    import s1 from '../assets/products/s1.jpg'
    import s2 from '../assets/products/s2.jpg'
    import s3 from '../assets/products/s3.jpg'
    import s4 from '../assets/products/s4.jpg'
    import s5 from '../assets/products/s5.jpg'
    import s6 from '../assets/products/s6.jpg'
    import s7 from '../assets/products/s7.jpg'

    import {
        Tag,
        Col,
        Icon,
        Cell,
        CellGroup,
        Swipe,
        Toast,
        SwipeItem,
        GoodsAction,
        GoodsActionIcon,
        GoodsActionButton
    } from 'vant';
    export default {
        components: {
            [Tag.name]: Tag,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [GoodsAction.name]: GoodsAction,
            [GoodsActionIcon.name]: GoodsActionIcon,
            [GoodsActionButton.name]: GoodsActionButton
        },
        data() {
            return {
                goods: {
                    title: 'Redmi K20 pro 尊享版',
                    price: 319900,
                    express: '免运费',
                    remain: 19,
                    thumb: [
                        s1,
                        s2,
                        s3,
                        s4,
                        s5,
                        s6,
                        s7
                    ]
                }
            };
        },
        methods: {
            formatPrice() {
                return '¥' + (this.goods.price / 100).toFixed(2);
            },
            onClickCart() {
                this.$router.push('cart');
            },
            sorry() {
                Toast('稍后跳转');
            }
        }
    };
</script>

<style>
   .s{
       width: 3.8rem;
   }
</style>