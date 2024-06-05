import { defineStore } from 'pinia'
import type { WallWallpostFull } from '@vkontakte/api-schema-typescript'

export const useVkPostsStore = defineStore({
  id: 'vkPosts',
  state: () => ({
    posts: [
      {
        inner_type: 'wall_wallpost',
        donut: {
          is_donut: false
        },
        comments: {
          can_post: 1,
          count: 0,
          groups_can_post: true
        },
        marked_as_ads: 0,
        short_text_rate: 0.8,
        hash: 'XPzpW6FotU4rXjR79Q',
        type: 'post',
        attachments: [
          {
            type: 'video',
            video: {
              response_type: 'full',
              access_key: '7b50d3dd375d19141c',
              can_like: 1,
              can_repost: 1,
              can_subscribe: 1,
              can_add: 1,
              comments: 0,
              date: 1715246687,
              description: '',
              duration: 15,
              image: [
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6629802117780&idx=9&type=39&tkn=Uy24OtUvaVbhpOns5dbR-pwR23E&fn=vid_s',
                  width: 130,
                  height: 96,
                  with_padding: 1
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6629802117780&idx=9&type=39&tkn=Uy24OtUvaVbhpOns5dbR-pwR23E&fn=vid_m',
                  width: 160,
                  height: 120,
                  with_padding: 1
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6629802117780&idx=9&type=39&tkn=Uy24OtUvaVbhpOns5dbR-pwR23E&fn=vid_l',
                  width: 320,
                  height: 240,
                  with_padding: 1
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6629802117780&idx=9&type=39&tkn=Uy24OtUvaVbhpOns5dbR-pwR23E&fn=vid_x',
                  width: 800,
                  height: 450,
                  with_padding: 1
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6629802117780&idx=9&type=39&tkn=Uy24OtUvaVbhpOns5dbR-pwR23E&fn=vid_w',
                  width: 405,
                  height: 720
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6629802117780&idx=9&type=39&tkn=Uy24OtUvaVbhpOns5dbR-pwR23E&fn=vid_t',
                  width: 320,
                  height: 569
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6629802117780&idx=9&type=39&tkn=Uy24OtUvaVbhpOns5dbR-pwR23E&fn=vid_u',
                  width: 720,
                  height: 1280
                }
              ],
              first_frame: [
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6629802117780&idx=0&type=39&tkn=9qg2X19llxC6VevLHtcwlsFL1kI&fn=vid_f',
                  width: 227,
                  height: 405
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6629802117780&idx=0&type=39&tkn=9qg2X19llxC6VevLHtcwlsFL1kI&fn=vid_md',
                  width: 151,
                  height: 270
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6629802117780&idx=0&type=39&tkn=9qg2X19llxC6VevLHtcwlsFL1kI&fn=vid_d',
                  width: 75,
                  height: 135
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6629802117780&idx=0&type=39&tkn=9qg2X19llxC6VevLHtcwlsFL1kI&fn=vid_sm',
                  width: 40,
                  height: 72
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6629802117780&idx=0&type=39&tkn=9qg2X19llxC6VevLHtcwlsFL1kI&fn=vid_w',
                  width: 405,
                  height: 720
                }
              ],
              width: 720,
              height: 1280,
              id: 456239046,
              owner_id: -115468427,
              title: 'lv_0_20240508160818.mp4',
              track_code:
                'video_442d4c0dhY7QjyoZP82aRk2rYSRSTcuOY8qK2UDxUxOot_aWGWuzrsuGLx48pJZLTJw-EGd7-b1a8b7vRIYyf8S3-LsoWoZlAkHk0_QEXY1-',
              type: 'video',
              views: 32,
              local_views: 32,
              can_dislike: 1
            }
          }
        ],
        date: 1715246687,
        from_id: -115468427,
        id: 493,
        likes: {
          can_like: 1,
          count: 1,
          user_likes: 0,
          can_publish: 1,
          repost_disabled: false
        },
        owner_id: -115468427,
        post_source: {
          platform: 'android',
          type: 'api'
        },
        post_type: 'post',
        reposts: {
          count: 0,
          user_reposted: 0
        },
        text: '🤸🏻‍♂️🏅 Хотите получить идеальную фигуру без лишних усилий и временных затрат? Тогда EMS-процедура - ваш секрет успеха!\n\nЭта технология позволяет активировать мышцы вашего тела без интенсивных тренировок. Просто ложитесь на кушетку, расслабьтесь и позвольте электростимуляции сделать всю работу за вас.',
        views: {
          count: 38
        }
      },
      {
        inner_type: 'wall_wallpost',
        donut: {
          is_donut: false
        },
        comments: {
          can_post: 1,
          count: 3,
          groups_can_post: true
        },
        marked_as_ads: 0,
        short_text_rate: 0.8,
        hash: 'SlDEKxS60E1aO7JsFQ',
        type: 'post',
        attachments: [
          {
            type: 'photo',
            photo: {
              album_id: -7,
              date: 1715014036,
              id: 457239602,
              owner_id: -115468427,
              access_key: '13c2053e4580cc0505',
              post_id: 491,
              sizes: [
                {
                  height: 75,
                  type: 's',
                  width: 56,
                  url: 'https://sun9-18.userapi.com/impg/8SY5_-OHFkTso_bf2gnPy7-heNAr_X8GfjsAYA/JFDBby991z4.jpg?size=56x75&quality=95&sign=2ef7894c76e2ba7fd8f056df6440ccdc&c_uniq_tag=hao0pxVp8fHllfayQqJltzlxXvJYdhDTyyhN6oEutqM&type=album'
                },
                {
                  height: 130,
                  type: 'm',
                  width: 97,
                  url: 'https://sun9-18.userapi.com/impg/8SY5_-OHFkTso_bf2gnPy7-heNAr_X8GfjsAYA/JFDBby991z4.jpg?size=97x130&quality=95&sign=b889a6e67a5c1308f453ac557774a178&c_uniq_tag=lf0x5N8FP9SP_BIRvJRr9mXIPVWhrFxjbnO4Gn2C_04&type=album'
                },
                {
                  height: 604,
                  type: 'x',
                  width: 453,
                  url: 'https://sun9-18.userapi.com/impg/8SY5_-OHFkTso_bf2gnPy7-heNAr_X8GfjsAYA/JFDBby991z4.jpg?size=453x604&quality=95&sign=cad16753f4953b4068131284eb6aceb5&c_uniq_tag=eFwTYXFwQjlwTNlC5gwu2IU-_z03xCswZqDTpG57A3o&type=album'
                },
                {
                  height: 807,
                  type: 'y',
                  width: 605,
                  url: 'https://sun9-18.userapi.com/impg/8SY5_-OHFkTso_bf2gnPy7-heNAr_X8GfjsAYA/JFDBby991z4.jpg?size=605x807&quality=95&sign=14c9d9408ca6e7c5bd69bb18e73f0804&c_uniq_tag=Vf_-_ZripkRu5DgFKCLEzZ1Yv6_HMv7gqXzcvkPmXWQ&type=album'
                },
                {
                  height: 1080,
                  type: 'z',
                  width: 810,
                  url: 'https://sun9-18.userapi.com/impg/8SY5_-OHFkTso_bf2gnPy7-heNAr_X8GfjsAYA/JFDBby991z4.jpg?size=810x1080&quality=95&sign=5e14375cd60a9c71cbfe997682ccc777&c_uniq_tag=LNPA40fARJvaqAPhR734GlJZIyXPWzLt6vBFuVCT0hs&type=album'
                },
                {
                  height: 1280,
                  type: 'w',
                  width: 960,
                  url: 'https://sun9-18.userapi.com/impg/8SY5_-OHFkTso_bf2gnPy7-heNAr_X8GfjsAYA/JFDBby991z4.jpg?size=960x1280&quality=95&sign=4eb183480185ddc7ffb97aabe3ddf0dc&c_uniq_tag=llb-qlPSS46Z9thzUuxZgATCXyibyDIzuuWfaj65IaQ&type=album'
                },
                {
                  height: 173,
                  type: 'o',
                  width: 130,
                  url: 'https://sun9-18.userapi.com/impg/8SY5_-OHFkTso_bf2gnPy7-heNAr_X8GfjsAYA/JFDBby991z4.jpg?size=130x173&quality=95&sign=5d49bae6c4d5e2c5fa295060e9c907a4&c_uniq_tag=y6596qkT-qVsW5TpqnuU4_l_fUHDKttOjn1gmKrUo8w&type=album'
                },
                {
                  height: 267,
                  type: 'p',
                  width: 200,
                  url: 'https://sun9-18.userapi.com/impg/8SY5_-OHFkTso_bf2gnPy7-heNAr_X8GfjsAYA/JFDBby991z4.jpg?size=200x267&quality=95&sign=b95f3216abf6ef90ef52f5699d7dc3cd&c_uniq_tag=AI_Du7N91OPhFp9TJXQ-VmZq7mGJFQrddQ0Ja3xddPM&type=album'
                },
                {
                  height: 427,
                  type: 'q',
                  width: 320,
                  url: 'https://sun9-18.userapi.com/impg/8SY5_-OHFkTso_bf2gnPy7-heNAr_X8GfjsAYA/JFDBby991z4.jpg?size=320x427&quality=95&sign=9125238e61f6479e4e9ea1bbdb0820cb&c_uniq_tag=tZsqVIk5a6TVlFuOkTAzuYY2xod8szGbXqRAaouyVHA&type=album'
                },
                {
                  height: 680,
                  type: 'r',
                  width: 510,
                  url: 'https://sun9-18.userapi.com/impg/8SY5_-OHFkTso_bf2gnPy7-heNAr_X8GfjsAYA/JFDBby991z4.jpg?size=510x680&quality=95&sign=284b7e36112debcff4c4d284e89b2200&c_uniq_tag=xf-sSDhcyHDJhHnhqTS6-Nrr8i3Pu3FkbsVBDX5n3Hw&type=album'
                }
              ],
              text: '',
              user_id: 100,
              web_view_token: '4ca1515047f27f9acb',
              has_tags: false
            }
          }
        ],
        date: 1715014036,
        from_id: -115468427,
        id: 491,
        likes: {
          can_like: 1,
          count: 2,
          user_likes: 0,
          can_publish: 1,
          repost_disabled: false
        },
        owner_id: -115468427,
        post_source: {
          platform: 'android',
          type: 'api'
        },
        post_type: 'post',
        reposts: {
          count: 1,
          user_reposted: 0
        },
        text: '☀️☀️☀️Хотите наслаждаться летом, не беспокоясь о безопасности вашей кожи? Тогда GIGI Sun Care SPF-50 спрей - ваш надежный спутник в солнечные дни! Насладитесь легкой текстурой и мгновенной защитой от УФ-лучей, которая сохранит вашу кожу увлажненной, здоровой и молодой.\n\nС SPF-50 вы можете наслаждаться пляжем, активными прогулками и отдыхом на свежем воздухе, зная, что ваша кожа под надежным  щитом. Не позволяйте солнечным лучам  повредить вашу кожу - выбирайте GIGI Sun Care SPF-50 и наслаждайтесь летом беззаботно!',
        views: {
          count: 229
        }
      },
      {
        inner_type: 'wall_wallpost',
        donut: {
          is_donut: false
        },
        comments: {
          can_post: 1,
          count: 0,
          groups_can_post: true
        },
        marked_as_ads: 0,
        short_text_rate: 0.8,
        hash: '_h2xDdD9EaFCCKZQnw',
        type: 'post',
        attachments: [
          {
            type: 'photo',
            photo: {
              album_id: -7,
              date: 1714671917,
              id: 457239601,
              owner_id: -115468427,
              access_key: '79346aa4d524ef84b8',
              post_id: 490,
              sizes: [
                {
                  height: 75,
                  type: 's',
                  width: 75,
                  url: 'https://sun9-4.userapi.com/impg/N-0X2nR49Zt93sCsAbRH3Cj4oKr6pkvn2HAcyQ/0wph3UTPACY.jpg?size=75x75&quality=95&sign=445125e9442d3ad4a0593ab2ae169422&c_uniq_tag=HuKjnAkeFBrO1kSek96oNwLQowOBNLWBGFHoMeLNks0&type=album'
                },
                {
                  height: 130,
                  type: 'm',
                  width: 130,
                  url: 'https://sun9-4.userapi.com/impg/N-0X2nR49Zt93sCsAbRH3Cj4oKr6pkvn2HAcyQ/0wph3UTPACY.jpg?size=130x130&quality=95&sign=41111aa906af9b96915fb8da1077ae29&c_uniq_tag=OOVzURnW6gvsbkTjrbqDeUPpbeNSQzh7CKgk-hzKrEU&type=album'
                },
                {
                  height: 604,
                  type: 'x',
                  width: 604,
                  url: 'https://sun9-4.userapi.com/impg/N-0X2nR49Zt93sCsAbRH3Cj4oKr6pkvn2HAcyQ/0wph3UTPACY.jpg?size=604x604&quality=95&sign=2ca2907b61ce419204504bdc987c634c&c_uniq_tag=zR4If4qIaOtMvpbhkXYYePP4cqWJ0RlmvTVP2EeYBYw&type=album'
                },
                {
                  height: 807,
                  type: 'y',
                  width: 807,
                  url: 'https://sun9-4.userapi.com/impg/N-0X2nR49Zt93sCsAbRH3Cj4oKr6pkvn2HAcyQ/0wph3UTPACY.jpg?size=807x807&quality=95&sign=0c46bb14a8db62515d9f6912bc5b663c&c_uniq_tag=TfBQNpxp48TUHA8W9eS6gTmMOkFIstE9b4WaBVhyjHo&type=album'
                },
                {
                  height: 1280,
                  type: 'z',
                  width: 1280,
                  url: 'https://sun9-4.userapi.com/impg/N-0X2nR49Zt93sCsAbRH3Cj4oKr6pkvn2HAcyQ/0wph3UTPACY.jpg?size=1280x1280&quality=95&sign=8f64b0b0b74c72cdd05be80c7f261767&c_uniq_tag=DD58Q2Cs7FKcxBX6xU3C7dNUosHzyesU8xoGKf--YBY&type=album'
                },
                {
                  height: 2560,
                  type: 'w',
                  width: 2560,
                  url: 'https://sun9-4.userapi.com/impg/N-0X2nR49Zt93sCsAbRH3Cj4oKr6pkvn2HAcyQ/0wph3UTPACY.jpg?size=2560x2560&quality=95&sign=614f3b950968cf018f7c26bfffc2587b&c_uniq_tag=Gi_LBRTUf_gEu64fLqeOxkoS-LyBjlhlY2CM9B3jXsM&type=album'
                },
                {
                  height: 130,
                  type: 'o',
                  width: 130,
                  url: 'https://sun9-4.userapi.com/impg/N-0X2nR49Zt93sCsAbRH3Cj4oKr6pkvn2HAcyQ/0wph3UTPACY.jpg?size=130x130&quality=95&sign=41111aa906af9b96915fb8da1077ae29&c_uniq_tag=OOVzURnW6gvsbkTjrbqDeUPpbeNSQzh7CKgk-hzKrEU&type=album'
                },
                {
                  height: 200,
                  type: 'p',
                  width: 200,
                  url: 'https://sun9-4.userapi.com/impg/N-0X2nR49Zt93sCsAbRH3Cj4oKr6pkvn2HAcyQ/0wph3UTPACY.jpg?size=200x200&quality=95&sign=51c3b2b2e908140e1132b3be0126129f&c_uniq_tag=Zv-fAQh_W7WCWIfNr3zRVqaFg0622WcmMh_ytW8lD28&type=album'
                },
                {
                  height: 320,
                  type: 'q',
                  width: 320,
                  url: 'https://sun9-4.userapi.com/impg/N-0X2nR49Zt93sCsAbRH3Cj4oKr6pkvn2HAcyQ/0wph3UTPACY.jpg?size=320x320&quality=95&sign=6eaf3051770cb506772dfd26140a87cd&c_uniq_tag=4M1HjlNRskQTTPm61yBwkfkQFTMcBB3WtbjeBZ2Z9Q0&type=album'
                },
                {
                  height: 510,
                  type: 'r',
                  width: 510,
                  url: 'https://sun9-4.userapi.com/impg/N-0X2nR49Zt93sCsAbRH3Cj4oKr6pkvn2HAcyQ/0wph3UTPACY.jpg?size=510x510&quality=95&sign=7206cbf999838b537209a8692b0ec0ad&c_uniq_tag=JXVfXKDWAx__S0VT0Cvr9fx0_n7PpLODfcsqHXL0iog&type=album'
                }
              ],
              text: '',
              user_id: 100,
              web_view_token: '74e336c450a5eefe36',
              has_tags: false
            }
          }
        ],
        date: 1714671917,
        from_id: -115468427,
        id: 490,
        likes: {
          can_like: 1,
          count: 3,
          user_likes: 0,
          can_publish: 1,
          repost_disabled: false
        },
        owner_id: -115468427,
        post_source: {
          platform: 'android',
          type: 'api'
        },
        post_type: 'post',
        reposts: {
          count: 2,
          user_reposted: 0
        },
        signer_id: 17294996,
        text: 'Основные преимущества удаления сосудов на нашем лазере: 💡💡💡\n\nВысокая абсорбция гемоглобином. Световой луч, производимый аппаратом, селективно поглощается целевым пигментом — гемоглобином. Это позволяет целенаправленно воздействовать на кровеносные сосуды без значительного нагрева окружающих тканей.\n\n❗️Глубина воздействия. Длина волны 980 нм проникает глубоко в дерму до сосочкового слоя, в котором залегают сосуды не только мелкого, но и среднего калибра.\n\n⚠️Меньшая болезненность. По сравнению с другими методами лазерного лечения процедуры с использованием диодного лазера 980 нм сопровождаются меньшим дискомфортом.\n❗️Низкий риск побочных эффектов. Излучение аппаратов практически не травмирует здоровые ткани, что снижает вероятность ожогов, пигментации и образования рубцов.\n⚠️Быстрое восстановление. Низкая инвазивность процедуры сокращает срок реабилитации. Сразу после сеанса клиент может вернуться к своей обычной работе. \n📳89133851386',
        views: {
          count: 184
        }
      },
      {
        inner_type: 'wall_wallpost',
        donut: {
          is_donut: false
        },
        comments: {
          can_post: 1,
          count: 0,
          groups_can_post: true
        },
        marked_as_ads: 0,
        short_text_rate: 0.8,
        hash: 'jjnbgnhW-hpJhtYo-w',
        type: 'post',
        attachments: [
          {
            type: 'video',
            video: {
              response_type: 'full',
              access_key: 'd00f8735dbc1d59261',
              can_like: 1,
              can_repost: 1,
              can_subscribe: 1,
              can_add: 1,
              comments: 0,
              date: 1713980570,
              description: '',
              duration: 29,
              image: [
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6558516906644&idx=5&type=39&tkn=RXYfRB8Hb6ZmkHobkA0IYxIg60c&fn=vid_s',
                  width: 130,
                  height: 96,
                  with_padding: 1
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6558516906644&idx=5&type=39&tkn=RXYfRB8Hb6ZmkHobkA0IYxIg60c&fn=vid_m',
                  width: 160,
                  height: 120,
                  with_padding: 1
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6558516906644&idx=5&type=39&tkn=RXYfRB8Hb6ZmkHobkA0IYxIg60c&fn=vid_l',
                  width: 320,
                  height: 240,
                  with_padding: 1
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6558516906644&idx=5&type=39&tkn=RXYfRB8Hb6ZmkHobkA0IYxIg60c&fn=vid_x',
                  width: 800,
                  height: 450,
                  with_padding: 1
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6558516906644&idx=5&type=39&tkn=RXYfRB8Hb6ZmkHobkA0IYxIg60c&fn=vid_w',
                  width: 405,
                  height: 720
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6558516906644&idx=5&type=39&tkn=RXYfRB8Hb6ZmkHobkA0IYxIg60c&fn=vid_t',
                  width: 320,
                  height: 569
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6558516906644&idx=5&type=39&tkn=RXYfRB8Hb6ZmkHobkA0IYxIg60c&fn=vid_u',
                  width: 720,
                  height: 1280
                }
              ],
              first_frame: [
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6558516906644&idx=0&type=39&tkn=bA7WZL4yxPzXtcGibW8togs9HSo&fn=vid_f',
                  width: 227,
                  height: 405
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6558516906644&idx=0&type=39&tkn=bA7WZL4yxPzXtcGibW8togs9HSo&fn=vid_md',
                  width: 151,
                  height: 270
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6558516906644&idx=0&type=39&tkn=bA7WZL4yxPzXtcGibW8togs9HSo&fn=vid_d',
                  width: 75,
                  height: 135
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6558516906644&idx=0&type=39&tkn=bA7WZL4yxPzXtcGibW8togs9HSo&fn=vid_sm',
                  width: 40,
                  height: 72
                },
                {
                  url: 'https://i.mycdn.me/getVideoPreview?id=6558516906644&idx=0&type=39&tkn=bA7WZL4yxPzXtcGibW8togs9HSo&fn=vid_w',
                  width: 405,
                  height: 720
                }
              ],
              width: 720,
              height: 1280,
              id: 456239045,
              owner_id: -115468427,
              title: 'Video by Студия эстетики лица и тела "Chloe"',
              track_code:
                'video_f4322a54HsHxNSyGt4htdx6qgeVAsXmVQQGaKC9tBuJZfthCDIoo4eo8KYG04WF7FJ3e0XWHS6Z4Oq4dKxpnjjV-1m89ux0qI_viTHxBqrwt',
              type: 'video',
              views: 331,
              local_views: 331,
              can_dislike: 1
            }
          }
        ],
        date: 1713980570,
        from_id: -115468427,
        id: 488,
        likes: {
          can_like: 1,
          count: 5,
          user_likes: 0,
          can_publish: 1,
          repost_disabled: false
        },
        owner_id: -115468427,
        post_source: {
          platform: 'android',
          type: 'api'
        },
        post_type: 'post',
        reposts: {
          count: 1,
          user_reposted: 0
        },
        text: '🌟 Уникальная технология LPG массажа помогает не только улучшить контур вашего тела, но и значительно улучшить состояние кожи. Этот профессиональный массаж стимулирует клеточный обмен, повышает кровообращение и улучшает лимфодренаж, что способствует избавлению от целлюлита и отечности.\n\n💆‍♀️ Погрузитесь в атмосферу расслабления и ухода, а наши опытные специалисты сделают всё возможное, чтобы каждое движение массажа принесло вам истинное удовольствие.\n\n🌺 Не упустите возможность почувствовать себя более уверенно и привлекательно! Запишитесь на сеанс LPG-массажа прямо сейчас и подарите своему телу заслуженное внимание и заботу!',
        views: {
          count: 362
        }
      },
      {
        inner_type: 'wall_wallpost',
        donut: {
          is_donut: false
        },
        comments: {
          can_post: 1,
          count: 0,
          groups_can_post: true
        },
        marked_as_ads: 0,
        short_text_rate: 0.8,
        hash: 'jLZgLOENPlH5nhJYYg',
        type: 'post',
        attachments: [
          {
            type: 'photo',
            photo: {
              album_id: -7,
              date: 1713804954,
              id: 457239600,
              owner_id: -115468427,
              access_key: '35f897fe7285be858f',
              post_id: 486,
              sizes: [
                {
                  height: 75,
                  type: 's',
                  width: 56,
                  url: 'https://sun9-68.userapi.com/impg/04Xs8GngAGUS5IamrpXH1g46te4lNkJz_5BVGw/_sOzaLQeeRA.jpg?size=56x75&quality=95&sign=07ab912eea40de63b31a8961124d6048&c_uniq_tag=w9D9GBh9vbZrLekOtVSRws5UjYRPSR7lOZlFreNC1Fs&type=album'
                },
                {
                  height: 130,
                  type: 'm',
                  width: 97,
                  url: 'https://sun9-68.userapi.com/impg/04Xs8GngAGUS5IamrpXH1g46te4lNkJz_5BVGw/_sOzaLQeeRA.jpg?size=97x130&quality=95&sign=f6182b87bd4226d796e3ade46397083c&c_uniq_tag=fZCOUzNc_lUk5XX68zv0KlwFoQbXDGv9JPjmcd0_x9M&type=album'
                },
                {
                  height: 604,
                  type: 'x',
                  width: 453,
                  url: 'https://sun9-68.userapi.com/impg/04Xs8GngAGUS5IamrpXH1g46te4lNkJz_5BVGw/_sOzaLQeeRA.jpg?size=453x604&quality=95&sign=065db8339ea7bf8e124932a7e22d8026&c_uniq_tag=IB4aIJ9nkKubsQBXT67eNI_GK7XBnzK71SuvAVwb5Hc&type=album'
                },
                {
                  height: 807,
                  type: 'y',
                  width: 605,
                  url: 'https://sun9-68.userapi.com/impg/04Xs8GngAGUS5IamrpXH1g46te4lNkJz_5BVGw/_sOzaLQeeRA.jpg?size=605x807&quality=95&sign=2292492e42f9296c50b81370e0561f70&c_uniq_tag=oWTUUit33juDe8z3kuiqHMyxJHU0zRg1kmSs3DYTuCs&type=album'
                },
                {
                  height: 1080,
                  type: 'z',
                  width: 810,
                  url: 'https://sun9-68.userapi.com/impg/04Xs8GngAGUS5IamrpXH1g46te4lNkJz_5BVGw/_sOzaLQeeRA.jpg?size=810x1080&quality=95&sign=a5f297ae5b39f2aa4f039c06612c9bee&c_uniq_tag=XXTW3SXKnxripFzF9Z5y5Ue_l4LQFvtQrDMXchb2mOU&type=album'
                },
                {
                  height: 1280,
                  type: 'w',
                  width: 960,
                  url: 'https://sun9-68.userapi.com/impg/04Xs8GngAGUS5IamrpXH1g46te4lNkJz_5BVGw/_sOzaLQeeRA.jpg?size=960x1280&quality=95&sign=78eb053113e5a46c6b89c32580de6bee&c_uniq_tag=CJW1IAOkTYdCVAkpBr_7NG0AYO4x6wu5V6D8i06bXIc&type=album'
                },
                {
                  height: 173,
                  type: 'o',
                  width: 130,
                  url: 'https://sun9-68.userapi.com/impg/04Xs8GngAGUS5IamrpXH1g46te4lNkJz_5BVGw/_sOzaLQeeRA.jpg?size=130x173&quality=95&sign=92acbed8711a92791dc0321489685b9a&c_uniq_tag=T6wxQZlGGfEjf0iQaSO8TKgOK_foJztiRTmL78pdXZU&type=album'
                },
                {
                  height: 267,
                  type: 'p',
                  width: 200,
                  url: 'https://sun9-68.userapi.com/impg/04Xs8GngAGUS5IamrpXH1g46te4lNkJz_5BVGw/_sOzaLQeeRA.jpg?size=200x267&quality=95&sign=6e9da82e5bef8265eda7bb7d387f8d8b&c_uniq_tag=oxemdJ1dUYP3UFsSCjgMp00is2QRxCgUXL1WeZEbfAs&type=album'
                },
                {
                  height: 427,
                  type: 'q',
                  width: 320,
                  url: 'https://sun9-68.userapi.com/impg/04Xs8GngAGUS5IamrpXH1g46te4lNkJz_5BVGw/_sOzaLQeeRA.jpg?size=320x427&quality=95&sign=26be81898833cd97223157ee2301c508&c_uniq_tag=T_I0Ixp9Wa_arRpFJxdV9iJCjV8Vsm5xEW0BQPBTChQ&type=album'
                },
                {
                  height: 680,
                  type: 'r',
                  width: 510,
                  url: 'https://sun9-68.userapi.com/impg/04Xs8GngAGUS5IamrpXH1g46te4lNkJz_5BVGw/_sOzaLQeeRA.jpg?size=510x680&quality=95&sign=8d4c580bff6e451f0ea68225b1137130&c_uniq_tag=E5F-DkjozF1n4lIs8yc9RnimKVM4rLaLa08S6vdMrgA&type=album'
                }
              ],
              text: '',
              user_id: 100,
              web_view_token: '0c49fed0225be6ce0f',
              has_tags: false
            }
          }
        ],
        date: 1713804954,
        from_id: -115468427,
        id: 486,
        likes: {
          can_like: 1,
          count: 12,
          user_likes: 0,
          can_publish: 1,
          repost_disabled: false
        },
        owner_id: -115468427,
        post_source: {
          platform: 'android',
          type: 'api'
        },
        post_type: 'post',
        reposts: {
          count: 1,
          user_reposted: 0
        },
        text: '☄️☄️☄️ Чистка лица - это обязательная процедура для  здоровья вашей кожи. Профессиональный уход помогает не только очистить кожу от загрязнений и омертвевших клеток, но и предотвратить появление угрей, комедонов и других проблем.\n\n💆‍♀️ Наши специалисты обладают глубоким пониманием кожи и используют только лучшие методики и продукты для достижения оптимальных результатов. Мы проводим индивидуальный подход к каждому клиенту, учитывая особенности и потребности его кожи.\n\n⭐️ Регулярная чистка лица помогает улучшить текстуру кожи, сократить размер пор, улучшить цвет лица и предотвратить появление мелких морщин. Кроме того, она способствует лучшему проникновению активных ингредиентов косметики, что повышает их эффективность.\n\n❤️ Позаботьтесь о своей коже сегодня, чтобы наслаждаться ее здоровьем и красотой в будущем. Запишитесь на профессиональную чистку лица прямо сейчас и дарите своей коже заслуженное внимание и заботу!',
        views: {
          count: 299
        }
      },
      {
        inner_type: 'wall_wallpost',
        donut: {
          is_donut: false
        },
        comments: {
          can_post: 1,
          count: 1,
          groups_can_post: true
        },
        marked_as_ads: 0,
        short_text_rate: 0.8,
        hash: 'ZcmGjzzVxQ59CZfmEg',
        type: 'post',
        carousel_offset: 0,
        attachments: [
          {
            type: 'photo',
            photo: {
              album_id: -7,
              date: 1713803493,
              id: 457239597,
              owner_id: -115468427,
              access_key: 'c2f8c0b3a91991d1c1',
              sizes: [
                {
                  height: 75,
                  type: 's',
                  width: 75,
                  url: 'https://sun9-50.userapi.com/impg/vfeufb2nDOQST1fScv9m0ZUngJe-py_VfbwK1g/mrI5D2hZ9vQ.jpg?size=75x75&quality=95&sign=40daf04e49dd1e36dd4414de3298d3d2&c_uniq_tag=8tyZyRYqwXjH5YHq07WRnavsg1DL4OkeAQokPj9Xd1k&type=album'
                },
                {
                  height: 130,
                  type: 'm',
                  width: 130,
                  url: 'https://sun9-50.userapi.com/impg/vfeufb2nDOQST1fScv9m0ZUngJe-py_VfbwK1g/mrI5D2hZ9vQ.jpg?size=130x130&quality=95&sign=256352e3120de0e454d0a9410315ca7b&c_uniq_tag=7o_HNrMhBOugMto88vgwYYZbda4m1ZfOZolpkY4ITXo&type=album'
                },
                {
                  height: 604,
                  type: 'x',
                  width: 604,
                  url: 'https://sun9-50.userapi.com/impg/vfeufb2nDOQST1fScv9m0ZUngJe-py_VfbwK1g/mrI5D2hZ9vQ.jpg?size=604x604&quality=95&sign=d79577c52392c243fb03eac301659a5c&c_uniq_tag=9nGIfDa2dWwOzaVgCVPm9VPH4Ek82nixUvJ_Jf3RWRI&type=album'
                },
                {
                  height: 807,
                  type: 'y',
                  width: 807,
                  url: 'https://sun9-50.userapi.com/impg/vfeufb2nDOQST1fScv9m0ZUngJe-py_VfbwK1g/mrI5D2hZ9vQ.jpg?size=807x807&quality=95&sign=fd760ef25d7d478c594bdb22e1f0d5f8&c_uniq_tag=PZTMVA_QMYZjAu4ldY7m62e_HqcGUyQX0cjMYmHzcro&type=album'
                },
                {
                  height: 1280,
                  type: 'z',
                  width: 1280,
                  url: 'https://sun9-50.userapi.com/impg/vfeufb2nDOQST1fScv9m0ZUngJe-py_VfbwK1g/mrI5D2hZ9vQ.jpg?size=1280x1280&quality=95&sign=f1c8e771029079e6261233e230641fe0&c_uniq_tag=X2n1nRGaZdgTuhMRaAtb_JOIzURDw1AHz5ziWl_3zaA&type=album'
                },
                {
                  height: 1600,
                  type: 'w',
                  width: 1600,
                  url: 'https://sun9-50.userapi.com/impg/vfeufb2nDOQST1fScv9m0ZUngJe-py_VfbwK1g/mrI5D2hZ9vQ.jpg?size=1600x1600&quality=95&sign=29513a32068f3242ccea6ddf619e5c96&c_uniq_tag=ZLAGdp9xua-i8zleYIfTe-CgkIAXFi6jM0SufNS9kaQ&type=album'
                },
                {
                  height: 130,
                  type: 'o',
                  width: 130,
                  url: 'https://sun9-50.userapi.com/impg/vfeufb2nDOQST1fScv9m0ZUngJe-py_VfbwK1g/mrI5D2hZ9vQ.jpg?size=130x130&quality=95&sign=256352e3120de0e454d0a9410315ca7b&c_uniq_tag=7o_HNrMhBOugMto88vgwYYZbda4m1ZfOZolpkY4ITXo&type=album'
                },
                {
                  height: 200,
                  type: 'p',
                  width: 200,
                  url: 'https://sun9-50.userapi.com/impg/vfeufb2nDOQST1fScv9m0ZUngJe-py_VfbwK1g/mrI5D2hZ9vQ.jpg?size=200x200&quality=95&sign=8c049ea5d4cf984b883b1ac20547cdf2&c_uniq_tag=9_00ZsK7_2WRd-0qD_aAEWCuW-R6FraUk0LcPLCT-xM&type=album'
                },
                {
                  height: 320,
                  type: 'q',
                  width: 320,
                  url: 'https://sun9-50.userapi.com/impg/vfeufb2nDOQST1fScv9m0ZUngJe-py_VfbwK1g/mrI5D2hZ9vQ.jpg?size=320x320&quality=95&sign=6a4affffe54401211505ed68bf9dd6fa&c_uniq_tag=gbzld46g9VmXSkP_ih9d4nVGVMhfrrB0UGF8noM_zy8&type=album'
                },
                {
                  height: 510,
                  type: 'r',
                  width: 510,
                  url: 'https://sun9-50.userapi.com/impg/vfeufb2nDOQST1fScv9m0ZUngJe-py_VfbwK1g/mrI5D2hZ9vQ.jpg?size=510x510&quality=95&sign=7f291a04285389349b5737245b523a4a&c_uniq_tag=nOtpO6hAk-g3t6OXG4RGfsv0lwt4r4a7vkWGVNcrg7Q&type=album'
                }
              ],
              text: '',
              user_id: 100,
              web_view_token: 'b809bcac79ccdfec94',
              has_tags: false
            }
          },
          {
            type: 'photo',
            photo: {
              album_id: -7,
              date: 1713803493,
              id: 457239598,
              owner_id: -115468427,
              access_key: '54edf7d0f3b95c2f7f',
              sizes: [
                {
                  height: 75,
                  type: 's',
                  width: 65,
                  url: 'https://sun9-11.userapi.com/impg/TuG5x_o6yFXTciFjehfcUJ2VwVBInmpjla7ONQ/Y0NhvUpWB7I.jpg?size=65x75&quality=95&sign=4a1f8007e8dfac8f279ab16cec3224a2&c_uniq_tag=Jq2HYWZAhXY6EVcOACOKvKHAiddtO2CDCzPb5URQ3UE&type=album'
                },
                {
                  height: 130,
                  type: 'm',
                  width: 113,
                  url: 'https://sun9-11.userapi.com/impg/TuG5x_o6yFXTciFjehfcUJ2VwVBInmpjla7ONQ/Y0NhvUpWB7I.jpg?size=113x130&quality=95&sign=3f219528acaa69a99bff5ebf0d8da31c&c_uniq_tag=LYjDgkvk1dUxR2HNV69EPgtCtB5oeeS2tUY0bn_h_n4&type=album'
                },
                {
                  height: 604,
                  type: 'x',
                  width: 524,
                  url: 'https://sun9-11.userapi.com/impg/TuG5x_o6yFXTciFjehfcUJ2VwVBInmpjla7ONQ/Y0NhvUpWB7I.jpg?size=524x604&quality=95&sign=62931e0120b83b07adcb74f5cc029b75&c_uniq_tag=meYfFR49HRJgS9GDSs4xxAiU6YOudfwACQ3bNyL-e7Q&type=album'
                },
                {
                  height: 807,
                  type: 'y',
                  width: 700,
                  url: 'https://sun9-11.userapi.com/impg/TuG5x_o6yFXTciFjehfcUJ2VwVBInmpjla7ONQ/Y0NhvUpWB7I.jpg?size=700x807&quality=95&sign=56a3c51ca32a03d7a4ab5ba9e7468591&c_uniq_tag=FHNSOdq9yHo_EHHVuk3PT8fokg5tmvouf7BjJBnNCEg&type=album'
                },
                {
                  height: 1080,
                  type: 'z',
                  width: 937,
                  url: 'https://sun9-11.userapi.com/impg/TuG5x_o6yFXTciFjehfcUJ2VwVBInmpjla7ONQ/Y0NhvUpWB7I.jpg?size=937x1080&quality=95&sign=e47423425d88f4a33f19a55b2734c44f&c_uniq_tag=wUDECR3Hw8m-I9oRDV4XM8QYvvLEGmqtJzRaQR2yZr0&type=album'
                },
                {
                  height: 1600,
                  type: 'w',
                  width: 1388,
                  url: 'https://sun9-11.userapi.com/impg/TuG5x_o6yFXTciFjehfcUJ2VwVBInmpjla7ONQ/Y0NhvUpWB7I.jpg?size=1388x1600&quality=95&sign=8f2fdbc63501e6bddea918a3c317bdaa&c_uniq_tag=XYnQjCNbGVigX3jOv-V74cZbLv6uTXWgyqT5mNFqFqo&type=album'
                },
                {
                  height: 150,
                  type: 'o',
                  width: 130,
                  url: 'https://sun9-11.userapi.com/impg/TuG5x_o6yFXTciFjehfcUJ2VwVBInmpjla7ONQ/Y0NhvUpWB7I.jpg?size=130x150&quality=95&sign=f8737dc747a594ad892a392b9bf8a641&c_uniq_tag=VE772nIOWL-3k1R6HaqbBbWEa39ZBlfmbNm8tqAVTaQ&type=album'
                },
                {
                  height: 231,
                  type: 'p',
                  width: 200,
                  url: 'https://sun9-11.userapi.com/impg/TuG5x_o6yFXTciFjehfcUJ2VwVBInmpjla7ONQ/Y0NhvUpWB7I.jpg?size=200x231&quality=95&sign=5d61ea6230c70ea6e39e0372b4d4556d&c_uniq_tag=rQFcWqSZgRaXtE84X2h6dIABvBY788TMpeYiHRzSag0&type=album'
                },
                {
                  height: 369,
                  type: 'q',
                  width: 320,
                  url: 'https://sun9-11.userapi.com/impg/TuG5x_o6yFXTciFjehfcUJ2VwVBInmpjla7ONQ/Y0NhvUpWB7I.jpg?size=320x369&quality=95&sign=f1f91ac71bef8843b3ec9e1a7b5f9465&c_uniq_tag=Kbh3XQ6NQ7QIdyQd6ofxTtqdJr2UAStlu9QYIRAelyk&type=album'
                },
                {
                  height: 588,
                  type: 'r',
                  width: 510,
                  url: 'https://sun9-11.userapi.com/impg/TuG5x_o6yFXTciFjehfcUJ2VwVBInmpjla7ONQ/Y0NhvUpWB7I.jpg?size=510x588&quality=95&sign=553cd650e59ddabbc914858c343b9455&c_uniq_tag=2rBVgLV8nBEKTPY4GIZeJ9uNHG3zQ5w0t-kssU5zyf8&type=album'
                }
              ],
              text: '',
              user_id: 100,
              web_view_token: 'df3803231bfa5f3f69',
              has_tags: false
            }
          }
        ],
        date: 1713803401,
        edited: 1713803548,
        from_id: -115468427,
        id: 485,
        likes: {
          can_like: 1,
          count: 5,
          user_likes: 0,
          can_publish: 1,
          repost_disabled: false
        },
        owner_id: -115468427,
        post_source: {
          platform: 'android',
          type: 'api'
        },
        post_type: 'post',
        reposts: {
          count: 1,
          user_reposted: 0
        },
        text: 'Коррекция купероза лазером - это процедура, при которой специальный лазер используется для устранения красных сосудов на коже. Лазерная коррекция купероза осуществляется путем направленного воздействия на проблемные участки кожи, что позволяет разрушить и заклеить расширенные сосуды.\nПосле процедуры может наблюдаться небольшое покраснение кожи, отек и шелушение, которые проходят в течение нескольких дней. В целом, лазерная коррекция купероза считается относительно безопасной и эффективной процедурой, но перед ее проведением требуется консультация специалиста.',
        views: {
          count: 241
        }
      },
      {
        inner_type: 'wall_wallpost',
        donut: {
          is_donut: false
        },
        comments: {
          can_post: 1,
          count: 0,
          groups_can_post: true
        },
        marked_as_ads: 0,
        short_text_rate: 0.8,
        hash: '1mBZqZ6RSOUvaYkxPg',
        type: 'post',
        attachments: [
          {
            type: 'photo',
            photo: {
              album_id: -7,
              date: 1713256323,
              id: 457239587,
              owner_id: -115468427,
              access_key: '3d75abf34e3ccedf5a',
              post_id: 483,
              sizes: [
                {
                  height: 75,
                  type: 's',
                  width: 42,
                  url: 'https://sun9-58.userapi.com/impg/N7icZuVj7e2pPZpZUVKufUXm8MXFh89kgkZizQ/YL88y2TW6m0.jpg?size=42x75&quality=95&sign=848a3df7120253e71575943566981da7&c_uniq_tag=OsHKZSAuHqafFqWHrddRLaDfXwfUVFyb7-U4NqegrOo&type=album'
                },
                {
                  height: 130,
                  type: 'm',
                  width: 73,
                  url: 'https://sun9-58.userapi.com/impg/N7icZuVj7e2pPZpZUVKufUXm8MXFh89kgkZizQ/YL88y2TW6m0.jpg?size=73x130&quality=95&sign=2db1b2af30b0c67d7b35d0b9b919cd0b&c_uniq_tag=HfIPcpmNqc9Z0Z7aLZjj0Mr-z0CvfFGUrEAuDGA7KQs&type=album'
                },
                {
                  height: 604,
                  type: 'x',
                  width: 340,
                  url: 'https://sun9-58.userapi.com/impg/N7icZuVj7e2pPZpZUVKufUXm8MXFh89kgkZizQ/YL88y2TW6m0.jpg?size=340x604&quality=95&sign=775623b1e7003b59b4d0bfcecc579532&c_uniq_tag=RaPW1zKXlEMhNFta-fI9R6S8_kr_MwJlzc3acSD3xJ4&type=album'
                },
                {
                  height: 807,
                  type: 'y',
                  width: 454,
                  url: 'https://sun9-58.userapi.com/impg/N7icZuVj7e2pPZpZUVKufUXm8MXFh89kgkZizQ/YL88y2TW6m0.jpg?size=454x807&quality=95&sign=7c01ea4853d9569466bb73d4ea70bf96&c_uniq_tag=VYRN0GUY_ZUyeNdfBDmX8UUoJkKq-xEdBH5fGP7iZzs&type=album'
                },
                {
                  height: 1080,
                  type: 'z',
                  width: 607,
                  url: 'https://sun9-58.userapi.com/impg/N7icZuVj7e2pPZpZUVKufUXm8MXFh89kgkZizQ/YL88y2TW6m0.jpg?size=607x1080&quality=95&sign=0595f8736a5c7e127153e97d50a859f0&c_uniq_tag=O7anTb7bNJpP4vIq6TJrLFPH9hUGS2EG8lqkxXc4dls&type=album'
                },
                {
                  height: 2160,
                  type: 'w',
                  width: 1215,
                  url: 'https://sun9-58.userapi.com/impg/N7icZuVj7e2pPZpZUVKufUXm8MXFh89kgkZizQ/YL88y2TW6m0.jpg?size=1215x2160&quality=95&sign=5ca5250e87f14ea47100a2f2eccb2605&c_uniq_tag=nqBOGXgVr2NVy6udZf09j24zixiiK8dHfznGF8_eetA&type=album'
                },
                {
                  height: 231,
                  type: 'o',
                  width: 130,
                  url: 'https://sun9-58.userapi.com/impg/N7icZuVj7e2pPZpZUVKufUXm8MXFh89kgkZizQ/YL88y2TW6m0.jpg?size=130x231&quality=95&sign=2bcf1cf8ac6a7627b9f99b8e41dd6b0a&c_uniq_tag=OWQ-pkJDy1Ah7LmulC3AOeziKNQJUeKv_rV4lVo8nrA&type=album'
                },
                {
                  height: 356,
                  type: 'p',
                  width: 200,
                  url: 'https://sun9-58.userapi.com/impg/N7icZuVj7e2pPZpZUVKufUXm8MXFh89kgkZizQ/YL88y2TW6m0.jpg?size=200x356&quality=95&sign=5238c85cdacc6d99dd082279a0264618&c_uniq_tag=TCtie23XJbdps_BvL58jykg5ksnCJ50XlimRIotP8vA&type=album'
                },
                {
                  height: 569,
                  type: 'q',
                  width: 320,
                  url: 'https://sun9-58.userapi.com/impg/N7icZuVj7e2pPZpZUVKufUXm8MXFh89kgkZizQ/YL88y2TW6m0.jpg?size=320x569&quality=95&sign=bfda39571a7f605e9047fdaca18f9981&c_uniq_tag=P4oQPygtC6PE2oVfeWysQq-OqeVx2FYLXPdmhyths-M&type=album'
                },
                {
                  height: 900,
                  type: 'r',
                  width: 510,
                  url: 'https://sun9-58.userapi.com/impg/N7icZuVj7e2pPZpZUVKufUXm8MXFh89kgkZizQ/YL88y2TW6m0.jpg?size=510x900&quality=95&crop=0,0,1440,2541&sign=3579e6df75c515173ff0a655bd517c22&c_uniq_tag=UfRon4HPzWAtsTfQs_YQZb0WWMO261Be3rfueitcFuU&type=album'
                }
              ],
              text: '',
              user_id: 100,
              web_view_token: '1928d73491fd45a1b9',
              has_tags: false
            }
          }
        ],
        date: 1713256323,
        from_id: -115468427,
        id: 483,
        likes: {
          can_like: 1,
          count: 1,
          user_likes: 0,
          can_publish: 1,
          repost_disabled: false
        },
        owner_id: -115468427,
        post_source: {
          platform: 'android',
          type: 'api'
        },
        post_type: 'post',
        reposts: {
          count: 0,
          user_reposted: 0
        },
        text: '',
        views: {
          count: 100
        }
      },
      {
        inner_type: 'wall_wallpost',
        donut: {
          is_donut: false
        },
        comments: {
          can_post: 1,
          count: 0,
          groups_can_post: true
        },
        marked_as_ads: 0,
        short_text_rate: 0.8,
        hash: 'ReXmUeeJBLMzE7f9og',
        type: 'post',
        attachments: [
          {
            type: 'photo',
            photo: {
              album_id: -7,
              date: 1713156564,
              id: 457239586,
              owner_id: -115468427,
              access_key: 'b6f93eafc1be5d0f2f',
              post_id: 482,
              sizes: [
                {
                  height: 75,
                  type: 's',
                  width: 42,
                  url: 'https://sun9-52.userapi.com/impg/10Od5qZquwgKwDl31OUqxBnRZ8TIsdxmpcD9Vg/K6qBbwLHGTw.jpg?size=42x75&quality=95&sign=5fa3304d575a7db9d82f5ec93130087d&c_uniq_tag=yHJaHxW97b1ZKarheYZ5r6Ge_ZykRReAxP3u0-B2Ues&type=album'
                },
                {
                  height: 130,
                  type: 'm',
                  width: 73,
                  url: 'https://sun9-52.userapi.com/impg/10Od5qZquwgKwDl31OUqxBnRZ8TIsdxmpcD9Vg/K6qBbwLHGTw.jpg?size=73x130&quality=95&sign=51fa19d42be1ddb51040a3270a4bd567&c_uniq_tag=th0ouz567XtIt2cF1bQPzQYekQlQU7dxx1zFGZSR8DI&type=album'
                },
                {
                  height: 604,
                  type: 'x',
                  width: 340,
                  url: 'https://sun9-52.userapi.com/impg/10Od5qZquwgKwDl31OUqxBnRZ8TIsdxmpcD9Vg/K6qBbwLHGTw.jpg?size=340x604&quality=95&sign=1458dd03f11ee24babf4fee5726774f2&c_uniq_tag=Ao1uH5QOdmzcpjj4WHZIGHW7k7zq0Vcm-I4r25cHkME&type=album'
                },
                {
                  height: 807,
                  type: 'y',
                  width: 454,
                  url: 'https://sun9-52.userapi.com/impg/10Od5qZquwgKwDl31OUqxBnRZ8TIsdxmpcD9Vg/K6qBbwLHGTw.jpg?size=454x807&quality=95&sign=6b8413bb0fa58c6317642b5d70138309&c_uniq_tag=bUy0gag-L1NGkRTSKqdy_-ltM9wpgx1vNe7idBfCiOU&type=album'
                },
                {
                  height: 1080,
                  type: 'z',
                  width: 607,
                  url: 'https://sun9-52.userapi.com/impg/10Od5qZquwgKwDl31OUqxBnRZ8TIsdxmpcD9Vg/K6qBbwLHGTw.jpg?size=607x1080&quality=95&sign=faea2fbaef8692d514c423f6755b2049&c_uniq_tag=qalml49qi84n10H8ZAnWdXVRyfOpVcYG220VkvRzrR4&type=album'
                },
                {
                  height: 2160,
                  type: 'w',
                  width: 1215,
                  url: 'https://sun9-52.userapi.com/impg/10Od5qZquwgKwDl31OUqxBnRZ8TIsdxmpcD9Vg/K6qBbwLHGTw.jpg?size=1215x2160&quality=95&sign=330cd6d516e7630149a62201132f0571&c_uniq_tag=ZVqqlm8cqIRLJKtBweCOP8emBMEeXWqL3V_s6d-KQbQ&type=album'
                },
                {
                  height: 231,
                  type: 'o',
                  width: 130,
                  url: 'https://sun9-52.userapi.com/impg/10Od5qZquwgKwDl31OUqxBnRZ8TIsdxmpcD9Vg/K6qBbwLHGTw.jpg?size=130x231&quality=95&sign=3ee9c568a0ed90b21b298f11510e169e&c_uniq_tag=ZGWLoDFS6V1P65lEdj-n2kVPLOt4ETJ30AEHt14WBSI&type=album'
                },
                {
                  height: 356,
                  type: 'p',
                  width: 200,
                  url: 'https://sun9-52.userapi.com/impg/10Od5qZquwgKwDl31OUqxBnRZ8TIsdxmpcD9Vg/K6qBbwLHGTw.jpg?size=200x356&quality=95&sign=8a14a7328056e9d0c1ddc3fe68008182&c_uniq_tag=cr700fiHvTLh1yFlge5AV0b5bRUzEhjb2Gu2YPWqjYQ&type=album'
                },
                {
                  height: 569,
                  type: 'q',
                  width: 320,
                  url: 'https://sun9-52.userapi.com/impg/10Od5qZquwgKwDl31OUqxBnRZ8TIsdxmpcD9Vg/K6qBbwLHGTw.jpg?size=320x569&quality=95&sign=5cda2d61573531a4b237a5b13fa97cda&c_uniq_tag=S6_OqISGQ5ST56ohVW1ok_iHg8VugtVMQ6s9mHjv5QA&type=album'
                },
                {
                  height: 900,
                  type: 'r',
                  width: 510,
                  url: 'https://sun9-52.userapi.com/impg/10Od5qZquwgKwDl31OUqxBnRZ8TIsdxmpcD9Vg/K6qBbwLHGTw.jpg?size=510x900&quality=95&crop=0,0,1440,2541&sign=b9f3eebd1c62d22bf221a594d04362cf&c_uniq_tag=FMiF3n1_OjUrRjjHnlIk_LiRMoaLtOYKGMrE5IzM5T0&type=album'
                }
              ],
              text: '',
              user_id: 100,
              web_view_token: '34d435f148084e8bb4',
              has_tags: false
            }
          }
        ],
        date: 1713156564,
        from_id: -115468427,
        id: 482,
        likes: {
          can_like: 1,
          count: 2,
          user_likes: 0,
          can_publish: 1,
          repost_disabled: false
        },
        owner_id: -115468427,
        post_source: {
          platform: 'android',
          type: 'api'
        },
        post_type: 'post',
        reposts: {
          count: 1,
          user_reposted: 0
        },
        text: '',
        views: {
          count: 276
        }
      },
      {
        inner_type: 'wall_wallpost',
        donut: {
          is_donut: false
        },
        comments: {
          can_post: 1,
          count: 0,
          groups_can_post: true
        },
        marked_as_ads: 0,
        short_text_rate: 0.8,
        hash: '9IvnPVc-Sp1CoF6cbw',
        type: 'post',
        attachments: [
          {
            type: 'photo',
            photo: {
              album_id: -7,
              date: 1713065822,
              id: 457239585,
              owner_id: -115468427,
              access_key: '2de7675f0a6676272d',
              post_id: 481,
              sizes: [
                {
                  height: 75,
                  type: 's',
                  width: 42,
                  url: 'https://sun9-33.userapi.com/impg/JV9_HzCA7rLrMBe40XeuHZrkQHqKa50wrcZOQg/VqFVMFxmpsg.jpg?size=42x75&quality=95&sign=f4ae247b79f3c1945089135adc8a37a3&c_uniq_tag=ZYzb1OAq5b5_bfe-2ZxTcPiT1N0z06fT4XO4QQoqGZI&type=album'
                },
                {
                  height: 130,
                  type: 'm',
                  width: 73,
                  url: 'https://sun9-33.userapi.com/impg/JV9_HzCA7rLrMBe40XeuHZrkQHqKa50wrcZOQg/VqFVMFxmpsg.jpg?size=73x130&quality=95&sign=559132c5421d44b3d5d2d2ffff85d3f8&c_uniq_tag=G_Ece4Ypwiszd8Aj7id9zXnK-Vx6poSWzrPxM4g9ces&type=album'
                },
                {
                  height: 604,
                  type: 'x',
                  width: 340,
                  url: 'https://sun9-33.userapi.com/impg/JV9_HzCA7rLrMBe40XeuHZrkQHqKa50wrcZOQg/VqFVMFxmpsg.jpg?size=340x604&quality=95&sign=4922d298d04437abdddd090b83326ef6&c_uniq_tag=qSJFm9yV0J4_x53y5_sR1mbSxQWGr-UIEMrhYS8Rjos&type=album'
                },
                {
                  height: 807,
                  type: 'y',
                  width: 454,
                  url: 'https://sun9-33.userapi.com/impg/JV9_HzCA7rLrMBe40XeuHZrkQHqKa50wrcZOQg/VqFVMFxmpsg.jpg?size=454x807&quality=95&sign=ea80f30a7dff125916560733f92c607a&c_uniq_tag=xSYKceCXIE9GZXlIO4P8SOvMExZ3J49Avzhc9veDaeY&type=album'
                },
                {
                  height: 1080,
                  type: 'z',
                  width: 607,
                  url: 'https://sun9-33.userapi.com/impg/JV9_HzCA7rLrMBe40XeuHZrkQHqKa50wrcZOQg/VqFVMFxmpsg.jpg?size=607x1080&quality=95&sign=2e93dfcaa8a7ec45d1df8dc069f5b776&c_uniq_tag=ivIw7A6ABQhw5KviTd-PIkJ3mzF9XP4aHBXxQh1cDJU&type=album'
                },
                {
                  height: 2160,
                  type: 'w',
                  width: 1215,
                  url: 'https://sun9-33.userapi.com/impg/JV9_HzCA7rLrMBe40XeuHZrkQHqKa50wrcZOQg/VqFVMFxmpsg.jpg?size=1215x2160&quality=95&sign=4268657d4bcac4e5c652360e93c62525&c_uniq_tag=jff3bEEc2qPb9_cfyeuYpUwpRunAaZ8j14qgTnC0RLM&type=album'
                },
                {
                  height: 231,
                  type: 'o',
                  width: 130,
                  url: 'https://sun9-33.userapi.com/impg/JV9_HzCA7rLrMBe40XeuHZrkQHqKa50wrcZOQg/VqFVMFxmpsg.jpg?size=130x231&quality=95&sign=68d78369cf4b3c4a402331a52ad03399&c_uniq_tag=VhyOJPSDSmwx5k1zSJf7dRrCJ5y8oLEMPUrtdGoHD4Q&type=album'
                },
                {
                  height: 356,
                  type: 'p',
                  width: 200,
                  url: 'https://sun9-33.userapi.com/impg/JV9_HzCA7rLrMBe40XeuHZrkQHqKa50wrcZOQg/VqFVMFxmpsg.jpg?size=200x356&quality=95&sign=9b0ff2d7f1f33c4b191c71a565ef7da1&c_uniq_tag=zfMYx4hN_V6ffK1gWI2ZGNNwQWLxmT3KNsi6MYyW0-w&type=album'
                },
                {
                  height: 569,
                  type: 'q',
                  width: 320,
                  url: 'https://sun9-33.userapi.com/impg/JV9_HzCA7rLrMBe40XeuHZrkQHqKa50wrcZOQg/VqFVMFxmpsg.jpg?size=320x569&quality=95&sign=8dafea94b884676db5ff6a3509968c01&c_uniq_tag=e4vABcR7lrn1n_GJhuy-IDk-7s5pC7NfM1vLH-JThOI&type=album'
                },
                {
                  height: 900,
                  type: 'r',
                  width: 510,
                  url: 'https://sun9-33.userapi.com/impg/JV9_HzCA7rLrMBe40XeuHZrkQHqKa50wrcZOQg/VqFVMFxmpsg.jpg?size=510x900&quality=95&crop=0,0,1440,2541&sign=f99bd926855b1bb27c5d8efc4856eb73&c_uniq_tag=o3D-uw-qhTT0wrVqPfbCJvJhmf-uoHzgs936ndOM3Ao&type=album'
                }
              ],
              text: '',
              user_id: 100,
              web_view_token: '9444be141c4e55077a',
              has_tags: false
            }
          }
        ],
        date: 1713065822,
        from_id: -115468427,
        id: 481,
        likes: {
          can_like: 1,
          count: 6,
          user_likes: 0,
          can_publish: 1,
          repost_disabled: false
        },
        owner_id: -115468427,
        post_source: {
          platform: 'android',
          type: 'api'
        },
        post_type: 'post',
        reposts: {
          count: 0,
          user_reposted: 0
        },
        text: '',
        views: {
          count: 112
        }
      },
      {
        inner_type: 'wall_wallpost',
        donut: {
          is_donut: false
        },
        comments: {
          can_post: 1,
          count: 0,
          groups_can_post: true
        },
        marked_as_ads: 0,
        short_text_rate: 0.8,
        hash: 'jMLX1emEF4dOT8ZqgA',
        attachments: [
          {
            type: 'photo',
            photo: {
              album_id: -7,
              date: 1712848513,
              id: 457239584,
              owner_id: -115468427,
              access_key: '83bb7c5f3130536e67',
              sizes: [
                {
                  height: 42,
                  type: 's',
                  width: 75,
                  url: 'https://sun9-13.userapi.com/impg/nm8bxxDz5kOrrSk3F2SqqCOGCZmdTd9hKvKOfQ/j8EzvbORLfM.jpg?size=75x42&quality=95&sign=58530b29d389ca5e2584c2411c629629&c_uniq_tag=91VUYon4sUWzAmSXPvt7sqVGIsAjXFgaHAeCIZVDf-Y&type=album'
                },
                {
                  height: 73,
                  type: 'm',
                  width: 130,
                  url: 'https://sun9-13.userapi.com/impg/nm8bxxDz5kOrrSk3F2SqqCOGCZmdTd9hKvKOfQ/j8EzvbORLfM.jpg?size=130x73&quality=95&sign=ee5002f91c3409923923081628106c63&c_uniq_tag=dQT7MRnd9fcjQqr7msQydWCD0qwBJpMBykOlPvM4obc&type=album'
                },
                {
                  height: 340,
                  type: 'x',
                  width: 604,
                  url: 'https://sun9-13.userapi.com/impg/nm8bxxDz5kOrrSk3F2SqqCOGCZmdTd9hKvKOfQ/j8EzvbORLfM.jpg?size=604x340&quality=95&sign=33490a55d2e82d3020966b54cbbe9a7f&c_uniq_tag=by92Yh8ErmLWnMN1WnozwGYz14ZcNps8XZpc7qxMv0A&type=album'
                },
                {
                  height: 454,
                  type: 'y',
                  width: 807,
                  url: 'https://sun9-13.userapi.com/impg/nm8bxxDz5kOrrSk3F2SqqCOGCZmdTd9hKvKOfQ/j8EzvbORLfM.jpg?size=807x454&quality=95&sign=a9e864aeb14121354b16ed425025d591&c_uniq_tag=pIbKVa8ouWZQb6Sj7HiZLJmqzlhtJ0Y-pWW0CdPqtPY&type=album'
                },
                {
                  height: 720,
                  type: 'z',
                  width: 1280,
                  url: 'https://sun9-13.userapi.com/impg/nm8bxxDz5kOrrSk3F2SqqCOGCZmdTd9hKvKOfQ/j8EzvbORLfM.jpg?size=1280x720&quality=95&sign=5d0faeac944c285cad2923b72afb5e8d&c_uniq_tag=vosG2W6mzorRP0a0Z-KzZpjvjGperKCv4FMpwFv9MJw&type=album'
                },
                {
                  height: 1440,
                  type: 'w',
                  width: 2560,
                  url: 'https://sun9-13.userapi.com/impg/nm8bxxDz5kOrrSk3F2SqqCOGCZmdTd9hKvKOfQ/j8EzvbORLfM.jpg?size=2560x1440&quality=95&sign=ec5b3d7bad443061d48cbd2cc3aceded&c_uniq_tag=Y8qxGZJcdwHe57vvij7Gp9JLqkhmYr5hSYb_ViRxYD0&type=album'
                },
                {
                  height: 87,
                  type: 'o',
                  width: 130,
                  url: 'https://sun9-13.userapi.com/impg/nm8bxxDz5kOrrSk3F2SqqCOGCZmdTd9hKvKOfQ/j8EzvbORLfM.jpg?size=130x87&quality=95&crop=204,0,2152,1440&sign=b8b3cd625dfc06170f2245e239d934d0&c_uniq_tag=cOQTBlsgNasrXKuGzNEkFEjDIBnTvsbt1XR9sTsIah0&type=album'
                },
                {
                  height: 133,
                  type: 'p',
                  width: 200,
                  url: 'https://sun9-13.userapi.com/impg/nm8bxxDz5kOrrSk3F2SqqCOGCZmdTd9hKvKOfQ/j8EzvbORLfM.jpg?size=200x133&quality=95&crop=197,0,2165,1440&sign=f555eca992fef01c689d971fd749b52d&c_uniq_tag=wSAwnfa1d-I53UXjqLhJx0Vc236aZjQs_HGZXJTVIPc&type=album'
                },
                {
                  height: 213,
                  type: 'q',
                  width: 320,
                  url: 'https://sun9-13.userapi.com/impg/nm8bxxDz5kOrrSk3F2SqqCOGCZmdTd9hKvKOfQ/j8EzvbORLfM.jpg?size=320x213&quality=95&crop=198,0,2163,1440&sign=7d78e787c19298e5ba76f5fd721afc4d&c_uniq_tag=Bp3dvI9nAInnSOtfTn39RiaDgTzufAQHlJ01AP3PqCE&type=album'
                },
                {
                  height: 340,
                  type: 'r',
                  width: 510,
                  url: 'https://sun9-13.userapi.com/impg/nm8bxxDz5kOrrSk3F2SqqCOGCZmdTd9hKvKOfQ/j8EzvbORLfM.jpg?size=510x340&quality=95&crop=200,0,2160,1440&sign=f5b27ec78d32cb20d2af8d836ba7245d&c_uniq_tag=-5rBZQv3BFMoMVLzBAOCKh4nTaiL2qt5QjVZ-baYslo&type=album'
                }
              ],
              text: '',
              user_id: 100,
              web_view_token: '394e66180636e3977c',
              has_tags: false
            }
          }
        ],
        date: 1712848513,
        edited: 1712891578,
        from_id: -115468427,
        id: 480,
        likes: {
          can_like: 1,
          count: 6,
          user_likes: 0,
          can_publish: 1,
          repost_disabled: false
        },
        owner_id: -115468427,
        post_source: {
          platform: 'android',
          type: 'api'
        },
        post_type: 'post',
        reposts: {
          count: 1,
          user_reposted: 0
        },
        text: '❗️❗️❗️После татуажа  бровей пигмент может приобрести синеватый, рыжеватый  или зеленоватый оттенок из-за нескольких причин. \n\n￼ Это может быть вызвано использованием некачественных пигментов, неправильным нанесением, а также реакцией пигмента на УФ-излучение. \n🪄Но не отчаивайтесь! У нас есть магия, способная вернуть вашим бровям их естественную красоту и уверенность. Приглашаем вас на процедуру удаления некачественного татуажа, где наши опытные специалисты приведут ваши брови в порядок безопасно, без боли, без ран и шрамов, без ожогов и стресса. Позвольте себе вернуть свою неповторимую красоту и взглянуть на мир снова с уверенностью!\n📞📞📞Запись +79133851386',
        views: {
          count: 259
        }
      }
    ] as WallWallpostFull[],
    offset: 0,
    isLoading: false,
    hasMore: true,
    totalLoaded: 0,
    maxPosts: 50
  }),
  actions: {
    async loadPosts() {
      if (this.isLoading || !this.hasMore) return

      this.isLoading = true
      try {
        const count = 10
        const response = await fetch(`vkpost.php?offset=${this.offset}&count=${count}`)
        const data = await response.json()

        if (data.response.items.length > 0) {
          const isFirstLoad = this.posts.length === 10
          if (isFirstLoad) {
            this.posts.pop()
          }

          this.posts.push(...(data.response.items as WallWallpostFull[]))
          this.offset += data.response.items.length
          this.totalLoaded += data.response.items.length

          if (this.totalLoaded >= this.maxPosts) {
            this.hasMore = false
          }
        } else {
          this.hasMore = false
        }
      } catch (error) {
        console.error('Error loading VK posts:', error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
