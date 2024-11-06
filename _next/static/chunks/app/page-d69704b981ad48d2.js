(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    990: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 9190)),
        Promise.resolve().then(r.bind(r, 160)),
        Promise.resolve().then(r.bind(r, 4683)),
        Promise.resolve().then(r.bind(r, 2183)),
        Promise.resolve().then(r.bind(r, 1981)),
        Promise.resolve().then(r.bind(r, 780)),
        Promise.resolve().then(r.bind(r, 4291)),
        Promise.resolve().then(r.bind(r, 670)),
        Promise.resolve().then(r.bind(r, 5060)),
        Promise.resolve().then(r.bind(r, 1917)),
        Promise.resolve().then(r.bind(r, 4886));
    },
    9190: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          BookMovieForm: function () {
            return c;
          },
        });
      var n = r(7437),
        s = r(2306),
        o = r(3340),
        a = r(3590),
        i = r(9501),
        l = r(1229);
      let d = l.z.object({
          fullName: l.z
            .string()
            .min(2, { message: 'Full name must be at least 3 characters.' }),
          phoneNumber: l.z
            .string()
            .min(2, { message: 'Phone number must be at least 9 characters.' }),
        }),
        c = () => {
          let { toast: e } = (0, o.pm)(),
            t = (0, i.cI)({
              resolver: (0, a.F)(d),
              defaultValues: { fullName: '', phoneNumber: '' },
            });
          return (0, n.jsx)(s.l0, {
            ...t,
            children: (0, n.jsxs)('form', {
              onSubmit: t.handleSubmit(function (t) {
                console.log(t),
                  e({
                    variant: 'success',
                    title: 'Success!',
                    description: 'Your seats have been successfully booked.',
                  });
              }),
              className: 'space-y-8',
              children: [
                (0, n.jsx)(s.Wi, {
                  control: t.control,
                  name: 'fullName',
                  render: (e) => {
                    let { field: t } = e;
                    return (0, n.jsxs)(s.xJ, {
                      children: [
                        (0, n.jsx)(s.lX, { children: 'Full Name' }),
                        (0, n.jsx)(s.NI, {
                          children: (0, n.jsx)(s.II, {
                            placeholder: 'E.g. Juan John',
                            ...t,
                          }),
                        }),
                        (0, n.jsx)(s.pf, {
                          className: 'sr-only',
                          children: 'Your full name',
                        }),
                        (0, n.jsx)(s.zG, {}),
                      ],
                    });
                  },
                }),
                (0, n.jsx)(s.Wi, {
                  control: t.control,
                  name: 'phoneNumber',
                  render: (e) => {
                    let { field: t } = e;
                    return (0, n.jsxs)(s.xJ, {
                      children: [
                        (0, n.jsx)(s.lX, { children: 'Phone Number' }),
                        (0, n.jsx)(s.NI, {
                          children: (0, n.jsx)(s.II, {
                            placeholder: 'E.g. +46.....',
                            type: 'tel',
                            ...t,
                          }),
                        }),
                        (0, n.jsx)(s.pf, {
                          className: 'sr-only',
                          children: 'Your phone number',
                        }),
                        (0, n.jsx)(s.zG, {}),
                      ],
                    });
                  },
                }),
                (0, n.jsx)(s.zx, { type: 'submit', children: 'Submit' }),
              ],
            }),
          });
        };
      c.displayName = 'BookMovieForm';
    },
    160: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          HomeContainer: function () {
            return a;
          },
        });
      var n = r(7437),
        s = r(8437),
        o = r(2265);
      let a = () => {
        let e = (0, o.useRef)(null),
          [t, r] = (0, o.useState)(0),
          [a, i] = (0, o.useState)(null);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(s.Vc, {
              ref: e,
              onChange: () => {
                var t;
                r(0),
                  i(
                    (
                      null === (t = e.current) || void 0 === t
                        ? void 0
                        : t.value
                    )
                      ? Number(e.current.value)
                      : null
                  );
              },
            }),
            (0, n.jsx)(s.qH, {}),
            (0, n.jsx)(s.Ye, {
              ref: e,
              selectedSeats: t,
              setSelectedSeats: r,
              selectedMovie: a,
            }),
            (0, n.jsx)(s.ug, {}),
          ],
        });
      };
      a.displayName = 'HomeContainer';
    },
    8437: function (e, t, r) {
      'use strict';
      r.d(t, {
        ug: function () {
          return o;
        },
        Sq: function () {
          return a.BookMovieForm;
        },
        Vc: function () {
          return i.MovieSelection;
        },
        QS: function () {
          return l.Seat;
        },
        K5: function () {
          return d;
        },
        jI: function () {
          return c.SeatRow;
        },
        Od: function () {
          return u;
        },
        Ye: function () {
          return f.TheaterContainer;
        },
        Mh: function () {
          return m;
        },
        qH: function () {
          return p;
        },
      });
      var n = r(7437),
        s = r(2306);
      let o = () =>
        (0, n.jsxs)(s.Vq, {
          children: [
            (0, n.jsx)(s.hg, {
              asChild: !0,
              children: (0, n.jsx)(s.zx, {
                className: 'mt-6 capitalize',
                children: 'Book seats',
              }),
            }),
            (0, n.jsxs)(s.cZ, {
              children: [
                (0, n.jsxs)(s.fK, {
                  children: [
                    (0, n.jsx)(s.$N, {
                      className: 'capitalize',
                      children: 'Book seats',
                    }),
                    (0, n.jsx)(s.Be, {
                      children:
                        "Book your seats by filling in the form, press Submit when you're done.",
                    }),
                  ],
                }),
                (0, n.jsx)(a.BookMovieForm, {}),
              ],
            }),
          ],
        });
      o.displayName = 'BookMovieDialog';
      var a = r(9190);
      r(160);
      var i = r(4683),
        l = r(1981);
      let d = (e) => {
        let { setSelectedSeats: t, selectedSeats: r, selectedMovie: s } = e;
        return (0, n.jsxs)('div', {
          className: 'container',
          children: [
            (0, n.jsx)('div', { className: 'screen' }),
            Array.from({ length: 6 }).map((e, o) =>
              (0, n.jsx)(
                c.SeatRow,
                { setSelectedSeats: t, selectedMovie: s, selectedSeats: r },
                o
              )
            ),
          ],
        });
      };
      d.displayName = 'SeatContainer';
      var c = r(2183);
      let u = (e) => {
        let { className: t } = e;
        return (0, n.jsx)('div', {
          'aria-hidden': !0,
          'className':
            'animate-pulse bg-neutral-400/30 flex min-w-1 min-h-1 '.concat(t),
        });
      };
      u.displayName = 'Skeleton';
      var f = r(780);
      let m = (e) => {
        let { selectedSeats: t = 0, totalPrice: r = 0 } = e;
        return (0, n.jsxs)('p', {
          className: 'text',
          children: [
            'You have selected ',
            (0, n.jsx)('span', { id: 'count', children: t }),
            ' seats for a price of $',
            (0, n.jsx)('span', { id: 'total', children: r }),
          ],
        });
      };
      m.displayName = 'TotalPrice';
      let p = () =>
        (0, n.jsxs)('ul', {
          className: 'showcase',
          children: [
            (0, n.jsxs)('li', {
              children: [
                (0, n.jsx)('div', { className: 'seat' }),
                (0, n.jsx)('small', { children: 'N/A' }),
              ],
            }),
            (0, n.jsxs)('li', {
              children: [
                (0, n.jsx)('div', { className: 'seat selected' }),
                (0, n.jsx)('small', { children: 'Selected' }),
              ],
            }),
            (0, n.jsxs)('li', {
              children: [
                (0, n.jsx)('div', { className: 'occupied seat' }),
                (0, n.jsx)('small', { children: 'Occupied' }),
              ],
            }),
          ],
        });
      p.displayName = 'UIExplanation';
    },
    4683: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          MovieSelection: function () {
            return i;
          },
        });
      var n = r(7437),
        s = r(8437),
        o = r(3464),
        a = r(2265);
      let i = (0, a.forwardRef)((e, t) => {
        let { onChange: r, ...i } = e,
          [l, d] = (0, a.useState)([]),
          [c, u] = (0, a.useState)(!0);
        return ((0, a.useEffect)(() => {
          let e = async () => {
            try {
              let e = await o.Z.get(
                'https://falk33n.github.io/inlamningsuppgift-tim-falk-js2/movies.json'
              );
              d(e.data);
            } catch (e) {
              console.error('Failed to retrieve movies, '.concat(e));
            }
          };
          u(!1), e();
        }, []),
        c)
          ? (0, n.jsx)(s.Od, { className: 'mb-4 rounded-md w-52 h-8' })
          : (0, n.jsxs)('div', {
              className: 'movie-container',
              children: [
                (0, n.jsx)('label', {
                  htmlFor: 'movie',
                  children: 'Pick a movie:',
                }),
                (0, n.jsx)('select', {
                  name: 'movie',
                  id: 'movie',
                  ref: t,
                  onChange: r,
                  ...i,
                  children: l.map((e, t) =>
                    (0, n.jsxs)(
                      'option',
                      { value: e.price, children: [e.title, ': $', e.price] },
                      t
                    )
                  ),
                }),
              ],
            });
      });
      i.displayName = 'MovieSelection';
    },
    2183: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          SeatRow: function () {
            return a;
          },
        });
      var n = r(7437),
        s = r(8437),
        o = r(2265);
      let a = (e) => {
        let { setSelectedSeats: t, selectedMovie: r } = e,
          [a, i] = (0, o.useState)([]),
          [l, d] = (0, o.useState)(Array(8).fill(!1));
        return ((0, o.useEffect)(() => {
          t((e) => 0 * e),
            i(Array.from({ length: 8 }, () => Math.random() > 0.65)),
            d(Array(8).fill(!1));
        }, [r, t]),
        0 === a.length)
          ? (0, n.jsx)(s.Od, { className: 'w-52 h-[1.15rem]' })
          : (0, n.jsx)('div', {
              className: 'row',
              children: a.map((e, r) =>
                (0, n.jsx)(
                  s.QS,
                  {
                    isOccupied: e,
                    isSelected: l[r],
                    setIsSelected: (e) => {
                      let t = [...l];
                      (t[r] = e), d(t);
                    },
                    setSelectedSeats: t,
                  },
                  r
                )
              ),
            });
      };
      a.displayName = 'SeatRow';
    },
    1981: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          Seat: function () {
            return s;
          },
        });
      var n = r(7437);
      let s = (e) => {
        let {
          isOccupied: t,
          isSelected: r,
          setIsSelected: s,
          setSelectedSeats: o,
        } = e;
        return (0, n.jsx)('div', {
          className: 'seat '
            .concat(t && 'occupied', ' ')
            .concat(r && 'selected'),
          onClick: () => {
            if (t) return;
            let e = !r;
            s(e), o((t) => t + (e ? 1 : -1));
          },
        });
      };
      s.displayName = 'Seat';
    },
    780: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          TheaterContainer: function () {
            return o;
          },
        });
      var n = r(7437),
        s = r(8437);
      let o = (0, r(2265).forwardRef)((e, t) => {
        let { setSelectedSeats: r, selectedSeats: o, selectedMovie: a } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(s.K5, {
              setSelectedSeats: r,
              selectedSeats: o,
              selectedMovie: a,
            }),
            (0, n.jsx)(s.Mh, {
              totalPrice: Number(t.current ? t.current.value : 0) * o,
              selectedSeats: o,
            }),
          ],
        });
      });
      o.displayName = 'TheaterContainer';
    },
    4291: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          Dialog: function () {
            return l;
          },
          DialogClose: function () {
            return u;
          },
          DialogContent: function () {
            return m;
          },
          DialogDescription: function () {
            return v;
          },
          DialogFooter: function () {
            return x;
          },
          DialogHeader: function () {
            return p;
          },
          DialogOverlay: function () {
            return f;
          },
          DialogPortal: function () {
            return c;
          },
          DialogTitle: function () {
            return h;
          },
          DialogTrigger: function () {
            return d;
          },
        });
      var n = r(7437),
        s = r(3448),
        o = r(4182),
        a = r(653),
        i = r(2265);
      let l = o.fC,
        d = o.xz,
        c = o.h_,
        u = o.x8,
        f = i.forwardRef((e, t) => {
          let { className: r, ...a } = e;
          return (0, n.jsx)(o.aV, {
            ref: t,
            className: (0, s.cn)(
              'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              r
            ),
            ...a,
          });
        });
      f.displayName = o.aV.displayName;
      let m = i.forwardRef((e, t) => {
        let { className: r, children: i, ...l } = e;
        return (0, n.jsxs)(c, {
          children: [
            (0, n.jsx)(f, {}),
            (0, n.jsxs)(o.VY, {
              ref: t,
              className: (0, s.cn)(
                'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                r
              ),
              ...l,
              children: [
                i,
                (0, n.jsxs)(o.x8, {
                  className:
                    'top-4 right-4 absolute opacity-70 hover:opacity-100 rounded-sm focus:ring-2 focus:ring-ring ring-offset-background focus:ring-offset-2 text-foreground transition-opacity focus:outline-none disabled:pointer-events-none',
                  children: [
                    (0, n.jsx)(a.Pxu, { className: 'w-4 h-4 text-foreground' }),
                    (0, n.jsx)('span', {
                      className: 'sr-only',
                      children: 'Close',
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      m.displayName = o.VY.displayName;
      let p = (e) => {
        let { className: t, ...r } = e;
        return (0, n.jsx)('div', {
          className: (0, s.cn)(
            'flex flex-col text-foreground space-y-1.5 text-center sm:text-left',
            t
          ),
          ...r,
        });
      };
      p.displayName = 'DialogHeader';
      let x = (e) => {
        let { className: t, ...r } = e;
        return (0, n.jsx)('div', {
          className: (0, s.cn)(
            'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
            t
          ),
          ...r,
        });
      };
      x.displayName = 'DialogFooter';
      let h = i.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(o.Dx, {
          ref: t,
          className: (0, s.cn)(
            'text-lg font-semibold leading-none tracking-tight',
            r
          ),
          ...a,
        });
      });
      h.displayName = o.Dx.displayName;
      let v = i.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(o.dk, {
          ref: t,
          className: (0, s.cn)('text-sm text-muted-foreground', r),
          ...a,
        });
      });
      v.displayName = o.dk.displayName;
    },
    670: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          Form: function () {
            return d;
          },
          FormControl: function () {
            return h;
          },
          FormDescription: function () {
            return v;
          },
          FormField: function () {
            return u;
          },
          FormItem: function () {
            return p;
          },
          FormLabel: function () {
            return x;
          },
          FormMessage: function () {
            return g;
          },
          useFormField: function () {
            return f;
          },
        });
      var n = r(7437),
        s = r(5060),
        o = r(3448),
        a = r(7053),
        i = r(2265),
        l = r(9501);
      let d = l.RV,
        c = i.createContext({}),
        u = (e) => {
          let { ...t } = e;
          return (0, n.jsx)(c.Provider, {
            value: { name: t.name },
            children: (0, n.jsx)(l.Qr, { ...t }),
          });
        },
        f = () => {
          let e = i.useContext(c),
            t = i.useContext(m),
            { getFieldState: r, formState: n } = (0, l.Gc)(),
            s = r(e.name, n);
          if (!e) throw Error('useFormField should be used within <FormField>');
          let { id: o } = t;
          return {
            id: o,
            name: e.name,
            formItemId: ''.concat(o, '-form-item'),
            formDescriptionId: ''.concat(o, '-form-item-description'),
            formMessageId: ''.concat(o, '-form-item-message'),
            ...s,
          };
        },
        m = i.createContext({}),
        p = i.forwardRef((e, t) => {
          let { className: r, ...s } = e,
            a = i.useId();
          return (0, n.jsx)(m.Provider, {
            value: { id: a },
            children: (0, n.jsx)('div', {
              ref: t,
              className: (0, o.cn)('space-y-2', r),
              ...s,
            }),
          });
        });
      p.displayName = 'FormItem';
      let x = i.forwardRef((e, t) => {
        let { className: r, ...a } = e,
          { error: i, formItemId: l } = f();
        return (0, n.jsx)(s.Label, {
          ref: t,
          className: (0, o.cn)('text-foreground', i && 'text-destructive', r),
          htmlFor: l,
          ...a,
        });
      });
      x.displayName = 'FormLabel';
      let h = i.forwardRef((e, t) => {
        let { ...r } = e,
          {
            error: s,
            formItemId: o,
            formDescriptionId: i,
            formMessageId: l,
          } = f();
        return (0, n.jsx)(a.g7, {
          'ref': t,
          'id': o,
          'aria-describedby': s ? ''.concat(i, ' ').concat(l) : ''.concat(i),
          'aria-invalid': !!s,
          ...r,
        });
      });
      h.displayName = 'FormControl';
      let v = i.forwardRef((e, t) => {
        let { className: r, ...s } = e,
          { formDescriptionId: a } = f();
        return (0, n.jsx)('p', {
          ref: t,
          id: a,
          className: (0, o.cn)('text-[0.8rem] text-muted-foreground', r),
          ...s,
        });
      });
      v.displayName = 'FormDescription';
      let g = i.forwardRef((e, t) => {
        let { className: r, children: s, ...a } = e,
          { error: i, formMessageId: l } = f(),
          d = i ? String(null == i ? void 0 : i.message) : s;
        return d
          ? (0, n.jsx)('p', {
              ref: t,
              id: l,
              className: (0, o.cn)(
                'text-[0.8rem] font-medium text-destructive',
                r
              ),
              ...a,
              children: d,
            })
          : null;
      });
      g.displayName = 'FormMessage';
    },
    2306: function (e, t, r) {
      'use strict';
      r.d(t, {
        zx: function () {
          return d;
        },
        Vq: function () {
          return c.Dialog;
        },
        cZ: function () {
          return c.DialogContent;
        },
        Be: function () {
          return c.DialogDescription;
        },
        fK: function () {
          return c.DialogHeader;
        },
        $N: function () {
          return c.DialogTitle;
        },
        hg: function () {
          return c.DialogTrigger;
        },
        l0: function () {
          return u.Form;
        },
        NI: function () {
          return u.FormControl;
        },
        pf: function () {
          return u.FormDescription;
        },
        Wi: function () {
          return u.FormField;
        },
        xJ: function () {
          return u.FormItem;
        },
        lX: function () {
          return u.FormLabel;
        },
        zG: function () {
          return u.FormMessage;
        },
        II: function () {
          return f;
        },
      });
      var n = r(7437),
        s = r(3448),
        o = r(7053),
        a = r(7712),
        i = r(2265);
      let l = (0, a.j)(
          'inline-flex justify-center items-center gap-2 disabled:opacity-50 rounded-md focus-visible:ring-1 focus-visible:ring-ring font-medium text-sm whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
          {
            variants: {
              variant: {
                default:
                  'bg-primary text-primary-foreground shadow hover:bg-primary/90',
                destructive:
                  'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                outline:
                  'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
                secondary:
                  'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
              },
              size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-md px-3 text-xs',
                lg: 'h-10 rounded-md px-8',
                icon: 'h-9 w-9',
              },
            },
            defaultVariants: { variant: 'default', size: 'default' },
          }
        ),
        d = i.forwardRef((e, t) => {
          let { className: r, variant: a, size: i, asChild: d = !1, ...c } = e,
            u = d ? o.g7 : 'button';
          return (0, n.jsx)(u, {
            className: (0, s.cn)(l({ variant: a, size: i, className: r })),
            ref: t,
            ...c,
          });
        });
      d.displayName = 'Button';
      var c = r(4291),
        u = r(670);
      let f = i.forwardRef((e, t) => {
        let { className: r, type: o, ...a } = e;
        return (0, n.jsx)('input', {
          type: o,
          className: (0, s.cn)(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm text-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            r
          ),
          ref: t,
          ...a,
        });
      });
      (f.displayName = 'Input'), r(5060), r(1917), r(4886);
    },
    5060: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          Label: function () {
            return d;
          },
        });
      var n = r(7437),
        s = r(3448),
        o = r(6394),
        a = r(7712),
        i = r(2265);
      let l = (0, a.j)(
          'peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed'
        ),
        d = i.forwardRef((e, t) => {
          let { className: r, ...a } = e;
          return (0, n.jsx)(o.f, {
            ref: t,
            className: (0, s.cn)(l(), r),
            ...a,
          });
        });
      d.displayName = o.f.displayName;
    },
    1917: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          Toast: function () {
            return f;
          },
          ToastAction: function () {
            return m;
          },
          ToastClose: function () {
            return p;
          },
          ToastDescription: function () {
            return h;
          },
          ToastProvider: function () {
            return d;
          },
          ToastTitle: function () {
            return x;
          },
          ToastViewport: function () {
            return c;
          },
        });
      var n = r(7437),
        s = r(3448),
        o = r(653),
        a = r(4230),
        i = r(7712),
        l = r(2265);
      let d = a.zt,
        c = l.forwardRef((e, t) => {
          let { className: r, ...o } = e;
          return (0, n.jsx)(a.l_, {
            ref: t,
            className: (0, s.cn)(
              'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
              r
            ),
            ...o,
          });
        });
      c.displayName = a.l_.displayName;
      let u = (0, i.j)(
          'relative data-[state=closed]:slide-out-to-right-full data-[state=open]:sm:slide-in-from-bottom-full flex justify-between items-center space-x-2 data-[state=open]:slide-in-from-top-full shadow-lg p-4 pr-6 border rounded-md w-full transition-all data-[swipe=move]:transition-none data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-out data-[state=open]:animate-in data-[swipe=end]:animate-out overflow-hidden pointer-events-auto group data-[state=closed]:fade-out-80',
          {
            variants: {
              variant: {
                default: 'border bg-background text-foreground',
                destructive:
                  'destructive group border-destructive bg-destructive text-destructive-foreground',
                success: 'bg-green-500 border-green-600 text-white',
              },
            },
            defaultVariants: { variant: 'default' },
          }
        ),
        f = l.forwardRef((e, t) => {
          let { className: r, variant: o, ...i } = e;
          return (0, n.jsx)(a.fC, {
            ref: t,
            className: (0, s.cn)(u({ variant: o }), r),
            ...i,
          });
        });
      f.displayName = a.fC.displayName;
      let m = l.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, n.jsx)(a.aU, {
          ref: t,
          className: (0, s.cn)(
            'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
            r
          ),
          ...o,
        });
      });
      m.displayName = a.aU.displayName;
      let p = l.forwardRef((e, t) => {
        let { className: r, ...i } = e;
        return (0, n.jsx)(a.x8, {
          'ref': t,
          'className': (0, s.cn)(
            'absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
            r
          ),
          'toast-close': '',
          ...i,
          'children': (0, n.jsx)(o.Pxu, { className: 'w-4 h-4' }),
        });
      });
      p.displayName = a.x8.displayName;
      let x = l.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, n.jsx)(a.Dx, {
          ref: t,
          className: (0, s.cn)('text-sm font-semibold [&+div]:text-xs', r),
          ...o,
        });
      });
      x.displayName = a.Dx.displayName;
      let h = l.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, n.jsx)(a.dk, {
          ref: t,
          className: (0, s.cn)('text-sm opacity-90', r),
          ...o,
        });
      });
      h.displayName = a.dk.displayName;
    },
    4886: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          Toaster: function () {
            return a;
          },
        });
      var n = r(7437),
        s = r(1917),
        o = r(3340);
      function a() {
        let { toasts: e } = (0, o.pm)();
        return (0, n.jsxs)(s.ToastProvider, {
          children: [
            e.map(function (e) {
              let { id: t, title: r, description: o, action: a, ...i } = e;
              return (0,
              n.jsxs)(s.Toast, { ...i, children: [(0, n.jsxs)('div', { className: 'gap-1 grid', children: [r && (0, n.jsx)(s.ToastTitle, { children: r }), o && (0, n.jsx)(s.ToastDescription, { children: o })] }), a, (0, n.jsx)(s.ToastClose, {})] }, t);
            }),
            (0, n.jsx)(s.ToastViewport, {}),
          ],
        });
      }
    },
    3340: function (e, t, r) {
      'use strict';
      r.d(t, {
        pm: function () {
          return f;
        },
      });
      var n = r(2265);
      let s = 0,
        o = new Map(),
        a = (e) => {
          if (o.has(e)) return;
          let t = setTimeout(() => {
            o.delete(e), c({ type: 'REMOVE_TOAST', toastId: e });
          }, 1e6);
          o.set(e, t);
        },
        i = (e, t) => {
          switch (t.type) {
            case 'ADD_TOAST':
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 1) };
            case 'UPDATE_TOAST':
              return {
                ...e,
                toasts: e.toasts.map((e) =>
                  e.id === t.toast.id ? { ...e, ...t.toast } : e
                ),
              };
            case 'DISMISS_TOAST': {
              let { toastId: r } = t;
              return (
                r
                  ? a(r)
                  : e.toasts.forEach((e) => {
                      a(e.id);
                    }),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === r || void 0 === r ? { ...e, open: !1 } : e
                  ),
                }
              );
            }
            case 'REMOVE_TOAST':
              if (void 0 === t.toastId) return { ...e, toasts: [] };
              return {
                ...e,
                toasts: e.toasts.filter((e) => e.id !== t.toastId),
              };
          }
        },
        l = [],
        d = { toasts: [] };
      function c(e) {
        (d = i(d, e)),
          l.forEach((e) => {
            e(d);
          });
      }
      function u(e) {
        let { ...t } = e,
          r = (s = (s + 1) % Number.MAX_SAFE_INTEGER).toString(),
          n = () => c({ type: 'DISMISS_TOAST', toastId: r });
        return (
          c({
            type: 'ADD_TOAST',
            toast: {
              ...t,
              id: r,
              open: !0,
              onOpenChange: (e) => {
                e || n();
              },
            },
          }),
          {
            id: r,
            dismiss: n,
            update: (e) => c({ type: 'UPDATE_TOAST', toast: { ...e, id: r } }),
          }
        );
      }
      function f() {
        let [e, t] = n.useState(d);
        return (
          n.useEffect(
            () => (
              l.push(t),
              () => {
                let e = l.indexOf(t);
                e > -1 && l.splice(e, 1);
              }
            ),
            [e]
          ),
          {
            ...e,
            toast: u,
            dismiss: (e) => c({ type: 'DISMISS_TOAST', toastId: e }),
          }
        );
      }
    },
    3448: function (e, t, r) {
      'use strict';
      r.d(t, {
        cn: function () {
          return o;
        },
      });
      var n = r(1994),
        s = r(3335);
      function o() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, s.m6)((0, n.W)(t));
      }
    },
  },
  function (e) {
    e.O(0, [310, 993, 25, 971, 117, 744], function () {
      return e((e.s = 990));
    }),
      (_N_E = e.O());
  },
]);
