<template>
    <div>
        <el-tabs  v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="推荐" name="1">
                <top/>
                <cont1/>
                <cont2/>
                <cont3/>
                <last/>
            </el-tab-pane>
            <el-tab-pane label="手机" name="2">
                <top/>
                <conts/>
                <last/>
            </el-tab-pane>
            <el-tab-pane label="智能" name="3">
                <top/>
                <conts1/>
                <last/>
            </el-tab-pane>
            <el-tab-pane label="电视" name="4">
                <top/>
                <conts2/>
                <last/>
            </el-tab-pane>
            <el-tab-pane label="笔记本" name="5">
                <top/>
                <conts3/>
                <last/>
            </el-tab-pane>
            <el-tab-pane label="家电" name="6">
                <top/>
                <conts4/>
                <last/>
            </el-tab-pane>
        </el-tabs>
    </div>

</template>

<script>
    import conts from "../components/first/conts"
    import conts1 from "../components/first/conts1"
    import conts2 from "../components/first/conts2"
    import conts3 from "../components/first/conts3"
    import conts4 from "../components/first/conts4"
    import conts5 from "../components/first/conts5"

    import top from '../components/first/top.vue'
    import cont1 from '../components/first/cont1.vue'
    import cont2 from '../components/first/cont2.vue'
    import cont3 from '../components/first/cont3.vue'
    import last from '../components/footer/footer.vue'
    export default {
        name: "ceshi",
        data() {
            return {
                activeName: '1'
            };
        },
        components: {
            top,
            cont1,
            cont2,
            cont3,
            conts,
            conts1,
            conts2,
            conts3,
            conts4,
            conts5,
            last
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }

    }

</script>

<style>
    .el-tabs__item:hover {
        color: red;
        cursor: pointer;
    }
    .el-tabs__active-bar{
        background-color: red;
    }
    .el-tabs__header{
        background-color: #f2f2f2;
    }
    .el-tabs__header {
        position: fixed;
        padding: 0;
        /*position: relative;*/
        /* margin: 0 0 -12px; */
        margin-top: 0.3rem;
        z-index: 9;
    }
</style>