import "./galleryItem.css";
import { Link } from "react-router";
const GalleryItem = ({ item }) => {
  return (
    <div
      className="galleryItem"
      // 动态计算元素在CSS Grid布局中应占据的行数
      // 1. 获取item.height（图片高度，单位可能是像素）
      // 2. 除以100得到一个比例值
      // 3. 使用Math.ceil()向上取整，确保有足够的空间显示
      // 4. 通过gridRowEnd:span设置元素跨越的行数
      // 例如:高度为320px的图片会占据4行(Math.ceil(320/100)=4)
      // 用于实现瀑布流布局，让不同高度的图片能够紧密排列
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <img src={item.media} alt={`Image ${item.id}`} />
      <Link to={`/pins/${item.id}`} className="overlay"></Link>
      <button className="saveButton">save</button>
      <div className="overlayIcons">
        <button>
          <img src="/plipli/share.svg" alt="" />
        </button>
        <button>
          <img src="/plipli/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
export default GalleryItem;
/*
显示图片时出现 "Image undefined" 问题

组件在显示图片时出现 "Image undefined" 问题。这是因为组件的属性解构有误。当前代码把整个 props 对象作为 item 参数，但实际应该解构它。

1.
---------------------------------------------------------------
import "./galleryItem.css";

const GalleryItem = ({ item }) => {
  return (
    <div className="galleryItem">
      <img src={item.media} alt={`Image ${item.id}`} />
    </div>
  );
};
export default GalleryItem;
---------------------------------------------------------------

2.
---------------------------------------------------------------
import "./galleryItem.css";

const GalleryItem = (props) => {
  return (
    <div className="galleryItem">
      <img src={props.item.media} alt={`Image ${props.item.id}`} />
    </div>
  );
};
export default GalleryItem;
---------------------------------------------------------------
*/
