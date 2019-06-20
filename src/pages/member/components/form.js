import Address from 'js/addressService.js';

export default {
    data() {
        return {
            name: '',
            tel: '',
            provinceValue: -1,
            cityValue: -1,
            districtValue: '',
            address: '',
            id: '',
            type: '',
            instance: '',
            addressData: require('js/address.json'),
            cityList: null,
            districtList: null
        }
    },
    computed: {
        lists() {
            return this.$store.state.lists
        }
    },
    created() {
        let query = this.$route.query
        this.type = query.type
        this.instance = query.instance

        if (this.type === 'edit') {
            let ad = this.instance
            this.provinceValue = parseInt(ad.provinceValue)
            this.name = ad.name
            this.tel = ad.tel
            this.address = ad.address
            this.id = ad.id
        }
    },
    methods: {
        add() {
            let { name, tel, provinceValue, cityValue, districtValue, address } = this
            let data = { name, tel, provinceValue, cityValue, districtValue, address }
            if (this.type === 'add') {
                // Address.add(data).then(res=>{
                //     console.log(res)
                //     this.$router.go(-1)
                // })
                this.$store.dispatch('addAction', data)
            } else if (this.type === 'edit') {
                data.id = this.id
                // Address.update(data).then(res=>{
                //     console.log(res)
                //     this.$router.go(-1)
                // })
                this.$store.dispatch('updateAction', data)
            }
        },
        remove() {
            if (window.confirm('确认删除')) {
                // Address.remove(this.id).then(res=>{
                //     console.log(res)
                //     if(res.status===200){
                //         this.$router.go(-1)
                //         window.alert('删除成功')
                //     }
                // })
                this.$store.dispatch('removeAction', this.id)
            }
        },
        setDefault() {
            // Address.setDefault(this.id).then(res=>{
            //     console.log(res)
            //     if(res.status===200){
            //         this.$router.go(-1)
            //         window.alert('设置成功')
            //     }
            // })
            this.$store.dispatch('setDefaultAction', this.id)
        }
    },
    watch: {
        lists: {
            handler() {
                this.$router.go(-1)
            },
            deep: true
        },
        provinceValue(val) {
            if (val === -1) return;
            let list = this.addressData.list
            let index = list.findIndex(item => {
                return item.value === val
            })
            this.cityList = list[index].children
            this.cityValue = -1
            this.districtValue = -1

            if (this.type === 'edit') {
                this.cityValue = parseInt(this.instance.cityValue)
            }
        },
        cityValue(val) {
            if (val === -1) return;
            let list = this.cityList
            let index = list.findIndex(item => {
                return item.value === val
            })
            this.districtList = list[index].children
            this.districtValue = -1
            if (this.type === 'edit') {
                this.districtValue = parseInt(this.instance.districtValue)
            }
        },
    }
}