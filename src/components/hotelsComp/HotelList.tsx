import { ReactNode, useState } from "react"
import { Box, Checkbox, Grid, Slider, Typography } from "@mui/material"

import { HotelSingleCard } from "./HotelSingleCard";


const FilterItem = ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <div className="filter-item py-4">
            <Typography>{title}</Typography>
            {children}
            {/* <Divider  sx={{p:3, }}/> */}
        </div>
    )
}

const HotelList = () => {
    const [priceSlider, setPriceSlider] = useState(0)
    const handleChange = (_: Event, newValue: number | number[]) => {
        setPriceSlider(newValue as number);
    };
    const duration = ["1 to 3", "4 to 6", "7 to 9", "10 to 12", "13 or more"]
    const hotelFacilities = ["Mini firdge", "TV", "Air conditioner", "Bath tab", "King sized bed"]
    // const propertyType = ["Hotels", "Entire homes & apartments", "Homestays", "Vilas",]
    // const stars = [5, 4, 3, 2]
    const hotels = new Array(5).fill(1)
    return (
        <div className="container px-3">
            <Typography variant="h5">Showing 27 Hotels</Typography>
            <Grid container>
                <Grid item lg={3} className="hidden md:block" >
                    <div className="" >
                        {/* <div className="hidden md:block"> */}
                        <FilterItem title='Sort By'>
                            <select className="form-select">
                                <option>Popularity</option>
                                <option>Price</option>
                                <option>Star</option>
                            </select>
                        </FilterItem>
                        <FilterItem title='Budget'>
                            <Box
                            >
                                <Slider
                                    // marks={marks}
                                    value={priceSlider}
                                    min={0}
                                    max={2000}
                                    onChange={handleChange}
                                />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography>$0</Typography>
                                    <Typography>$1000</Typography>
                                </Box>
                            </Box>
                        </FilterItem>
                        <FilterItem title="Duration (in days)">
                            {duration.map((item, index) => (
                                <div key={item.toString() + index}>
                                    <Checkbox /> {item}
                                </div>
                            ))}
                        </FilterItem>

                        <FilterItem title="Hotel Facilities">
                            {hotelFacilities.map(item => (
                                <div key={item}>
                                    <Checkbox /> {item}
                                </div>
                            ))}
                        </FilterItem>

                        <FilterItem title="Hotel Facilities">
                            {hotelFacilities.map(item => (
                                <div key={item}>
                                    <Checkbox /> {item}
                                </div>
                            ))}
                        </FilterItem>

                    </div>
                    {/* <div className="hotel-list-Container">
                        hotel list Container
                    </div> */}
                </Grid>
                <Grid item sm={12} xs={12} md={9} lg={9} p={1}>
                    {hotels.map(item => <HotelSingleCard key={item.id} hotel={item} />)}
                </Grid>

            </Grid>
        </div>
    )
}
export default HotelList