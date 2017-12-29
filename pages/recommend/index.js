/**
 * @author GuiYun.Fun
 */

import smSwiperbanner from '../../src/components/smComponents/smSwiperbanner.vue'
import smPack from '../../src/components/smComponents/smPack.vue'
import smPackContain from '../../src/components/smComponents/smPackContain.vue'
import smSwiperbox from '../../src/components/smComponents/smSwiperbox.vue'
import smPopular from '../../src/components/smComponents/smPopular.vue'
import smSpecial from '../../src/components/smComponents/smSpecial.vue'
import smList from '../../src/components/smComponents/smList.vue'
import axios from 'axios'

export default {
  name: 'recommend',

  data() {
    return {
      imgUrl: [], // 轮播图
      tittle: '', // 品牌甄选title
      brand: [], // 品牌甄选
      newgoods: [], // 新品首发
      hotgoods: [], // 人气推荐
      topicList: {}, // 专题精选
      guessUlike: [] // 猜你喜欢

    }
  },

  components: {
    smSwiperbanner,
    smPack,
    smPackContain,
    smSwiperbox,
    smPopular,
    smSpecial,
  smList},

  created() {
    let _ = this

    axios.get('../../static/data.json')
      .then(function (res) {
        console.log(res.data.result)

        let result = res.data.result

        _.imgUrl = result.index_imgUrl
        _.tittle = result.index_brand.brand_name
        _.brand = result.index_brand.brand
        _.newgoods = result.index_new_goods
        _.hotgoods = result.index_hot_goods
        _.topicList = result.topic_list
        _.guessUlike = result.index_guess_ulike
      })
  }

}
