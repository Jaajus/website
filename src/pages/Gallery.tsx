import { motion } from 'motion/react';

const images = [
  "https://lh3.googleusercontent.com/p/AF1QipPPjBbdMHQXL4bddevn8GkSzEMlbOjoJsgMMcQz=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipM0FAEgS0lm9tXbdSSd7x91LqWRf9DFOJ3MsgXM=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipO-Zba_zAsPvfldFmhJ-CkPkUynhg_kIBIESh6J=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPgy4HbAk9ivUg8Wj618eWltoiXklXGc9BQM6hw=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPAnrY3Kta1xtqgcy79JsrxhjAQl2xiQ4VT9wRL=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOTQVhwUm9TNDb4AELOIdRtlpfxXUdiEVfoHttB=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPD2XAgZBqbzELl2hLEDcOuvvzsBaDkgLPc0_SJ=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPkkRI2klnixckF2IHvE9nKnl3WMTLqQmeZKNyH=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipM2yW6oUGbjQL6I9XfA4aezf3pk1gNyrGok9pA6=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMhBqqgl5aMbbRvOrTgcb-e9yoD_C-tDVwpIuza=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipONkJ5vrbRVr0O8iz5nVZDc_DOcBRytctlDG6Mv=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipN_vmpMMGaM7kPl-aZrcl5BsaLFMMLB8gaXSPio=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPe-mtn2UXkRpFhUVrI2x65Y-xjc9RDFemqvDIO=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipNdhCjRbQ3WE0YZM-GiGwOeuL-R9INsxbCL1uwN=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipNU1NOIEG_yHrzV9S2DoStjyotVkxGL1uh2jJ4g=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipNJ_ZsjC5GVJjDU_pAShN5W50VzlY186do21dnK=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMhOlfHa1BR0cpADYpcZ4eEbvlb_3KdC39Pg6cK=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipN8ClcHiPU5_hW_mWdAV1c5qyb2GQRnIf9dlOrE=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMi13xtztDPjoh6Pxm4vtyXL_aEZtvfB-D591lV=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPeEP37ZypR8rJVuv1JKq-HzI71Xodxw9SoQQKW=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMZv8IBCyMQKYf3oyT6k6Qql2ccZheyb08mlNz0=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPl9ZGtksgpWZIvxy4OCOMJWBpV7Kj3-U7WS06B=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOhjmf17MGcW1ZtdvPFPtBK_S29erWlg8cZSAMJ=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipNfwatvl8cjyGjd4rl7c1yQXWE5HT-nwhLv1fO1=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipNZdM1E6QneUF7kwDXh4pyWUUa-KmydrM2aNi29=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMJ4zXGIrZ8rXW3OmOhK1yds4xhbtVlG3_7jZ-2=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMTtcpKzzFPuzWKqOsJ5-NEVnxj3J5yNyCK46Ue=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMkd-95F5t66-LAV3MjZAajwGLMGA55n2SLevS9=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOPMzVd7g3Q_uGPW7rvSkNo7eMZFvV_288W9rIm=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOZQrXk8znjXdC4X07gDunn7zDZbUJzW0yKQGAj=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipP_mvh5lW6r3m9cfYjdaerWm-gasDgUTpMJ5AzC=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPVUqJlz8wkZRGL1Su6sEmfrTqZ9oVMDySs1-6n=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMT9MYKq7hDuqGMSEFgdXLKxLHXTgeh_G9rBMI8=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMlEMP1vsxyazPqefbcjv6vaWEG5-CfSJkOT9yT=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOh5GXGJEcRXc67rF9ibMySx85cCkq4V55UNsUZ=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMkBbauzSKIVpG9BW8wcIyHrFBS5_akKNQR9Kqj=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipP2COpgSe1bUEkNcFD5Y8NiVed0pfpQ0Qx66rJL=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOXuERUB1ZeABtCQ0POsOtZNiSQVCB91dTY_kze=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOGgRLRjaAlGtdk3WXr2ygXd2HUS7HtF7glexsa=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOHpSBzZ8fHASMs4zN08lqM44p3I-9RyEVpklSN=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipNASjmOHgRwLp7HWPIQBHqrfqFg5Je4MBy_S7rm=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOJc2n_72ZqyRchOGeqwgAKQTVnxHIMnhVLd3pZ=s1360-w1360-h1020-rw"
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-20 min-h-screen px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16a">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4"
        >
          Visuals
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl"
        >
          The <span className="italic text-gradient-gold">Experience</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative group overflow-hidden rounded-sm ${i === 2 || i === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] hover:grayscale-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
