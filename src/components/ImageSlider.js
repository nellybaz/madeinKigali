'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var _inheritsLoose = _interopDefault(require('@babel/runtime/helpers/inheritsLoose'));
var _assertThisInitialized = _interopDefault(require('@babel/runtime/helpers/assertThisInitialized'));
var _defineProperty = _interopDefault(require('@babel/runtime/helpers/defineProperty'));
var React = _interopDefault(require('react'));

var isValidNavStyle = function isValidNavStyle(prop) {
  return /[1-2]/.test(prop) && typeof prop === "number";
};


if (window.matchMedia("(max-width: 900px)")){
  var ImageSliderPropTypes = {
    propTypes: {
      // Required
      
      width: "90vw",
      height: "50vw",
      images: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired
      })).isRequired,
      // Optional
      style: PropTypes.objectOf(PropTypes.string),
      slideDuration: PropTypes.number,
      showNavs: PropTypes.bool,
      showBullets: PropTypes.bool,
      bgColor: PropTypes.string,
      useGPURender: PropTypes.bool,
      onClickNav: PropTypes.func,
      onClickBullets: PropTypes.func,
      onStartSlide: PropTypes.func,
      onCompleteSlide: PropTypes.func,
      // Optional, Navigation Arrow Style
      navStyle: function navStyle(props, propName, componentName) {
        if (!isValidNavStyle(props[propName])) {
          return new Error("Invalid prop " + propName + " supplied to " + componentName + ". Validation failed.");
        }
  
        return null;
      }
    },
    defaultTypes: {
      slideDuration: 0.5,
      showNavs: true,
      showBullets: true,
      bgColor: "#000000",
      useGPURender: true,
      navStyle: 1
    }
  };
}
else if(window.matchMedia("(min-width: 1600px)")){
  var ImageSliderPropTypes = {
    propTypes: {
      // Required
      
      width: "30vw",
      height: "15vw",
      images: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired
      })).isRequired,
      // Optional
      style: PropTypes.objectOf(PropTypes.string),
      slideDuration: PropTypes.number,
      showNavs: PropTypes.bool,
      showBullets: PropTypes.bool,
      bgColor: PropTypes.string,
      useGPURender: PropTypes.bool,
      onClickNav: PropTypes.func,
      onClickBullets: PropTypes.func,
      onStartSlide: PropTypes.func,
      onCompleteSlide: PropTypes.func,
      // Optional, Navigation Arrow Style
      navStyle: function navStyle(props, propName, componentName) {
        if (!isValidNavStyle(props[propName])) {
          return new Error("Invalid prop " + propName + " supplied to " + componentName + ". Validation failed.");
        }
  
        return null;
      }
    },
    defaultTypes: {
      slideDuration: 0.5,
      showNavs: true,
      showBullets: true,
      bgColor: "#000000",
      useGPURender: true,
      navStyle: 1
    }
  };
}
else{
  var ImageSliderPropTypes = {
    propTypes: {
      // Required
      
      width: "59vw",
      height: "30vw",
      images: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired
      })).isRequired,
      // Optional
      style: PropTypes.objectOf(PropTypes.string),
      slideDuration: PropTypes.number,
      showNavs: PropTypes.bool,
      showBullets: PropTypes.bool,
      bgColor: PropTypes.string,
      useGPURender: PropTypes.bool,
      onClickNav: PropTypes.func,
      onClickBullets: PropTypes.func,
      onStartSlide: PropTypes.func,
      onCompleteSlide: PropTypes.func,
      // Optional, Navigation Arrow Style
      navStyle: function navStyle(props, propName, componentName) {
        if (!isValidNavStyle(props[propName])) {
          return new Error("Invalid prop " + propName + " supplied to " + componentName + ". Validation failed.");
        }
  
        return null;
      }
    },
    defaultTypes: {
      slideDuration: 0.5,
      showNavs: true,
      showBullets: true,
      bgColor: "#000000",
      useGPURender: true,
      navStyle: 1
    }
  };
}



var ImageSliderPreLoader = function () {
  var loadedUrl = {};
  var loadQueue = [];
  var loaderCount = 3;
  var loaderPool = new Array(loaderCount).fill(0).map(function (e) {
    return new Image();
  });
  return {
    load: function load(url) {
      if (!url || loadedUrl[url]) {
        return;
      }

      if (loaderPool.length === 0) {
        loadQueue.push(url);
      } else {
        var imageLoader = loaderPool.shift();
        imageLoader.src = url;

        imageLoader.onload = function () {
          loadedUrl[url] = true;

          if (loadQueue.length > 0) {
            imageLoader.src = loadQueue.shift();
          } else {
            loaderPool.push(imageLoader);
          }
        };
      }
    }
  };
}();

/*
 * @description Assign multiple objects.
 * @param {...object} object - multiple objects.
 * @return {object} assigned object.
 */
var assignObjects = function assignObjects() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object.assign.apply(Object, [{}].concat(args));
};

var ImageNavArrowLeft1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAABQklEQVRYhe3VsUoDQRAG4H/B4yBeIIUoNgkWQipTiD5BLO19AckbpAkIKWKl5BV8AYuUQtL5EIYrLGySM50iKULGQq7Q290r7p9Y5G7LW/hYZv4ZCPTPBogSKZF/RHL/m0UTJvdWEQTBW19W02vsqCEI4lsRWY/vUVVCfoi1DJ/QVkJS4m6CKzQQKCB/CYXCZwk6YiPISLYWdMRWbjJi7ygq4mpaIuLOBQ3xRY+E+NNNQfIGCAMJ4oF/RhGQg/3kReRjedHFkX0MMl5yeNyZvot8Jg+nMFrILs7qN/Fc5Gs2OrExDMQgwrmP4XRXDsPKiZfhJT5lkizDnF1OhjuFHQx7n1gZ/ma0MBo7PsMoIC6GjNgZOuLPDQ35zbw+oqKCpEyjN3reu0StIOL5DCK00EYToR4CGISoIixYeM4pkS1FvgHo6Qgr01CvgAAAAABJRU5ErkJggg==";

var ImageNavArrowLeft2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAABg0lEQVRYhe3WvUoDQRAH8DlELkSNIipYaREbC1EPQYgRbQS1sfAFfAZBX0H86MQmYG0dNdaCYpHG2k6TiCRY5EMsROLtnUv2vN2LeP/VwptpZ/mxy+zuUJP05y8QERIhf4S4EbjYKCfJ+EbdzxEyK0fvtfwydWhDyCxkmna8Na5XGaMB4QSL+r01oAERieeXtS0aJgOMiETldeGQ5ikB3omPWKR+1mFAREUAETUBQ4IIECIneBUEURFARE3AkCAChAQTGKQNAUBGY8XjYCI8YmyOVx85cnMXX/ETAIRGZrcLVc485FI9ikMNhSQoNbFbrHHmKbvUhUYY09uOQXSXnzn1Mph74jCTAlP2MKgbz5g5m6nLGNzb5TJ7MgaGcGZqX2DOXAaISJlzxkCRFlPyMGBEyuQ4A0M+mbQlMhcuA0Qcps9mDkqNFmPF4WPqV+YqS0M6ZmGBObmldRrUM9U7zMxO5pI2aIzMsG+XKhgzbf+VSUboQhgTo27qDNXCuIyQf4p8AIChAHbSxD08AAAAAElFTkSuQmCC";

var ImageNavArrowRight1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAABQ0lEQVRYw+3WvWoCQRQF4LPgEhAWLESJpY15A4mNbdoUgkWKPIWF2NmKFiEWeYBsI+YhQl4gCQGfwEII/oGVXn9IBOPc2cIzTdyZduFj9t57ZiBwvxEjMfKvEaAWzNv9DDz9i+06DbkYhiKzj4ecxjCQVOX+eywy/dQYBpJEsdQazXSGgXhIoXzd1hkGEslQkKjTkBA7Q0NsDBHRGSqiMWTkkJn8MHTExDhANIaMmBk6Yq4NHdkznflCZPxeCJwgOybTe1qJyMszLl0h/ldDNsbjG26RdvO7/EF9S3RfcYc8fBeF/0O4aOEjgj+MBoIdK0e14AekodzsqDd2FPfSUpqWef2qc8F7SFhGj/Uksk4353EXESAMJDKjGEgQNpcrWwxSEJRvmqjqSctAEsjiCrnfjNLWqYX3NpAHOEQ4O0bOFFkD6w4BsXFPGt0AAAAASUVORK5CYII=";

var ImageNavArrowRight2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAABf0lEQVRYw+3Wv0vDQBQH8BeCpDqJQqS4COJvRxc3Bwf/AyE41bUOzo79IwRXHUpxdbH+BjcnNwdtTN3qIGosdDlzqdc77d0J9euieQdZcvAhee/eO2L0+4syJEP+MMIjefa9bF2Nk2PeQx87e0bIq+8w1owqs3oGgaQEj/hBzwAQf+TmkjEbg/gSvz84v+sw9W4GgeRo3ts4rUmmPPOZwSQ+ZU4UZn9aZSAI62YilQEhgjnWMjAkZea84pEsgagy1WaAiJmBIhrmnjNgpMPcSmZXYUCIYKpaBobYGCAimEPJhO3cQBHBXISy0rbHTPOmZyR5M1BcfXoWyFk1h0fIOVh4exRE+ZoCyoMRTjQbCrFOk+Rhq+srUaAJTiDPiZHAnXgLgepdVgLThbUEdp4YCORkNBK4GW8hULcVK4FBviEgyOLQa2gjEIhD+c1S3DITmN81SMvBXtwyERjEJZ9Wlkq0pidQ1eXScNLKR9UGoo+fIDwzrnq/AiOolSH/FHkHtYX8nGW/BYIAAAAASUVORK5CYII=";

var AltNavArrowLeft = "slide to left";
var AltNavArrowRight = "slide to right";
var ClassNameRoot = "image-slider";
var ClassNameNavs = ClassNameRoot + "-navs";
var ClassNameBullets = ClassNameRoot + "-bullets";
var data = {
  ClassNameRoot: ClassNameRoot,
  ClassNameNavs: ClassNameNavs,
  ClassNameBullets: ClassNameBullets,
  ImageNavArrowLeft1: ImageNavArrowLeft1,
  ImageNavArrowLeft2: ImageNavArrowLeft2,
  ImageNavArrowRight1: ImageNavArrowRight1,
  ImageNavArrowRight2: ImageNavArrowRight2,
  AltNavArrowLeft: AltNavArrowLeft,
  AltNavArrowRight: AltNavArrowRight
};

var basic = {
  display: "block",
  margin: "0",
  padding: "0",
  border: "0"
};
if (window.matchMedia("(max-width: 900px)")){
var basicRootContainer = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "90vw",
  height: "50vw",
};
var basicSlide = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "90vw",
  height: "50vw",
  backgroundSize: "cover"
};
var basicNav = {
  position: "absolute",
  top: "50%",
  cursor: "pointer",
  outline: "none",
  background: "none"
};
var bulletContainer = {
  position: "absolute",
  left: "50%",
  bottom: "15px"
};
var bulletSize = 5;
var bulletMargin = 3;
var basicBullet = {
  display: "inline-block",
  cursor: "pointer",
  outline: "none",
  background: "none",
  boxShadow: "1px 1px 1px 0px #1a1a1a",
  borderRadius: "50%",
  border: "1px solid #FFFFFF",
  width: bulletSize + "px",
  height: bulletSize + "px",
  marginLeft: bulletMargin + "px",
  marginRight: bulletMargin + "px"
};
}
else if(window.matchMedia("(min-width: 1600px)")){
  var basicRootContainer = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "30vw",
    height: "15vw",
  };
  var basicSlide = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "30vw",
    height: "15vw",
    backgroundSize: "cover"
  };
  var basicNav = {
    position: "absolute",
    top: "50%",
    cursor: "pointer",
    outline: "none",
    background: "none"
  };
  var bulletContainer = {
    position: "absolute",
    left: "50%",
    bottom: "15px"
  };
  var bulletSize = 5;
  var bulletMargin = 3;
  var basicBullet = {
    display: "inline-block",
    cursor: "pointer",
    outline: "none",
    background: "none",
    boxShadow: "1px 1px 1px 0px #1a1a1a",
    borderRadius: "50%",
    border: "1px solid #FFFFFF",
    width: bulletSize + "px",
    height: bulletSize + "px",
    marginLeft: bulletMargin + "px",
    marginRight: bulletMargin + "px"
  };
}
else{
  var basicRootContainer = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "59vw",
    height: "30vw",
  };
var basicSlide = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "59vw",
  height: "30vw",
  backgroundSize: "cover"
};
var basicNav = {
  position: "absolute",
  top: "50%",
  cursor: "pointer",
  outline: "none",
  background: "none"
};
var bulletContainer = {
  position: "absolute",
  left: "50%",
  bottom: "15px"
};
var bulletSize = 5;
var bulletMargin = 3;
var basicBullet = {
  display: "inline-block",
  cursor: "pointer",
  outline: "none",
  background: "none",
  boxShadow: "1px 1px 1px 0px #1a1a1a",
  borderRadius: "50%",
  border: "1px solid #FFFFFF",
  width: bulletSize + "px",
  height: bulletSize + "px",
  marginLeft: bulletMargin + "px",
  marginRight: bulletMargin + "px"
};
}


var styles = {
  ImageSlider: assignObjects(basic, basicRootContainer),
  ImageSlideCurrent: assignObjects(basicSlide, {
    overflow: "hidden"
  }),
  ImageSlideNext: assignObjects(basicSlide, {
    overflow: "hidden"
  }),
  NavLeft: assignObjects(basic, basicNav, {
    left: "10px",
    marginTop: "-25px"
  }),
  NavRight: assignObjects(basic, basicNav, {
    right: "10px",
    marginTop: "-25px"
  }),
  BulletContainer: function BulletContainer(bulletLength) {
    return assignObjects(basic, bulletContainer, {
      marginLeft: "-" + bulletLength * (bulletSize + bulletMargin * 2) / 2 + "px"
    });
  },
  BulletNormal: assignObjects(basic, basicBullet),
  BulletActive: assignObjects(basic, basicBullet, {
    background: "#FFFFFF"
  }),
  // methods
  getRootContainer: function getRootContainer(width, height, bgColor) {
    return assignObjects(basic, {
      overflow: "hidden",
      width: width,
      height: height,
      background: bgColor
    });
  },
  getSubContainer: function getSubContainer(width, height) {
    return assignObjects(basic, {
      position: "absolute",
      overflow: "hidden",
      width: width,
  height: height,
    });
  },
  getImageSlide: function getImageSlide(url, duration, x, isGpuRender) {
    return assignObjects(basicSlide, {
      overflow: "hidden",
      transition: duration + "s",
      backgroundImage: "url(" + url + ")",
      transform: isGpuRender ? "translate3d(" + x + "px, 0px, 0px)" : "translate(" + x + "px, 0px)"
    });
  }
};
var ImageSlider =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ImageSlider, _React$Component);

  function ImageSlider(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getImageUrl", function (idx) {
      return _this.props.images[idx] ? _this.props.images[idx].url : "";
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isCanSlide", function (idx) {
      return idx !== _this.state.idx && !_this.state.sliding;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "callPropsFunc", function (name) {
      if (_this.props[name]) {
        var _this$props;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_this$props = _this.props)[name].apply(_this$props, args);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickNav", function (toRight) {
      if (!_this.isCanSlide(-1)) {
        return;
      }

      _this.callPropsFunc("onClickNav", toRight);

      _this.slide(toRight ? _this.state.idx + 1 : _this.state.idx - 1);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickBullets", function (idx) {
      if (!_this.isCanSlide(idx)) {
        return;
      }

      _this.callPropsFunc("onClickBullets", idx);

      _this.slide(idx);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slide", function (idx) {
      var toNext = idx > _this.state.idx;

      var currentUrl = _this.getImageUrl(_this.state.idx);

      var nextUrl = _this.getImageUrl(idx);

      var nextReadyX = toNext ? _this.props.width : -_this.props.width;
      var currentOffetX = toNext ? -_this.props.width : _this.props.width; // ready to animation slides

      _this.setState({
        idx: idx,
        sliding: true,
        currentSlideStyle: styles.getImageSlide(currentUrl, 0, 0, _this.props.useGPURender),
        nextSlideStyle: styles.getImageSlide(nextUrl, 0, nextReadyX, _this.props.useGPURender)
      }, function () {
        // animation slides
        setTimeout(function () {
          _this.setState({
            currentSlideStyle: styles.getImageSlide(currentUrl, _this.props.slideDuration, currentOffetX, _this.props.useGPURender),
            nextSlideStyle: styles.getImageSlide(nextUrl, _this.props.slideDuration, 0, _this.props.useGPURender)
          });
        }, 50);
        ImageSliderPreLoader.load(_this.getImageUrl(idx + 2));
      });

      _this.callPropsFunc("onStartSlide", idx + 1, _this.props.images.length);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSlideEnd", function () {
      // console.log(`[ImageSlider] onSlideEnd idx:${this.state.idx}`);
      var currentUrl = _this.getImageUrl(_this.state.idx); // const nextUrl = this.getImageUrl(this.state.idx + 1);


      _this.setState({
        currentSlideStyle: styles.getImageSlide(currentUrl, 0, 0, _this.props.useGPURender),
        // nextSlideStyle: styles.getImageSlide(nextUrl, 0, this.props.width, this.props.useGPURender),
        sliding: false
      });

      _this.callPropsFunc("onCompleteSlide", _this.state.idx + 1, _this.props.images.length);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isRenderLeftNav", function (length, idx) {
      return length > 0 && idx > 0;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isRenderRightNav", function (length, idx) {
      return length > 0 && idx < length - 1;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderNav", function (length, idx) {
      return {
        left: _this.isRenderLeftNav(length, idx) ? React.createElement("button", {
          type: "button",
          style: styles.NavLeft,
          onClick: _this.onClickNav.bind(_assertThisInitialized(_assertThisInitialized(_this)), false)
        }, React.createElement("img", {
          src: data["ImageNavArrowLeft" + _this.props.navStyle],
          alt: data.AltNavArrowLeft
        })) : null,
        right: _this.isRenderRightNav(length, idx) ? React.createElement("button", {
          type: "button",
          style: styles.NavRight,
          onClick: _this.onClickNav.bind(_assertThisInitialized(_assertThisInitialized(_this)), true)
        }, React.createElement("img", {
          src: data["ImageNavArrowRight" + _this.props.navStyle],
          alt: data.AltNavArrowRight
        })) : null
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderBullets", function (length, idx) {
      if (length > 1) {
        var bulletList = Array.from({
          length: length
        }).map(function (e, i) {
          return React.createElement("button", {
            type: "button",
            className: data.ClassNameBullets,
            style: i === idx ? styles.BulletActive : styles.BulletNormal,
            key: "bullet-" + (i + 1),
            onClick: _this.onClickBullets.bind(_assertThisInitialized(_assertThisInitialized(_this)), i)
          });
        });
        return React.createElement("div", {
          style: styles.BulletContainer(length)
        }, bulletList);
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSlide", function (length) {
      return React.createElement("div", {
        style: styles.ImageSlider
      }, React.createElement("div", {
        style: _this.state.currentSlideStyle,
        onTransitionEnd: _this.onSlideEnd
      }), React.createElement("div", {
        style: _this.state.nextSlideStyle
      }));
    });

    _this.state = {
      idx: 0,
      sliding: false,
      currentSlideStyle: styles.getImageSlide(_this.getImageUrl(0), _this.props.slideDuration, 0),
      nextSlideStyle: styles.getImageSlide(_this.getImageUrl(1), _this.props.slideDuration, _this.props.width)
    };
    ImageSliderPreLoader.load(_this.getImageUrl(2));
    return _this;
  }

  var _proto = ImageSlider.prototype;

  _proto.render = function render() {
    var rootStyle = styles.getRootContainer(this.props.width, this.props.height, this.props.bgColor);
    var imageLength = this.props.images.length;
    var leftNav = this.props.showNavs ? this.renderNav(imageLength, this.state.idx).left : null;
    var rightNav = this.props.showNavs ? this.renderNav(imageLength, this.state.idx).right : null;
    var bullets = this.props.showBullets ? this.renderBullets(imageLength, this.state.idx) : null;
    return React.createElement("div", {
      className: data.ClassNameRoot,
      style: assignObjects(rootStyle, this.props.style)
    }, React.createElement("div", {
      style: styles.getSubContainer(this.props.width, this.props.height)
    }, this.renderSlide(imageLength), leftNav, rightNav, bullets));
  };

  return ImageSlider;
}(React.Component);

ImageSlider.propTypes = ImageSliderPropTypes.propTypes;
ImageSlider.defaultProps = ImageSliderPropTypes.defaultTypes;

module.exports = ImageSlider;
