/**
 * @author GuiYun.Fun
 */

import smHeader from '../../src/components/smComponents/smHeader'
import smFooter from '../../src/components/smComponents/smFooter'
import axios from 'axios'

export default {
  name: 'index',
  data() {
    return {
      headerSwiper: [], // 滚动导航的title
      footerItem: [] // 页脚的内容
    }
  },
  components: {
    smHeader,
  smFooter},
  created() {
    console.log(this)

    let _ = this

    axios.get('../../static/data.json')
      .then(function (res) {
        console.log(res.data.result)

        let result = res.data.result

        _.headerSwiper = result.index_header
        _.footerItem = result.index_footer
      })
  }
}
