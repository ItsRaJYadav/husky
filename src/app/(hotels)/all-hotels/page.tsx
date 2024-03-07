/* eslint-disable unused-imports/no-unused-vars */
"use client"
import { ReactNode, useEffect, useState } from "react"
import { Box, Checkbox, Grid, Rating, Slider, Typography } from "@mui/material"

import AxiosObj from "@/axios";
import { HotelSingleCard } from "@/components/hotelsComp/HotelSingleCard";
import { Hotel, HotelResponseList } from "@/types/hotelTypes";


const FilterItem = ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <div className="filter-item py-4">
            <Typography>{title}</Typography>
            {children}
        </div>
    )
}
export default function Page() {
    const [priceSlider, setPriceSlider] = useState(0)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [pageNo, setPageNo] = useState(1)
    const handleChange = (_: Event, newValue: number | number[]) => {
        setPriceSlider(newValue as number);
    };

    const duration = ["1 to 3", "4 to 6", "7 to 9", "10 to 12", "13 or more"]
    const hotelFacilities = ["Mini firdge", "TV", "Air conditioner", "Bath tab", "King sized bed"]
    const propertyType = ["Hotels", "Entire homes & apartments", "Homestays", "Vilas",]
    const stars = [5, 4, 3, 2]
    // const hotels = new Array(5).fill(1)


    const [hotelsData, setHotelsData] = useState<Hotel[]>([]);
    const fetchHotels = async () => {
        try {
            const data = await AxiosObj.get<HotelResponseList>('/hotels/search-all-hotels');
            // const data = await response.json();
            setHotelsData(data.data.hotels);
            console.log(data.data.hotels)
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        fetchHotels();
    }, [pageNo]);


    return (
        <>
            {/* <Breadcrumbs params={params} /> */}

            <div className="container px-3">
                <Typography pt={3} variant="h5">Showing 270 Hotels</Typography>
                <Grid container className="">
                    <Grid item lg={3} className="h-screen hidden md:block " style={{ overflowY: 'scroll', scrollbarWidth: 'none', scrollBehavior: 'smooth' }}  >
                        <div >
                            <FilterItem title='Sort By'>
                                <select className="form-select">
                                    <option>Popularity</option>
                                    <option>Price</option>
                                    <option>Star</option>
                                </select>
                            </FilterItem>
                            <FilterItem title='Budget'>
                                <Box sx={{ px: 3 }}>
                                    <Slider
                                        // marks={marks}
                                        value={priceSlider}
                                        min={0}
                                        max={2000}
                                        onChange={handleChange}
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography>₹ 0</Typography>
                                        <Typography>₹ 1000</Typography>
                                    </Box>
                                </Box>
                            </FilterItem>
                            <FilterItem title="Duration (in days)">
                                {duration.map((item, index) =>
                                    <div className="" key={index}>
                                        <Checkbox /> {item}
                                    </div>
                                )}
                            </FilterItem>
                            <FilterItem title="Hotel Facilities">
                                {hotelFacilities.map((item, index) =>
                                    <div className="" key={index}>
                                        <Checkbox /> {item}
                                    </div>
                                )}
                            </FilterItem>
                            <FilterItem title="Property type">
                                {propertyType.map((item, index) =>
                                    <div className="" key={index}>
                                        <Checkbox /> {item}
                                    </div>
                                )}
                            </FilterItem>
                            <FilterItem title="Stars">
                                {stars.map((item, index) =>
                                    <div className="" key={index}>
                                        <Checkbox /> <Rating name="read-only" value={item} readOnly />
                                    </div>
                                )}
                            </FilterItem>

                        </div>
                        {/* <div className="hotel-list-Container">
                        hotel list Container
                    </div> */}
                    </Grid>
                    <Grid item sm={12} xs={12} md={9} lg={9} p={1} className="h-screen  " style={{ overflowY: 'scroll', scrollbarWidth: 'none', scrollBehavior: 'smooth' }}>
                        {hotelsData.map((hotel, index) => (
                            <HotelSingleCard key={index} hotel={hotel} />
                        ))}
                    </Grid>
                </Grid>
            </div>
        </>

    )
}
