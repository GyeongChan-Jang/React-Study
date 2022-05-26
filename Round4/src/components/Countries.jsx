import React from 'react'

const Countries = () => {
  return (
    <div>
      {/* France */}
      <div>
        <h1>This is a France</h1>
        <div className="image-flag">
          <img
            className="flag"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
            alt=""
          />
        </div>
        <h1>If you want go France? </h1>
        <h2>then, click the image</h2>
        <div className="image-scenery">
          <img
            // onClick={() => navigate('fr-city')}
            src="https://previews.123rf.com/images/mlsj/mlsj1710/mlsj171000004/88178237-landscape-scenery-view-of-eiffel-tower-in-paris-france.jpg"
            alt=""
            className="scenery"
          />
        </div>
      </div>
      {/* United States */}
      <div>
        <h1>This is United States</h1>
        <div className="image-flag">
          <img
            className="flag"
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            alt=""
          />
        </div>
        <h1>If you want go United States? </h1>
        <h2>then, click the image</h2>
        <div className="image-scenery">
          <img src="https://wallpaperaccess.com/full/449975.jpg" alt="" className="scenery" />
        </div>
      </div>
      {/* United Kingdom */}
      <div>
        <h1>This is United Kingdom</h1>
        <div className="image-flag">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
            alt=""
            className="flag"
          />
        </div>
        <h1>If you want go United Kingdom? </h1>
        <h2>then, click the image</h2>
        <div className="image-scenery">
          <img
            src="https://media.cntraveler.com/photos/5717e7ce3658675c4f785fbc/16:9/w_2580,c_limit/uk-towns-Whitby-Abbey-cr-GettyImages-149606198.jpg"
            alt=""
            className="scenery"
          />
        </div>
      </div>
      {/* Indonesia */}
      <div>
        <h1>This is Indonesia</h1>
        <div className="image-flag">
          <img
            src="https://img5.goodfon.com/wallpaper/nbig/9/d9/indonesia-flag-of-indonesia-indonesia-flag-flag-country.jpg"
            alt=""
            className="flag"
          />
        </div>
        <h1>If you want go Indonesia? </h1>
        <h2>then, click the image</h2>
        <div className="image-scenery">
          <img
            src="https://s1.1zoom.me/big0/995/Indonesia_Sunrises_and_498144.jpg"
            alt=""
            className="scenery"
          />
        </div>
      </div>
      {/* Australia */}
      <div>
        <h1>This is Australia</h1>
        <div className="image-flag">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/800px-Flag_of_Australia_%28converted%29.svg.png?20211116034747"
            alt=""
            className="flag"
          />
        </div>
        <h1>If you want go Australia? </h1>
        <h2>then, click the image</h2>
        <div className="image-scenery">
          <img
            src="https://www.planetware.com/photos-large/AUS/australia-beautiful-places-sydney-harbour.jpg"
            alt=""
            className="scenery"
          />
        </div>
      </div>
      {/* South Korea */}
      <div>
        <h1>This is South Korea</h1>
        <div className="image-flag">
          <img
            src="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/02/flag_of_south_korea-svg_.png"
            alt=""
            className="flag"
          />
        </div>
        <h1>If you want go South Korea? </h1>
        <h2>then, click the image</h2>
        <div className="image-scenery">
          <img
            src="https://www.citieschangingdiabetes.com/network/seoul/_jcr_content/root/imagevideotext_copy.coreimg.jpeg/1605286730135/adobestock-306923135.jpeg"
            alt=""
            className="scenery"
          />
        </div>
      </div>
    </div>
  )
}

export default Countries
