## Environment
| name                          | desc                             | default           | available values          |
| ------------------            | --------------------             | ---------------   | ----------------          |
| BUILD_MODE                    | build mode                       | production        | `production` or `develop` |

Для пуша в дев нужно запушить в ветку **develop**.

Для пуша в прод:
```shell
git tag -f production
git push -f origin production
```


## requirements
#### `yarn install` - Will install all required packages

## start
#### `yarn start` - Start the app on port `8080` and watch for changes.


## TODO: 
### Part 1
- внести изменения появления текста, согласно видео
- внести изменения этажей, согласно макету
- поставить карту в подвал
- поставить второй шрифт (+ поменять Monserrat, поддержка ру-символов не нужна)
- анимация счетчика через animate пока выглядит так себе - переделать в будущем
- форкнуть fullpage/iscroll, создав для него параметр maxYSpeed (который будет рассчитываться динамически, исходя из высоты контейнера), чтобы при скролле не было возможности проигрывать видео с коэффициентом выше х15 (тогда видео просто не проигрывается)
### Part 2
- перехватывать скролл при наведении на кнопку и другие активные элементы и транслировать его в iscroll (проблема взаимодействия position: fixed и transform, которое пришлось решить за счет pointer-events: none у элементов верхнего слоя)
- при выделении через ctrl+a ломается скролл fullpage (скорее всего, теряет фокус в связке с user-select)
