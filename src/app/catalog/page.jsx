'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Card,
  Grid2 as Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
  Typography
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import ProductItem from './ProductItem/ProductItem';
import ProductItemLine from './ProductItem/ProductItemLine';
import Categories from './Categories/Categories';
import Filters from './Filters/Filters';
import ViewModeButtons from './ViewModeButtons/ViewModeButtons';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import HeaderSection from '@/components/HeaderSection';
import HideImageOutlinedIcon from '@mui/icons-material/HideImageOutlined';
import Pagination from '@mui/material/Pagination';

import axios from 'axios';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

import { CATEGORIES } from '@/consts/products';
import { useRouter } from 'next/navigation';

const LIMIT = 10;

export default function Catalog() {
  const router = useRouter();
  const mainSectionRef = useRef(null);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [items, setItems] = useState([]);
  // const [filters, setFilters] = useState(null);
  const [itemsCount, setItemsCount] = useState(0);
  const [page, setPage] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryId, setCategoryId] = useState('motor-oils');
  const [viewMode, setViewMode] = useState('grid');
  const [gridViewMode, setGridViewMode] = useState('grid-three-line');

  const [filtersData, setFiltersData] = useState({});

  useEffect(() => {
    loadOils(page, categoryId);
    // loadFilters();
  }, []);

  // const loadFilters = async () => {
  //   const { data } = await axios.get('api/products/filters');

  //   setFilters(data);
  // };

  const loadOils = async (page, categoryId, queryString = '') => {
    setIsLoading(true);

    const offsetCalculated = page * LIMIT;

    // const { data } = await axios.get(
    //   `api/products/all?limit=${LIMIT}&offset=${offsetCalculated}&filter_category=${categoryId}`
    // );

    const { data } = await axios.get(
      `api/products/${categoryId}?limit=${LIMIT}&offset=${offsetCalculated}&${queryString}`
    );

    // const { data } = await axios.get(
    //   `api/products/all?vehicle_types=${1}&viscosity=${3}&limit=${LIMIT}&offset=${offsetCalculated}`
    // );

    const { results, count, next, previous } = data;

    const countFormatted = Math.ceil(count / LIMIT);

    setItemsCount(countFormatted);

    const dataFormatted = results.map((item) => {
      return {
        id: item.id,
        name: item.name,
        subtitle: item.viscosity?.name,
        img: item.images.first,
        specifications: item.specifications,
        tare: item.tare,
        product_number: item.product_number,
        description: item.description
      };
    });

    setItems(dataFormatted);
    setIsLoading(false);
  };

  const onCategoryChange = async (event, newCategoryId) => {
    if (newCategoryId === null) {
      return;
    }

    setCategoryId(newCategoryId);
    await loadOils(0, newCategoryId);

    const elementOffset = mainSectionRef.current.offsetTop - 150;

    setTimeout(() => {
      document.body.scrollTo({
        top: elementOffset,
        behavior: 'smooth'
      });
    }, 100);
  };

  const onViewModeChange = (event, newMode) => {
    if (newMode === null) {
      return;
    }

    setViewMode(newMode);
  };

  const onGridViewModeChange = (event, newMode) => {
    if (newMode === null) {
      return;
    }

    setGridViewMode(newMode);
  };

  const handleNavigate = () => {
    router.push(`/catalog/${selectedProduct.product_number}`);
  };

  const onCloseProductDialogClick = () => {
    setIsDialogOpen(false);
    // setSelectedProduct(null);
  };

  const onProductPreviewClick = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const renderTares = () => {
    if (selectedProduct) {
      return selectedProduct.tare.map((tare) => tare.name).join(' / ');
    }

    return '';
  };

  const onFiltersChange = (data, page = 0) => {
    if (data) {
      setFiltersData(data);
    }

    const queryString = Object.entries(data).reduce((result, [key, value], index) => {
      if (value) {
        return index === 0 ? result + `${key}=${value}` : result + `&${key}=${value}`;
      }

      return result;
    }, '');

    loadOils(page, categoryId, queryString);
    setPage(page);

    // mainSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const elementOffset = mainSectionRef.current.offsetTop - 150;

    setTimeout(() => {
      document.body.scrollTo({
        top: elementOffset,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <div>
      <Box>
        <HeaderSection title="Каталог" />

        <Box>
          <Box sx={{ p: 3 }}>
            <Categories list={CATEGORIES} value={categoryId} change={onCategoryChange} />
          </Box>

          <Box
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'flex-start',
              // flexWrap: 'wrap',
              gap: '24px',
              p: 3,

              [theme.breakpoints.down('md')]: {
                flexDirection: 'column'
              }
            })}
          >
            {!isTablet && <Filters category={categoryId} onFiltersChangeEmit={onFiltersChange} isLoading={isLoading} />}

            <Box sx={{ flex: 1, scrollMargin: '120px' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '24px',
                  flexWrap: 'wrap'
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '24px',
                    lineHeight: '31px',
                    fontWeight: 800
                  }}
                >
                  {CATEGORIES.find((item) => item.id === categoryId)?.title || ''}
                </Typography>

                {isTablet ? (
                  <Button
                    variant="outlined"
                    sx={{ textTransform: 'initial' }}
                    onClick={() => setIsFiltersOpen((prev) => !prev)}
                  >
                    Фильтры
                  </Button>
                ) : (
                  <ViewModeButtons
                    viewMode={viewMode}
                    gridViewMode={gridViewMode}
                    onGridViewModeChange={onGridViewModeChange}
                    onViewModeChange={onViewModeChange}
                  />
                )}

                <Box sx={{ display: isTablet && isFiltersOpen ? 'block' : 'none', width: '100%' }}>
                  <Filters category={categoryId} onFiltersChangeEmit={onFiltersChange} isLoading={isLoading} />
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center' }} ref={mainSectionRef}>
                {isLoading ? (
                  <Grid container spacing={{ xs: 3, md: 5 }} sx={{ marginTop: '24px', width: '100%' }}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                      return (
                        <Grid
                          size={{ xs: 12, sm: 6, md: 6, lg: gridViewMode === 'grid-three-line' ? 4 : 3 }}
                          key={item}
                        >
                          <Stack spacing={1}>
                            <Skeleton
                              animation="wave"
                              variant="rounded"
                              width="100%"
                              height={400}
                              sx={{
                                position: 'relative',
                                backgroundColor: 'rgb(238, 243, 250)',
                                p: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                              }}
                            >
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  backgroundColor: '#fff',
                                  borderRadius: '6px',
                                  visibility: 'visible !important',
                                  height: '200px'
                                }}
                              >
                                <ImageOutlinedIcon
                                  color="#ccc"
                                  sx={{ visibility: 'visible !important', fontSize: 64, color: '#ccc' }}
                                />
                              </Box>

                              <Box>
                                <Skeleton variant="text" sx={{ visibility: 'visible', fontSize: '1rem' }} />
                                <Skeleton variant="text" width="60%" sx={{ visibility: 'visible', fontSize: '1rem' }} />
                              </Box>

                              <Box sx={{ display: 'flex', gap: 2 }}>
                                <Skeleton variant="rounded" height={40} sx={{ visibility: 'visible', width: '100%' }} />
                                <Skeleton variant="rounded" height={40} sx={{ visibility: 'visible', width: '100%' }} />
                              </Box>
                            </Skeleton>
                          </Stack>
                        </Grid>
                      );
                    })}
                  </Grid>
                ) : (
                  <Grid container spacing={{ xs: 3, md: 5 }} sx={{ marginTop: '24px', width: '100%' }}>
                    {items.map((item, index) => {
                      return viewMode === 'grid' ? (
                        <Grid
                          key={index}
                          size={{
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: gridViewMode === 'grid-three-line' ? 4 : 3
                          }}
                        >
                          <ProductItem data={item} onProductPreviewClick={onProductPreviewClick} />
                        </Grid>
                      ) : (
                        <Grid key={index} size={{ md: 12 }}>
                          <ProductItemLine data={item} onProductPreviewClick={onProductPreviewClick} />
                        </Grid>
                      );
                    })}
                  </Grid>
                )}
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Pagination
                  sx={{ mt: 4 }}
                  page={page + 1}
                  count={itemsCount}
                  onChange={(event, newPage) => {
                    if (page !== newPage - 1) {
                      onFiltersChange(filtersData, newPage - 1);
                    }
                  }}
                  color="primary"
                  variant="outlined"
                  shape="rounded"
                  size={isTablet ? 'small' : 'large'}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 8 }}>
            <FeedbackBlock />
          </Box>
        </Box>
      </Box>

      <Dialog
        fullScreen={isTablet}
        open={isDialogOpen}
        onClose={onCloseProductDialogClick}
        scroll="paper"
        maxWidth="md"
        disableScrollLock
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          id="scroll-dialog-title"
          sx={(theme) => ({
            display: 'flex',
            gap: '8px',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: '900',
            textTransform: 'uppercase',
            fontSize: '32px',

            [theme.breakpoints.down('md')]: {
              fontSize: '24px'
            }
          })}
        >
          {`${selectedProduct?.name} ${selectedProduct?.subtitle}`}

          <IconButton onClick={onCloseProductDialogClick}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Box
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'flex-start',
              gap: '48px',
              position: 'relative',
              pr: 4,

              [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                alignItems: 'center',
                pr: 0
              }
            })}
          >
            <Box
              sx={(theme) => ({
                position: 'sticky',
                top: 0,
                left: 0,

                [theme.breakpoints.down('md')]: {
                  position: 'initial'
                }
                // transform: 'translateY(-50%)'
              })}
            >
              {selectedProduct?.img ? (
                <img src={selectedProduct?.img} alt={selectedProduct?.name} width="300" height="300" />
              ) : (
                <Box
                  sx={{
                    width: '300px',
                    height: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '6px',
                    marginBottom: '32px'
                  }}
                >
                  <HideImageOutlinedIcon sx={{ color: '#ccc', fontSize: '46px' }} />
                </Box>
              )}
            </Box>

            <Box>
              <h2>Описание</h2>
              <Box sx={{ mb: 3, mt: 1 }} dangerouslySetInnerHTML={{ __html: selectedProduct?.description }} />

              {/* <h2>Область прменения</h2>
              <Box sx={{ mb: 3, mt: 1 }}>{selectedProduct?.description}</Box> */}

              <h2>Спецификации</h2>
              <Box sx={{ mb: 3, mt: 1 }} dangerouslySetInnerHTML={{ __html: selectedProduct?.specifications }} />

              <h2>Варианты фасовки</h2>
              <Box sx={{ mb: 3, mt: 1 }}>{renderTares()}</Box>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            p: 2,
            gap: '16px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              gap: '16px',
              display: 'flex'
            }}
          >
            <Button
              sx={{ textTransform: 'initial' }}
              size="large"
              variant="contained"
              disableElevation
              onClick={onCloseProductDialogClick}
            >
              Скачать TDS
              <DescriptionOutlinedIcon sx={{ ml: 2 }} />
            </Button>
          </Box>

          <Button
            sx={{ textTransform: 'initial' }}
            size="large"
            variant="contained"
            disableElevation
            startIcon={<SubjectOutlinedIcon />}
            onClick={handleNavigate}
          >
            Подробнее
          </Button>

          {/* <Button sx={{ textTransform: 'initial' }} size="large" variant="outlined" onClick={onCloseProductDialogClick}>
            Закрыть
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
