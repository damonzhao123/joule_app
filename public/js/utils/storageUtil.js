/**
 * Created by damon on 2017/1/19.
 */
define(function () {
    return {
        KEYS: {
            USER: '_joule_user_'
        },
        session: {
            set(key, value){
                if (typeof value === 'object') {
                    value = JSON.stringify(value)
                }
                sessionStorage.setItem(key, value)
            },
            get(key){
                let value = sessionStorage.getItem(key)
                if (value !== null && (value.indexOf('{') === 0 || value.indexOf('[') === 0)) {
                    value = JSON.parse(value)
                }
                return value
            },
            remove(key){
                sessionStorage.removeItem(key)
            }
        },
        local: {
            set(key, value){
                if (typeof value === 'object') {
                    value = JSON.stringify(value)
                }
                localStorage.setItem(key, value)
            },
            get(key){
                let value = localStorage.getItem(key)
                if (value !== null && (value.indexOf('{') === 0 || value.indexOf('[') === 0)) {
                    value = JSON.parse(value)
                }
                return value
            },
            remove(key){
                localStorage.removeItem(key)
            }
        }
    }
})