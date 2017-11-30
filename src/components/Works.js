import React, { Component } from 'react';

const s3Directory = './../images/s3-clients/';
function S3Wrapper (image)
{
	return s3Directory + image;
}

function WorkSites(props) {
  const s3Sites = (
    <div className="s3-sites">
      {props.posts.map((post) =>
        <a className="one-site s3-{post.id}" href={post.url} target="_blank">
        	<img className="bg-img" src={post.bg} /> 
        	<img className="logo" src={post.logo} />
        </a>
      )}
    </div>
  );
  return (
    <div className="container-fluid" id="works">
		<h2>Works</h2>
      	<p>The following are websites Cathy developed using Foundation framework, HTML, SASS, JavaScript, jQuery, WordPress, and PHP.</p>
      	{s3Sites}
    </div>
  );
}

const posts = [
  { id: 1,
    bg: require('./../images/s3-clients/s3-1.jpg'), 
  	logo: require('./../images/s3-clients/logos/logo-dino.png'), 
  	url: 'https://www.dinomd.com'
  },
  { bg: require('./../images/s3-clients/s3-2.jpg'),
    logo: require('./../images/s3-clients/logos/logo-newfaceny.png'),
    url: 'https://www.newfaceny.com/'
  },
  { bg: require('./../images/s3-clients/s3-3.jpg'),
    logo: require('./../images/s3-clients/logos/logo-theroseclinic.png'),
  	url: 'https://www.theroseclinic.com/'
  },
  { bg: require('./../images/s3-clients/s3-4.jpg'),
    logo: require('./../images/s3-clients/logos/logo-christopherchang.png'),
  	url: 'https://www.drchristopherchang.com/'
  },
  { bg: require('./../images/s3-clients/s3-5.jpg'),
    logo: require('./../images/s3-clients/logos/logo-deltaquality.png'),
  	url: 'https://www.deltaqualityelectric.com/'
  },
  { bg: require('./../images/s3-clients/s3-6.jpg'),
    logo: require('./../images/s3-clients/logos/logo-benjamineye.png'),
  	url: 'https://www.benjamineye.com'
  },
  { bg: require('./../images/s3-clients/s3-7.jpg'),
    logo: require('./../images/s3-clients/logos/logo-progressivespine.png'),
  	url: 'https://www.newjerseyspinesurgeon.com'
  },
  { bg: require('./../images/s3-clients/s3-8.jpg'),
    logo: require('./../images/s3-clients/logos/logo-marcmalek.png'),
  	url: 'https://www.marcmalekmd.com'
  },
  { bg: require('./../images/s3-clients/s3-9.jpg'),
    logo: require('./../images/s3-clients/logos/logo-refreshed.png'),
  	url: 'https://www.lookrefreshed.com/'
  },
  { bg: require('./../images/s3-clients/s3-10.jpg'),
    logo: require('./../images/s3-clients/logos/logo-waring-vision.png'),
  	url: 'https://www.waringvision.com/'
  },
  { bg: require('./../images/s3-clients/s3-11.jpg'),
    logo: require('./../images/s3-clients/logos/logo-hoefflin.png'),
  	url: 'http://www.hoefflinplasticsurgery.com/'
  },
  { bg: require('./../images/s3-clients/s3-12.jpg'),
    logo: require('./../images/s3-clients/logos/logo-altair.png'),
  	url: 'https://www.altairinstruments.com/'
  }
];

class Works extends Component {
	render() {
		return (
    	<WorkSites posts={posts} />
    	);
	}
}

export default Works;