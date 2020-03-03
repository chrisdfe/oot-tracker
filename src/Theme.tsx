import React, { ReactNode } from "react";

import { ThemeProvider } from "styled-components";

interface Props {
  children: ReactNode;
}

type RegionTheme = {
  background: {
    color: {
      primary: string;
      secondary: string;
    };
  };
  text: {
    color: {
      primary: string;
    };
  };
  border: {
    color: {
      primary: string;
      secondary: string;
    };
  };
};

const rawColors = {
  white: "#fff",
  // caper: "#d1e9b9",
  // caper: "#dce8c9",
  caper: "#e1e5da",
  // killarney: "#366a45"
  killarney: "#2f5e42",
  kellyGreen: "#22d07a"
};

const rawFonts = {
  merriweather: "Merriweather, sans-serif",
  openSans: "'Open Sans', sans-serif"
};

const defaultTheme: RegionTheme = {
  background: {
    color: {
      // primary: rawColors.caper,
      primary: "#fefdfc",
      secondary: rawColors.white
    }
  },
  text: {
    color: {
      // primary: rawColors.killarney
      primary: "#3a3c3e"
    }
  },
  border: {
    color: {
      // primary: rawColors.killarney,
      primary: "#3a3c3e",
      secondary: "#c0c3c6"
    }
  }
};

const zoraTheme: RegionTheme = {
  background: {
    color: {
      // primary: "white",
      primary: "#d7e5ed",
      secondary: "#08466e"
    }
  },
  text: {
    color: {
      primary: "#08466e"
      // secondary: "#d7e5ed",
    }
  },
  border: {
    color: {
      primary: "#08466e",
      secondary: rawColors.white
    }
  }
};

const kokiriTheme: RegionTheme = {
  background: {
    color: {
      primary: rawColors.caper,
      secondary: rawColors.white
    }
  },
  text: {
    color: {
      primary: rawColors.killarney
    }
  },
  border: {
    color: {
      primary: rawColors.killarney,
      secondary: rawColors.white
    }
  }
};

const goronTheme: RegionTheme = {
  background: {
    color: {
      primary: "#e5cccc",
      secondary: "#c13540"
    }
  },
  text: {
    color: {
      primary: "#c13540"
      // secondary: "#e5cccc"
    }
  },
  border: {
    color: {
      primary: "#c13540",
      secondary: rawColors.white
    }
  }
};

const theme = {
  rawColors,
  rawFonts,

  fonts: {
    heading: rawFonts.merriweather,
    body: rawFonts.openSans
  },

  ...defaultTheme,

  default: defaultTheme,
  zora: zoraTheme,
  kokiri: kokiriTheme,
  goron: goronTheme

  // interactive: {
  //   color: {
  //     primary: rawColors.kellyGreen
  //   }
  // }
};

const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
