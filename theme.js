import ApollosConfig from '@apollosproject/config';
import Svg, { Path, Rect } from 'react-native-svg';
import FRAGMENTS from '@apollosproject/ui-fragments';
import { makeIcon } from '@apollosproject/ui-kit';

const THEME = {
  colors: { primary: '#1C683E', secondary: '#6BAC43', tertiary: '#2A4930' },
  typography: {
    sans: {
      regular: {
        default: 'Colfax-Regular',
        italic: 'Colfax-RegularItalic',
      },
      medium: {
        default: 'Colfax-Medium',
        italic: 'Colfax-MediumItalic',
      },
      bold: {
        default: 'Colfax-Bold',
        italic: 'Colfax-BoldItalic',
      },
      black: {
        default: 'Colfax-Black',
        italic: 'Colfax-BlackItalic',
      },
    },
    ui: {
      regular: 'Colfax-Medium',
    },
  },
  overrides: {
    'ui-connected.TagFilterConnected': {
      allTagsText: 'All',
    },
  },
};

const ICONS = {
  BrandIcon: makeIcon(({ size = 32, fill } = {}) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Rect x="8" y="10" width="25" height="22" fill="white" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 19.997C0 31.0424 6.4298 39.9978 19.9994 39.9978H40V19.997C40 6.66229 31.0472 -6.10352e-05 19.9994 -6.10352e-05C8.9543 -6.10352e-05 0 8.95319 0 19.997ZM23.6488 11.859H11.6227L11.6304 12.2504V29.9849H17.8921V20.4726C17.8921 18.1642 19.1075 16.8292 21.1817 16.8292C22.2803 16.8292 23.2971 17.381 23.6875 18.1992C24.0392 18.8681 24.0812 19.2195 24.0812 21.0164V29.9849H30.3456V18.7107C30.3456 16.2824 29.9538 15.0705 28.7008 13.8143C27.4448 12.5268 25.7626 11.859 23.6488 11.859Z"
        fill="#6BAC43"
      />
    </Svg>
  )),
  BrandLogo: makeIcon(({ size = 32, fill } = {}) => (
    <Svg
      width={(size / 40) * 204}
      height={size}
      viewBox="0 0 204 40"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Path
        d="M53.4231 28.3999H58.6716V20.5279L63.7238 28.3999H68.8251V11.5999H63.5767V19.4719L58.5244 11.5999H53.4231V28.3999Z"
        fill="#1C683E"
      />
      <Path
        d="M71.5298 28.3999H84.5284V24.0799H76.9009V22.0639H83.7681V17.7439H76.9009V15.9199H84.5039V11.5999H71.5298V28.3999Z"
        fill="#1C683E"
      />
      <Path
        d="M109.94 11.5999H104.372L102.852 20.9119L100.375 11.5999H95.1753L92.6983 20.9119L91.1777 11.5999H85.6104L89.6571 28.3999H95.0037L97.7751 18.0319L100.546 28.3999H105.893L109.94 11.5999Z"
        fill="#1C683E"
      />
      <Path
        d="M117.837 28.7359C122.252 28.7359 125.146 26.3359 125.146 23.0239C125.146 20.4799 123.797 18.9199 121.172 18.2479L116.733 17.0959C116.316 16.9759 116.096 16.7359 116.096 16.2799C116.096 15.5839 116.684 15.2479 117.69 15.2479C118.867 15.2479 119.308 15.7759 119.308 16.4719V16.8559H124.263V16.4239C124.263 13.2559 121.638 11.2639 117.714 11.2639C113.545 11.2639 110.872 13.1839 110.872 16.6159C110.872 19.6399 112.539 20.8879 115.237 21.5359L119.186 22.4959C119.652 22.6159 119.922 22.9519 119.922 23.4319C119.922 24.3199 119.039 24.7519 117.861 24.7519C116.709 24.7519 115.826 24.2239 115.826 23.2399V22.8799H110.725V23.3839C110.725 26.7199 113.594 28.7359 117.837 28.7359Z"
        fill="#1C683E"
      />
      <Path
        d="M127.119 28.3999H132.491V24.0799H134.894C139.186 24.0799 141.982 21.5599 141.982 17.7679C141.982 13.9759 139.088 11.5999 134.894 11.5999H127.119V28.3999ZM132.491 19.7599V15.9199H134.624C135.973 15.9199 136.611 16.7119 136.611 17.8159C136.611 18.9199 135.973 19.7599 134.624 19.7599H132.491Z"
        fill="#1C683E"
      />
      <Path
        d="M153.21 28.3999H159.464L156.055 23.0959C157.894 22.0639 158.998 20.2159 158.998 17.8159C158.998 14.1439 156.619 11.5999 152.253 11.5999H143.669V28.3999H149.041V23.9839H150.586L153.21 28.3999ZM149.041 19.8319V15.7999H151.64C152.94 15.7999 153.627 16.5919 153.627 17.8399C153.627 18.9919 152.916 19.8319 151.64 19.8319H149.041Z"
        fill="#1C683E"
      />
      <Path
        d="M161.274 28.3999H166.645V11.5999H161.274V28.3999Z"
        fill="#1C683E"
      />
      <Path
        d="M169.393 28.3999H174.641V20.5279L179.693 28.3999H184.795V11.5999H179.546V19.4719L174.494 11.5999H169.393V28.3999Z"
        fill="#1C683E"
      />
      <Path
        d="M202.95 17.5519C202.705 13.8559 199.738 11.2639 195.078 11.2639C190.295 11.2639 186.96 13.9519 186.96 18.8959V21.0799C186.96 25.7359 190.099 28.7359 195.127 28.7359C199.909 28.7359 203.122 25.8559 203.122 21.5839V19.0879H195.225V23.0479H197.972C197.702 23.9599 196.868 24.7279 195.298 24.7279C193.165 24.7279 192.331 23.3119 192.331 21.3439V18.7279C192.331 16.7839 193.214 15.6079 195.2 15.6079C196.844 15.6079 197.579 16.5439 197.849 17.5519H202.95Z"
        fill="#1C683E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 19.997C0 31.0424 6.4298 39.9978 19.9994 39.9978H40V19.997C40 6.66229 31.0472 -6.10352e-05 19.9994 -6.10352e-05C8.9543 -6.10352e-05 0 8.95319 0 19.997ZM23.6488 11.859H11.6227L11.6304 12.2504V29.9849H17.8921V20.4726C17.8921 18.1642 19.1075 16.8292 21.1817 16.8292C22.2803 16.8292 23.2971 17.381 23.6875 18.1992C24.0392 18.8681 24.0812 19.2195 24.0812 21.0164V29.9849H30.3456V18.7107C30.3456 16.2824 29.9538 15.0705 28.7008 13.8143C27.4448 12.5268 25.7626 11.859 23.6488 11.859Z"
        fill="#6BAC43"
      />
    </Svg>
  )),
};

const TABS = {
  Home: {
    showProfile: true,
    showLogo: true,
    showSearch: true,
    headerHideShadow: true,
    headerLargeTitle: false,
  },
  Read: {
    showProfile: true,
  },
  Explore: {
    showProfile: true,
  },
  Watch: {
    showProfile: true,
  },
  Connect: {
    showProfile: true,
  },
};

ApollosConfig.loadJs({ FRAGMENTS, THEME, ICONS, TABS });
