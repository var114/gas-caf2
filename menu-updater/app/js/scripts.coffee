# Remove 300ms touch delay
# attachFastClick = require('fastclick')
# attachFastClick(document.body)

# Js script

window.R = React.DOM

foodListProps =
  title:
    className: "form-control"
    idMaker: true
    attr:
      placeholder: "Unique name"
  quantity:
    className: "form-control"
    attr:
      placeholder: "5 in 1 bag"
  value:
    className: "form-control"
    attr:
      placeholder: "19"
  ingredients:
    className: "tagsinput"

    # attr:
  # notForSale:
  #   attr:
  #     type: "checkbox"
  #     "data-toggle": "switch"

#https://luminous-fire-1310.firebaseio.com/products
ProductsURL = "https://glowing-fire-9751.firebaseio.com/products"
ProductsRef = new Firebase(ProductsURL)
# how to render product list. just as a list nothing else. 

ProductsApp = require('./FireList')

mountNode = document.getElementById('product-list')
component = ProductsApp { listProps: foodListProps, firebaseRef: ProductsRef }
React.renderComponent component, mountNode


