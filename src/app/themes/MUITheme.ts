"use client"
import { colors } from '@mui/material';
import { createTheme,ThemeOptions } from '@mui/material/styles';

import { appColors } from '@/constants/colors';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: appColors.primary,
    },
    secondary: {
      main: appColors.secondary,
    },
    divider: appColors.gray,
  },
  typography: {
    h1: {
      fontSize: '4.8rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '2.8rem',
      fontWeight: 400,
      lineHeight: 1.03,
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.3rem',
    },
    h6: {
      fontSize: '1.1rem',
    },
    subtitle1: {
      fontSize: '0.9rem',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '0.8rem',
    },
    button: {
      fontSize: '0.8rem',
    },
    overline: {
      fontSize: '0.7rem',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
};

const MainSpacing=4
export const  theme = createTheme({
    spacing: MainSpacing,
    palette: {
        mode: 'light',
        background: {
            default: "hsl(0, 0%, 100%)",
        },
        primary: {
            main: "#5E019A"
        },
        secondary: {
            main: "#f50057"
        },
        info: {
            main: appColors.info
        },
        error: {
            main: colors.red[500]
        },
    },
    shape: {
        borderRadius: 5
    },
    components: {
        MuiSwitch: {
            // styleOverrides: {
            //     switchBase: {
            //         color: "#E60060",
            //         "&.Mui-checked": {
            //             color: "green"
            //         }
            //     },
            //     track: {
            //         backgroundColor: "green"
            //     }
            // },
        },
        MuiCard: {
            defaultProps: {
                // disableElevation: false
            },
            styleOverrides: {
                root: {
                    // borderRadius: 8
                }
            }
        },
        // MuiCardContent: {
        //     styleOverrides: {
        //         root: {
        //             padding: 10
        //         }
        //     }
        // },
        MuiCardActions: {
            defaultProps: {
                // disableSpacing: true
            },
            styleOverrides: {
                root: {
                    padding: MainSpacing
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                // disableSpacing: true

            },
            styleOverrides: {
                root: {
                    padding: MainSpacing
                }
            }
        },
        MuiListItemButton: {
            defaultProps: {
                dense: true,
                disableGutters: false,
            },
            styleOverrides: {
                root: {
                    // padding: 0,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginRight: 10,
                    // paddingLeft: 5,
                    marginBottom: 5
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    border: 0
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    // borderRadius: 0,
                    // "&:hover": {
                    //     backgroundColor: 'yellow'
                    // }
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                // square: true,
                // elevation: 5,
                variant: 'outlined'
            },
            styleOverrides: {
                root: {
                    // borderRadius: 8
                }
            }
        }
    },
    
    mixins: {
        toolbar: {
            minHeight: 50
        }
    }
    // ... (rest of your theme configuration)
});