import ApollosConfig from '@apollosproject/config';
import Svg, { Path } from 'react-native-svg';
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
  overrides: {},
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
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 19.997C0 31.0424 6.4298 39.9978 19.9994 39.9978H40V19.997C40 6.66229 31.0472 -6.10352e-05 19.9994 -6.10352e-05C8.9543 -6.10352e-05 0 8.95319 0 19.997ZM23.6488 11.859H11.6227L11.6304 12.2504V29.9849H17.8921V20.4726C17.8921 18.1642 19.1075 16.8292 21.1817 16.8292C22.2803 16.8292 23.2971 17.381 23.6875 18.1992C24.0392 18.8681 24.0812 19.2195 24.0812 21.0164V29.9849H30.3456V18.7107C30.3456 16.2824 29.9538 15.0705 28.7008 13.8143C27.4448 12.5268 25.7626 11.859 23.6488 11.859Z"
        fill={fill}
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
    showTags: true,
  },
  Watch: {
    showProfile: true,
  },
  Pray: {
    showProfile: true,
  },
  Connect: {
    showProfile: true,
  },
};

ApollosConfig.loadJs({ FRAGMENTS, THEME, ICONS, TABS });
