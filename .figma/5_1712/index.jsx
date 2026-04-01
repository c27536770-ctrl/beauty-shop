import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.mobileDashboard}>
      <div className={styles.mobileLogoLeftThreeI}>
        <div className={styles.logo}>
          <img
            src="../image/mnflnc7e-x0ms5sb.svg"
            className={styles.iconContainer}
          />
          <p className={styles.webbyFrames}>WebbyFrames</p>
        </div>
        <div className={styles.buttonsGroup}>
          <div className={styles.button}>
            <img
              src="../image/mnflnc7e-01cbe1k.svg"
              className={styles.iconJamIconsOutlineL}
            />
            <div className={styles.badge}>
              <p className={styles.text}>9</p>
            </div>
          </div>
          <div className={styles.button2}>
            <img
              src="../image/mnflnc7e-05lnhes.svg"
              className={styles.iconJamIconsOutlineL}
            />
          </div>
          <div className={styles.userThumb}>
            <img
              src="../image/mnflnc7e-tb6f33d.svg"
              className={styles.iconJamIconsOutlineL}
            />
          </div>
        </div>
      </div>
      <div className={styles.pageContent}>
        <p className={styles.secondaryHeadline}>Dashboard</p>
        <div className={styles.dashboardTabs}>
          <div className={styles.tabs}>
            <div className={styles.textContainer}>
              <p className={styles.tabText}>Overview</p>
            </div>
            <div className={styles.textContainer2}>
              <p className={styles.tabText2}>Tasks</p>
              <div className={styles.badge2}>
                <p className={styles.text}>7</p>
              </div>
            </div>
            <div className={styles.textContainer2}>
              <p className={styles.tabText2}>Documents</p>
              <div className={styles.badge2}>
                <p className={styles.text}>2</p>
              </div>
            </div>
            <div className={styles.textContainer2}>
              <p className={styles.tabText2}>Team</p>
              <div className={styles.badge2}>
                <p className={styles.text}>99+</p>
              </div>
            </div>
            <p className={styles.tabText3}>Reports</p>
            <p className={styles.tabText4}>Admin</p>
            <img
              src="../image/mnflnc7e-kpzucqw.svg"
              className={styles.iconJamIconsOutlineL}
            />
          </div>
          <div className={styles.fields}>
            <div className={styles.field}>
              <p className={styles.text2}>Start date</p>
              <img
                src="../image/mnflnc7e-4h5desk.svg"
                className={styles.iconJamIconsOutlineL}
              />
            </div>
            <div className={styles.iconContainer2}>
              <img
                src="../image/mnflnc7e-mnrtci9.svg"
                className={styles.iconJamIconsOutlineL}
              />
            </div>
            <div className={styles.field}>
              <p className={styles.text2}>End date</p>
              <img
                src="../image/mnflnc7e-4h5desk.svg"
                className={styles.iconJamIconsOutlineL}
              />
            </div>
          </div>
        </div>
        <div className={styles.text4}>
          <p className={styles.descriptionTop}>Users Total</p>
          <div className={styles.titleContainer}>
            <p className={styles.title}>11.8M</p>
            <div className={styles.badge3}>
              <p className={styles.text3}>+2,5%</p>
            </div>
          </div>
        </div>
        <div className={styles.text6}>
          <p className={styles.descriptionTop}>New Users</p>
          <div className={styles.titleContainer2}>
            <p className={styles.title}>8.236K</p>
            <div className={styles.badge4}>
              <p className={styles.text5}>-1,2%</p>
            </div>
          </div>
        </div>
        <div className={styles.text4}>
          <p className={styles.descriptionTop}>Active Users</p>
          <div className={styles.titleContainer}>
            <p className={styles.title}>2.352M</p>
            <div className={styles.badge3}>
              <p className={styles.text3}>+11%</p>
            </div>
          </div>
        </div>
        <div className={styles.text4}>
          <p className={styles.descriptionTop}>New Users</p>
          <div className={styles.titleContainer}>
            <p className={styles.title}>8K</p>
            <div className={styles.badge3}>
              <p className={styles.text3}>+5,2%</p>
            </div>
          </div>
        </div>
        <div className={styles.dashboardSection}>
          <div className={styles.content}>
            <p className={styles.descriptionTop2}>Target</p>
            <div className={styles.hints}>
              <div className={styles.listItemWith}>
                <div className={styles.iconJamIconsFilledCi}>
                  <div className={styles.vector} />
                </div>
                <p className={styles.descriptionTop}>Achieved</p>
              </div>
              <div className={styles.listItemWith2}>
                <div className={styles.iconJamIconsFilledCi2}>
                  <div className={styles.vector2} />
                </div>
                <p className={styles.descriptionTop}>&nbsp;Remaining</p>
              </div>
            </div>
          </div>
          <div className={styles.chart}>
            <img src="../image/mnflnc7e-jxeet84.svg" className={styles.subtract} />
            <img src="../image/mnflnc7e-wouhqd7.svg" className={styles.subtract2} />
            <p className={styles.a67}>67%</p>
          </div>
        </div>
        <div className={styles.dashboardSection2}>
          <div className={styles.content2}>
            <p className={styles.descriptionTop2}>Most Active Account Types</p>
            <div className={styles.hints2}>
              <div className={styles.listItemWith}>
                <div className={styles.iconJamIconsFilledCi}>
                  <div className={styles.vector} />
                </div>
                <p className={styles.descriptionTop}>Very Active</p>
              </div>
              <div className={styles.listItemWith2}>
                <div className={styles.iconJamIconsFilledCi2}>
                  <div className={styles.vector2} />
                </div>
                <p className={styles.descriptionTop}>&nbsp;Inactive</p>
              </div>
            </div>
          </div>
          <div className={styles.chartContainer}>
            <img src="../image/mnflnc7e-7n86tb0.svg" className={styles.chart2} />
          </div>
        </div>
        <div className={styles.dashboardSection3}>
          <div className={styles.content2}>
            <p className={styles.descriptionTop2}>Active Countries</p>
            <div className={styles.hints2}>
              <div className={styles.listItemWith}>
                <div className={styles.iconJamIconsFilledCi}>
                  <div className={styles.vector} />
                </div>
                <p className={styles.descriptionTop}>Very Active</p>
              </div>
              <div className={styles.listItemWith2}>
                <div className={styles.iconJamIconsFilledCi2}>
                  <div className={styles.vector2} />
                </div>
                <p className={styles.descriptionTop}>&nbsp;Inactive</p>
              </div>
            </div>
          </div>
          <img src="../image/mnflnc7e-14prs4h.svg" className={styles.chart3} />
        </div>
        <div className={styles.dashboardSection4}>
          <p className={styles.descriptionTop3}>Users by Country</p>
          <div className={styles.listRow}>
            <div className={styles.listItemWith3}>
              <img
                src="../image/mnflnc7e-0mtdygs.svg"
                className={styles.iconFlagIconSet43Us}
              />
              <p className={styles.text7}>United States</p>
            </div>
            <div className={styles.right}>
              <p className={styles.text8}>27.5%</p>
              <p className={styles.text9}>4.5M</p>
            </div>
          </div>
          <div className={styles.listRow}>
            <div className={styles.listItemWith3}>
              <img
                src="../image/mnflnc7e-qzr8tal.svg"
                className={styles.iconFlagIconSet43Us}
              />
              <p className={styles.text7}>Australia</p>
            </div>
            <div className={styles.right}>
              <p className={styles.text8}>11.2%</p>
              <p className={styles.text9}>2.3M</p>
            </div>
          </div>
          <div className={styles.listRow}>
            <div className={styles.listItemWith3}>
              <img
                src="../image/mnflnc7e-iu1jbi8.svg"
                className={styles.iconFlagIconSet43Us}
              />
              <p className={styles.text7}>China</p>
            </div>
            <div className={styles.right}>
              <p className={styles.text8}>9.4%</p>
              <p className={styles.text9}>2M</p>
            </div>
          </div>
          <div className={styles.listRow2}>
            <div className={styles.listItemWith4}>
              <div className={styles.iconFlagIconSet43De}>
                <div className={styles.vector3} />
                <div className={styles.vector4} />
                <div className={styles.vector5} />
              </div>
              <p className={styles.text7}>Germany</p>
            </div>
            <div className={styles.right}>
              <p className={styles.text8}>8%</p>
              <p className={styles.text9}>1.7M</p>
            </div>
          </div>
          <div className={styles.listRow3}>
            <div className={styles.listItemWith5}>
              <div className={styles.group}>
                <div className={styles.vector6} />
                <div className={styles.autoWrapper}>
                  <div className={styles.vector7} />
                  <div className={styles.vector8} />
                </div>
              </div>
              <p className={styles.text7}>Romania</p>
            </div>
            <div className={styles.right}>
              <p className={styles.text8}>7.9%</p>
              <p className={styles.text9}>1.6M</p>
            </div>
          </div>
          <div className={styles.listRow4}>
            <div className={styles.listItemWith6}>
              <div className={styles.iconFlagIconSet43Jp}>
                <div className={styles.vector10}>
                  <div className={styles.vector9} />
                </div>
              </div>
              <p className={styles.text7}>Japan</p>
            </div>
            <div className={styles.right}>
              <p className={styles.text8}>6.1%</p>
              <p className={styles.text9}>1.2M</p>
            </div>
          </div>
          <div className={styles.listRow5}>
            <div className={styles.listItemWith7}>
              <div className={styles.vector13}>
                <div className={styles.vector12}>
                  <div className={styles.vector11} />
                </div>
              </div>
              <p className={styles.text7}>Netherlands</p>
            </div>
            <div className={styles.right}>
              <p className={styles.text8}>5.9%</p>
              <p className={styles.text9}>1M</p>
            </div>
          </div>
        </div>
        <div className={styles.dashboardSection5}>
          <p className={styles.descriptionTop3}>Top 5 Best Selling Users</p>
          <div className={styles.content3}>
            <img src="../image/mnflnc7e-ilggb1t.svg" className={styles.chart2} />
            <div className={styles.right4}>
              <div className={styles.listRow6}>
                <div className={styles.listItemWith8}>
                  <div className={styles.iconJamIconsFilledCi}>
                    <div className={styles.vector} />
                  </div>
                  <p className={styles.text7}>User Name</p>
                </div>
                <div className={styles.right2}>
                  <p className={styles.text9}>$1.2M</p>
                  <div className={styles.badge5}>
                    <p className={styles.text3}>+8,2%</p>
                  </div>
                </div>
              </div>
              <div className={styles.listRow7}>
                <div className={styles.listItemWith9}>
                  <div className={styles.iconJamIconsFilledCi3}>
                    <div className={styles.vector14} />
                  </div>
                  <p className={styles.text7}>User Name</p>
                </div>
                <div className={styles.right2}>
                  <p className={styles.text9}>$800K</p>
                  <div className={styles.badge5}>
                    <p className={styles.text3}>+7%</p>
                  </div>
                </div>
              </div>
              <div className={styles.listRow8}>
                <div className={styles.listItemWith10}>
                  <div className={styles.iconJamIconsFilledCi4}>
                    <div className={styles.vector15} />
                  </div>
                  <p className={styles.text7}>User Name</p>
                </div>
                <div className={styles.right2}>
                  <p className={styles.text9}>$645K</p>
                  <div className={styles.badge5}>
                    <p className={styles.text3}>+2,5%</p>
                  </div>
                </div>
              </div>
              <div className={styles.listRow9}>
                <div className={styles.listItemWith11}>
                  <div className={styles.iconJamIconsFilledCi5}>
                    <div className={styles.vector16} />
                  </div>
                  <p className={styles.text7}>User Name</p>
                </div>
                <div className={styles.right3}>
                  <p className={styles.text9}>$590K</p>
                  <div className={styles.badge6}>
                    <p className={styles.text5}>-6,5%</p>
                  </div>
                </div>
              </div>
              <div className={styles.listRow10}>
                <div className={styles.listItemWith12}>
                  <div className={styles.iconJamIconsFilledCi2}>
                    <div className={styles.vector2} />
                  </div>
                  <p className={styles.text7}>User Name</p>
                </div>
                <div className={styles.right2}>
                  <p className={styles.text9}>$342K</p>
                  <div className={styles.badge5}>
                    <p className={styles.text3}>+1,7%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileLogoNoneIconsO}>
        <div className={styles.menuItem2}>
          <img
            src="../image/mnflnc7e-0wn1yzf.svg"
            className={styles.iconJamIconsOutlineL}
          />
          <p className={styles.menuItem}>Home</p>
        </div>
        <div className={styles.menuItem2}>
          <img
            src="../image/mnflnc7e-xmneyoi.svg"
            className={styles.iconJamIconsOutlineL}
          />
          <p className={styles.menuItem}>Network</p>
        </div>
        <div className={styles.menuItem2}>
          <img
            src="../image/mnflnc7e-7hn1gjq.svg"
            className={styles.iconJamIconsOutlineL}
          />
          <p className={styles.menuItem}>Create</p>
        </div>
        <div className={styles.menuItem2}>
          <img
            src="../image/mnflnc7e-kq8xuip.svg"
            className={styles.iconJamIconsOutlineL}
          />
          <p className={styles.menuItem}>Search</p>
        </div>
        <div className={styles.menuItem2}>
          <img
            src="../image/mnflnc7e-d0qsiqy.svg"
            className={styles.iconJamIconsOutlineL}
          />
          <p className={styles.menuItem}>Menu</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
