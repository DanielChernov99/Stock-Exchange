import StockModel from "./models/stock-model.js"
import Renderer from "./view/search-view.js"
import SearchController from "./controllers/search-controller.js"

const model = StockModel()
const renderer = Renderer()
const controller = SearchController(model, renderer)

controller.init()