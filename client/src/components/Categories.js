import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {
  const dispatch = useDispatch()
  const directoryList = useSelector((state) => state.directory)
  const { sections } = directoryList;
  console.log('directory list: ', sections)

  // useEffect(() => {
  //   dispatch(listProducts(keyword, pageNumber))
  // }, [dispatch])

  return (
    <div className="categories-screen">
      <Link to='/' className="categories-screen-div" style={{backgroundImage: `url(${sections[0].imageUrl})`}}>
        <i className="fas fa-keyboard"></i>{sections[0].title}&nbsp;&nbsp;
      </Link>
      <Link to='/' className="categories-screen-div" style={{backgroundImage: `url(${sections[1].imageUrl})`}}>
        <i className="fas fa-camera"></i>{sections[1].title}&nbsp;&nbsp;
      </Link>
      <Link to='/' className="categories-screen-div" style={{backgroundImage: `url(${sections[2].imageUrl})`}}>
        <i className="fas fa-tv"></i>{sections[2].title}&nbsp;&nbsp;
      </Link>
      <Link to='/' className="categories-screen-div" style={{backgroundImage: `url(${sections[3].imageUrl})`}}>
        <i className="fas fa-headset"></i>{sections[3].title}&nbsp;&nbsp;
      </Link>
      <Link to='/' className="categories-screen-div" style={{backgroundImage: `url(${sections[4].imageUrl})`}}>
        <i className="fas fa-phone"></i>{sections[4].title}&nbsp;&nbsp;
      </Link>
      <Link to='/' className="categories-screen-div" style={{backgroundImage: `url(${sections[5].imageUrl})`}}>
        <i className="fas fa-tv"></i>{sections[5].title}&nbsp;&nbsp;
      </Link>
      <Link to='/' className="categories-screen-div" style={{backgroundImage: `url(${sections[6].imageUrl})`}}>
        <i className="far fa-clock"></i>{sections[6].title}&nbsp;&nbsp;
      </Link>
    </div>
  )
}

export default Categories
