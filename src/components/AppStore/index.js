import {Component} from 'react'

import AppItem from '../AppItem'
import TabItem from '../TabItem'

import './index.css'

const SEARCH_ICON_URL =
  'https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Facebook',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
    category: 'SOCIAL',
    url: 'https://www.facebook.com/',
  },
  {
    appId: 1,
    appName: 'Messenger',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png',
    category: 'SOCIAL',
    url: 'https://www.messeger.com/',
  },
  {
    appId: 2,
    appName: 'WhatsApp',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png',
    category: 'SOCIAL',
    url: 'https://www.whatsapp.com/',
  },
  {
    appId: 3,
    appName: 'Instagram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png',
    category: 'SOCIAL',
    url: 'https://www.instagram.com/mavy__8034_',
  },
  {
    appId: 4,
    appName: 'Snapchat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png',
    category: 'SOCIAL',
    url: 'https://www.snapchat.com/',
  },
  {
    appId: 5,
    appName: 'Twitter',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png',
    category: 'SOCIAL',
    url: 'https://www.twitter.com/mavy_8034',
  },
  {
    appId: 6,
    appName: 'Pinterest',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png',
    category: 'SOCIAL',
    url: 'https://www.pinterest.com/',
  },
  {
    appId: 7,
    appName: 'WeChat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png',
    category: 'SOCIAL',
    url: 'https://www.wechat.com/',
  },
  {
    appId: 8,
    appName: 'LinkedIn',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png',
    category: 'SOCIAL',
    url: 'https://www.linkedin.com/in/abhiram8034',
  },
  {
    appId: 9,
    appName: 'Telegram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png',
    category: 'SOCIAL',
    url: 'https://web.telegram.org/',
  },
  {
    appId: 10,
    appName: 'Subway Surfers',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&hl=en_IN&gl=US',
  },
  {
    appId: 11,
    appName: 'Crossy Road',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.yodo1.crossyroad&hl=en_IN&gl=US',
  },
  {
    appId: 12,
    appName: 'Super Chef',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.ministone.game.risingsuperchef2&hl=en_IN&gl=US',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.rovio.baba&hl=en_IN&gl=US',
  },
  {
    appId: 14,
    appName: 'Hill Climb 2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.fingersoft.hcr2&hl=en_IN&gl=US',
  },
  {
    appId: 15,
    appName: 'Temple Run',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.imangi.templerun&hl=en_IN&gl=US',
  },
  {
    appId: 16,
    appName: 'Dr. Driving',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.ansangha.drdriving&hl=en_IN&gl=US',
  },
  {
    appId: 17,
    appName: 'Smurfs Bubble',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.sonypicturestelevision.smurfslostvillage&hl=en_IN&gl=US',
  },
  {
    appId: 18,
    appName: 'Grade Learning',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.kevinbradford.games.firstgrade&hl=en_IN&gl=US',
  },
  {
    appId: 19,
    appName: 'My Talking Tom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.outfit7.mytalkingtomfree&hl=en_IN&gl=US',
  },
  {
    appId: 20,
    appName: 'Inshorts',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png',
    category: 'NEWS',
    url: 'https://www.inshorts.com/',
  },
  {
    appId: 21,
    appName: 'Way2News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
    category: 'NEWS',
    url: 'https://www.way2news.com/',
  },
  {
    appId: 22,
    appName: 'Google News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
    category: 'NEWS',
    url: 'https://news.google.co.in/',
  },
  {
    appId: 23,
    appName: 'Flipboard',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png',
    category: 'NEWS',
    url: 'https://flipboard.com/',
  },
  {
    appId: 24,
    appName: 'SmartNews',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png',
    category: 'NEWS',
    url: 'https://www.smartnews.com/en/',
  },
  {
    appId: 25,
    appName: 'BBC News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png',
    category: 'NEWS',
    url: 'https://www.bbc.com/news',
  },
  {
    appId: 26,
    appName: 'CNN News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png',
    category: 'NEWS',
    url: 'https://www.cnn.com/news',
  },
  {
    appId: 27,
    appName: 'Daily Wire',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png',
    category: 'NEWS',
    url: 'https://www.dailywire.com/',
  },
  {
    appId: 28,
    appName: 'AP News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png',
    category: 'NEWS',
    url: 'https://www.apnews.com/',
  },
  {
    appId: 29,
    appName: 'News Break',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png',
    category: 'NEWS',
    url: 'https://www.newsbreak.com/',
  },
  {
    appId: 30,
    appName: 'Zomato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png',
    category: 'FOOD',
    url: 'https://www.zomato.com/',
  },
  {
    appId: 31,
    appName: 'Swiggy',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png',
    category: 'FOOD',
    url: 'https://www.swiggy.com/',
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png',
    category: 'FOOD',
    url: 'https://www.dominos.co.in/',
  },
  {
    appId: 33,
    appName: 'All in One',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png',
    category: 'FOOD',
    url: 'error',
  },
  {
    appId: 34,
    appName: 'Instacart',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png',
    category: 'FOOD',
    url: 'https://www.instacart.com/',
  },
  {
    appId: 35,
    appName: 'Saucey',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
    category: 'FOOD',
    url: 'https://www.saucey.com/',
  },
  {
    appId: 36,
    appName: 'Waitr',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
    category: 'FOOD',
    url: 'https://waitrapp.com/',
  },
  {
    appId: 37,
    appName: 'Grubhub',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
    category: 'FOOD',
    url: 'https://www.grubhub.com/',
  },
  {
    appId: 38,
    appName: 'Mercato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png',
    category: 'FOOD',
    url: 'https://www.mercato.com/',
  },
  {
    appId: 39,
    appName: 'DOT',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png',
    category: 'FOOD',
    url: 'error',
  },
]

class AppStore extends Component {
  state = {
    searchInput: '',
    activeTabId: tabsList[0].tabId,
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getActiveTabApps = searchedApps => {
    const {activeTabId} = this.state
    const filteredApps = searchedApps.filter(
      eachSearchedApp => eachSearchedApp.category === activeTabId,
    )

    return filteredApps
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const searchResults = appsList.filter(eachApp =>
      eachApp.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  render() {
    const {searchInput, activeTabId} = this.state
    const searchResults = this.getSearchResults()
    const filteredApps = this.getActiveTabApps(searchResults)

    return (
      <div className="app-container">
        <div className="app-store">
          <h1 className="heading">App Store</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src={SEARCH_ICON_URL}
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="tabs-list">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                tabDetails={eachTab}
                setActiveTabId={this.setActiveTabId}
                isActive={activeTabId === eachTab.tabId}
              />
            ))}
          </ul>
          <ul className="apps-list">
            {filteredApps.map(eachApp => (
              <AppItem key={eachApp.appId} appDetails={eachApp} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default AppStore
